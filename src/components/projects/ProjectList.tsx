import React from 'react';
import { BarChart2, Calendar, Users } from 'lucide-react';
import Button from '../ui/Button';

const mockProjects = [
  {
    id: '1',
    title: 'Summer Fashion Campaign',
    brand: 'Style Co.',
    progress: 75,
    dueDate: '2024-03-25',
    team: 3,
  },
  {
    id: '2',
    title: 'Tech Review Series',
    brand: 'TechGear',
    progress: 45,
    dueDate: '2024-04-01',
    team: 2,
  },
  {
    id: '3',
    title: 'Beauty Tutorial',
    brand: 'Glow Beauty',
    progress: 90,
    dueDate: '2024-03-20',
    team: 4,
  },
];

export default function ProjectList() {
  return (
    <div className="space-y-4">
      {mockProjects.map((project) => (
        <div
          key={project.id}
          className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.brand}</p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="font-medium">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(project.dueDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{project.team} members</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}