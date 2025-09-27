import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, Users, MapPin, Calendar, BarChart3 } from "lucide-react";

const Drill = () => {
  const upcomingDrills = [
    {
      type: "Fire Drill",
      date: "Tomorrow, 10:00 AM",
      participants: 245,
      location: "All Floors",
      status: "scheduled"
    },
    {
      type: "Earthquake Drill",
      date: "March 15, 2:00 PM",
      participants: 180,
      location: "Classroom Block",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Bell className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-primary">Emergency Drills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice emergency procedures to ensure everyone is prepared when it matters most
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Drills */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Bell className="w-6 h-6" />
                <span>Upcoming Drills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {upcomingDrills.map((drill, index) => (
                <div key={index} className="border-2 border-primary/10 rounded-xl p-4 space-y-3 hover:border-primary/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-primary">{drill.type}</h3>
                    <Badge 
                      variant="outline" 
                      className={drill.status === 'scheduled' ? 'bg-secondary/20 text-secondary border-secondary' : 'bg-primary/20 text-primary border-primary'}
                    >
                      {drill.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{drill.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{drill.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground md:col-span-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{drill.location}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      alert(`✅ Successfully joined ${drill.type} scheduled for ${drill.date}.\n\n📱 You'll receive a notification 15 minutes before the drill starts.\n\n📍 Please report to your designated assembly point when the alarm sounds.`);
                    }}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Join Drill
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Schedule New Drill */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-secondary/10">
              <CardTitle className="text-secondary">Schedule New Drill</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <p className="text-muted-foreground">
                  Coordinate with your school administration to schedule emergency drills and keep everyone prepared.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-primary">Fire Drill</div>
                    <div className="text-xs text-muted-foreground">Evacuation</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-primary">Earthquake</div>
                    <div className="text-xs text-muted-foreground">Drop, Cover, Hold</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-primary">Lockdown</div>
                    <div className="text-xs text-muted-foreground">Security</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="font-semibold text-primary">Flood</div>
                    <div className="text-xs text-muted-foreground">Evacuation</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  size="lg"
                  onClick={() => {
                    const drillTypes = ["Fire Drill", "Earthquake Drill", "Flood Evacuation", "Lockdown Drill"];
                    const selectedType = drillTypes[Math.floor(Math.random() * drillTypes.length)];
                    alert(`📅 Scheduling ${selectedType}\n\n✅ Request sent to school administration\n\n📋 Next steps:\n• Await approval from administration\n• Receive confirmation with date/time\n• Automatic notifications will be sent to all participants\n\n📞 Contact admin office for urgent scheduling needs.`);
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Drill
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Drill Statistics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Drill Performance Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Drills This Month</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <div className="text-2xl font-bold text-secondary">96%</div>
                <div className="text-sm text-muted-foreground">Participation Rate</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">2:45</div>
                <div className="text-sm text-muted-foreground">Avg. Evacuation Time</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">A+</div>
                <div className="text-sm text-muted-foreground">Safety Grade</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Drill;