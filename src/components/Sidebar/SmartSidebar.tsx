import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Calendar, 
  CheckSquare, 
  Clock, 
  TrendingUp, 
  Zap,
  Plus,
  Search,
  MessageSquare
} from "lucide-react";

const SmartSidebar = () => {
  const upcomingEvents = [
    { title: "Team Standup", time: "9:00 AM", status: "soon" },
    { title: "Project Review", time: "2:00 PM", status: "today" },
    { title: "Client Presentation", time: "4:00 PM", status: "today" }
  ];

  const aiSuggestions = [
    { type: "focus", message: "Block 2 hours for deep work based on your productivity patterns" },
    { type: "break", message: "Schedule a break - you've had 4 consecutive meetings" },
    { type: "optimize", message: "Move your 3 PM meeting to 10 AM for better energy alignment" }
  ];

  const tasks = [
    { title: "Prepare Q4 presentation", priority: "high", due: "Today" },
    { title: "Review team proposals", priority: "medium", due: "Tomorrow" },
    { title: "Update project timeline", priority: "low", due: "This week" }
  ];

  return (
    <div className="w-80 p-6 space-y-6 border-r border-border/50">
      {/* Quick Actions */}
      <Card className="p-4 glass-effect">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start" size="sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            "Schedule meeting with John tomorrow"
          </Button>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-muted-foreground" />
            <Input placeholder="Type naturally..." className="pl-9" />
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <Card className="p-4 glass-effect">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          AI Insights
        </h3>
        <div className="space-y-3">
          {aiSuggestions.map((suggestion, index) => (
            <div key={index} className="p-3 rounded-lg bg-gradient-glow border border-primary/20">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-sm text-foreground">{suggestion.message}</p>
              </div>
              <Button variant="ghost" size="sm" className="mt-2 h-6 text-xs text-primary hover:text-primary">
                Apply suggestion
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Events */}
      <Card className="p-4 glass-effect">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          Upcoming
        </h3>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-smooth">
              <div>
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {event.time}
                </p>
              </div>
              <Badge variant={event.status === 'soon' ? 'default' : 'secondary'} className="text-xs">
                {event.status === 'soon' ? 'Soon' : 'Today'}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Smart Tasks */}
      <Card className="p-4 glass-effect">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-success" />
          Smart Tasks
          <Button variant="ghost" size="sm" className="ml-auto h-6 w-6 p-0">
            <Plus className="w-3 h-3" />
          </Button>
        </h3>
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div key={index} className="p-2 rounded-lg border border-border/30 hover:bg-secondary/30 transition-smooth">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium">{task.title}</p>
                <Badge 
                  variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {task.priority}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{task.due}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Productivity Stats */}
      <Card className="p-4 glass-effect">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-warning" />
          Today's Stats
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Focus Time</span>
            <span className="text-sm font-medium">4.5h / 6h</span>
          </div>
          <div className="w-full bg-secondary/50 rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Meetings</span>
            <span className="text-sm font-medium">3 completed</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Productivity</span>
            <span className="text-sm font-medium text-success">+12% vs yesterday</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SmartSidebar;