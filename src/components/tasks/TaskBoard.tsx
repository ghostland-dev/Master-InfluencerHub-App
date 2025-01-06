import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Plus } from 'lucide-react';
import Button from '../ui/Button';
import { useToast } from '../../hooks/useToast';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Create Instagram Post',
        description: 'Fashion brand campaign post',
        dueDate: '2024-03-20',
        priority: 'high',
      },
      {
        id: '2',
        title: 'Film Product Review',
        description: 'Tech gadget review video',
        dueDate: '2024-03-22',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'Edit YouTube Video',
        description: 'Weekly vlog editing',
        dueDate: '2024-03-21',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      {
        id: '4',
        title: 'TikTok Draft',
        description: 'New dance challenge',
        dueDate: '2024-03-23',
        priority: 'low',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'Story Highlights',
        description: 'Weekly recap stories',
        dueDate: '2024-03-19',
        priority: 'medium',
      },
    ],
  },
];

const TaskCard = React.memo(({ task, index }: { task: Task; index: number }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
      >
        <h4 className="font-medium text-gray-900 mb-2">{task.title}</h4>
        <p className="text-sm text-gray-600 mb-3">{task.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              task.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : task.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {task.priority}
          </span>
        </div>
      </div>
    )}
  </Draggable>
));

TaskCard.displayName = 'TaskCard';

const ColumnContent = React.memo(({ column }: { column: Column }) => (
  <Droppable droppableId={column.id}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="space-y-3"
      >
        {column.tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} />
        ))}
        {provided.placeholder}
        {column.id === 'todo' && (
          <Button
            variant="outline"
            className="w-full mt-3"
            leftIcon={<Plus className="h-4 w-4" />}
          >
            Add Task
          </Button>
        )}
      </div>
    )}
  </Droppable>
));

ColumnContent.displayName = 'ColumnContent';

export default function TaskBoard() {
  const [columns, setColumns] = React.useState(initialColumns);
  const { addToast } = useToast();

  const onDragEnd = React.useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destColumn = columns.find(col => col.id === destination.droppableId);
    const task = sourceColumn?.tasks.find(t => t.id === draggableId);

    if (!sourceColumn || !destColumn || !task) return;

    setColumns(prevColumns => {
      const newColumns = prevColumns.map(column => {
        if (column.id === source.droppableId) {
          return {
            ...column,
            tasks: column.tasks.filter(t => t.id !== draggableId),
          };
        }
        if (column.id === destination.droppableId) {
          const newTasks = [...column.tasks];
          newTasks.splice(destination.index, 0, task);
          return {
            ...column,
            tasks: newTasks,
          };
        }
        return column;
      });

      if (source.droppableId !== destination.droppableId) {
        addToast({
          type: 'success',
          title: 'Task Updated',
          message: `Task moved to ${destColumn.title}`,
        });
      }

      return newColumns;
    });
  }, [columns, addToast]);

  return (
    <div className="h-[600px] overflow-x-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-6 h-full p-4">
          {columns.map(column => (
            <div
              key={column.id}
              className="flex-shrink-0 w-80 bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{column.title}</h3>
                <span className="text-sm text-gray-500">
                  {column.tasks.length}
                </span>
              </div>
              <ColumnContent column={column} />
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}