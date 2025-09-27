import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, Users, MapPin, Calendar } from "lucide-react";

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
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Emergency Drills</h1>
        <p className="text-xl text-muted-foreground">
          Practice emergency procedures to ensure preparedness
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Upcoming Drills</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDrills.map((drill, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{drill.type}</h3>
                  <Badge variant="outline">{drill.status}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{drill.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{drill.participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{drill.location}</span>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => {
                    alert(`Joining ${drill.type} scheduled for ${drill.date}. You'll receive a notification before the drill starts.`);
                  }}
                >
                  Join Drill
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule New Drill</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Coordinate with your school administration to schedule emergency drills.
            </p>
            <Button 
              className="w-full"
              onClick={() => {
                const drillTypes = ["Fire Drill", "Earthquake Drill", "Flood Evacuation", "Lockdown Drill"];
                const selectedType = drillTypes[Math.floor(Math.random() * drillTypes.length)];
                alert(`Scheduling ${selectedType}. Please coordinate with your school administration for approval and timing.`);
              }}
            >
              Schedule Drill
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Drill;