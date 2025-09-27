import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, MapPin, Bell } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      severity: "High Alert",
      title: "Heavy Rainfall Warning",
      location: "Mumbai, Maharashtra",
      time: "2 hours ago",
      description: "Heavy to very heavy rainfall expected. Risk of urban flooding in low-lying areas.",
      variant: "destructive" as const
    },
    {
      severity: "Moderate Alert",
      title: "Heat Wave Conditions",
      location: "Delhi, NCR",
      time: "4 hours ago",
      description: "Temperature expected to reach 45°C. Stay hydrated and avoid outdoor activities.",
      variant: "default" as const
    },
    {
      severity: "Watch",
      title: "Cyclone Formation",
      location: "Kolkata, West Bengal",
      time: "6 hours ago",
      description: "Low pressure area in Bay of Bengal may intensify into cyclonic storm.",
      variant: "secondary" as const
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Live Disaster Alerts</h1>
        <p className="text-xl text-muted-foreground">
          Real-time disaster warnings and safety information
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <Card key={index} className="border-l-4 border-l-destructive">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <Badge variant={alert.variant}>{alert.severity}</Badge>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{alert.time}</span>
                </div>
              </div>
              <CardTitle>{alert.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{alert.location}</span>
              </div>
              <p>{alert.description}</p>
              <Button 
                variant="outline"
                onClick={() => {
                  window.alert(`Detailed information for ${alert.title}:\n\nLocation: ${alert.location}\nSeverity: ${alert.severity}\nTime: ${alert.time}\n\nDescription: ${alert.description}\n\nStay safe and follow local emergency guidelines.`);
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <span>Alert Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Enable notifications to receive real-time disaster alerts for your area.
          </p>
          <Button
            onClick={() => {
              if ("Notification" in window) {
                Notification.requestPermission().then(permission => {
                  if (permission === "granted") {
                    new Notification("Disaster Alert Notifications Enabled!", {
                      body: "You'll now receive real-time disaster alerts for your area.",
                      icon: "/favicon.ico"
                    });
                    alert("✅ Notifications enabled! You'll receive real-time disaster alerts.");
                  } else {
                    alert("Please enable notifications in your browser settings to receive disaster alerts.");
                  }
                });
              } else {
                alert("Your browser doesn't support notifications.");
              }
            }}
          >
            Enable Notifications
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;