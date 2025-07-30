import { useState } from "react";
import { ChevronLeft, ChevronRight, Bot, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CalendarGrid = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const isCurrentMonth = currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;

  // Sample events for demonstration
  const sampleEvents = {
    15: [{ title: "Team Meeting", time: "9:00 AM", type: "meeting" }],
    18: [{ title: "Project Review", time: "2:00 PM", type: "work" }],
    22: [{ title: "Client Call", time: "11:00 AM", type: "meeting" }, { title: "Gym Session", time: "6:00 PM", type: "personal" }],
    25: [{ title: "AI Suggested: Focus Time", time: "10:00 AM", type: "ai-suggested" }]
  };

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="hover:bg-secondary"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="hover:bg-secondary"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Bot className="w-4 h-4 text-primary" />
          <span>AI optimizing your schedule...</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <Card className="p-6 glass-effect">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {daysOfWeek.map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
                min-h-[120px] p-2 border border-border/30 rounded-lg hover:bg-secondary/50 transition-smooth cursor-pointer
                ${day === today && isCurrentMonth ? 'bg-primary/10 border-primary/30' : ''}
                ${!day ? 'opacity-0 pointer-events-none' : ''}
              `}
            >
              {day && (
                <>
                  <div className={`text-sm font-medium mb-2 ${day === today && isCurrentMonth ? 'text-primary' : ''}`}>
                    {day}
                  </div>
                  
                  {/* Events for this day */}
                  <div className="space-y-1">
                    {sampleEvents[day as keyof typeof sampleEvents]?.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`
                          text-xs p-1 rounded-md truncate transition-smooth
                          ${event.type === 'meeting' ? 'bg-primary/20 text-primary border border-primary/30' : ''}
                          ${event.type === 'work' ? 'bg-accent/20 text-accent border border-accent/30' : ''}
                          ${event.type === 'personal' ? 'bg-success/20 text-success border border-success/30' : ''}
                          ${event.type === 'ai-suggested' ? 'bg-gradient-glow border border-primary/30 text-primary' : ''}
                        `}
                      >
                        <div className="flex items-center gap-1">
                          {event.type === 'ai-suggested' && <Bot className="w-2 h-2" />}
                          <Clock className="w-2 h-2" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="truncate">{event.title}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CalendarGrid;