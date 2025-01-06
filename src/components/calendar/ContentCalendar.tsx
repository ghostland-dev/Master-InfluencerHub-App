import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/useToast';

const mockEvents = [
  {
    id: '1',
    title: 'Instagram Post - Fashion Brand',
    start: '2024-03-20',
    backgroundColor: '#818cf8',
    borderColor: '#818cf8',
  },
  {
    id: '2',
    title: 'YouTube Video - Product Review',
    start: '2024-03-22',
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
  },
  {
    id: '3',
    title: 'TikTok Challenge',
    start: '2024-03-25',
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
];

export default function ContentCalendar() {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleDateClick = (arg: any) => {
    navigate(`/calendar/new?date=${arg.dateStr}`);
  };

  const handleEventClick = (arg: any) => {
    navigate(`/calendar/event/${arg.event.id}`);
  };

  const handleEventDrop = (arg: any) => {
    addToast({
      type: 'success',
      title: 'Event Updated',
      message: 'The content has been rescheduled successfully.',
    });
  };

  return (
    <div className="h-[600px] bg-white rounded-lg p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={mockEvents}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        height="100%"
      />
    </div>
  );
}