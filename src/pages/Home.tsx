import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Flame, Waves, Mountain, Zap, TreePine, AlertTriangle, Clock, Eye } from "lucide-react";

const Home = () => {
  const disasters = [
    { name: "Fire", icon: Flame, color: "text-red-500" },
    { name: "Flood", icon: Waves, color: "text-blue-500" },
    { name: "Earthquake", icon: Mountain, color: "text-yellow-500" },
    { name: "Cyclone", icon: Zap, color: "text-purple-500" },
    { name: "Landslide", icon: TreePine, color: "text-green-500" },
  ];

  const alerts = [
    { severity: "High Alert", location: "Mumbai - Heavy Rainfall", time: "2 hours ago", variant: "destructive" as const },
    { severity: "Moderate Alert", location: "Delhi - Heat Wave", time: "4 hours ago", variant: "default" as const },
    { severity: "Watch", location: "Kolkata - Cyclone Formation", time: "6 hours ago", variant: "secondary" as const },
  ];

  const helplines = [
    { number: "100", service: "Police", color: "bg-blue-500" },
    { number: "101", service: "Fire Brigade", color: "bg-red-500" },
    { number: "108", service: "Ambulance", color: "bg-green-500" },
    { number: "1078", service: "NDMA", color: "bg-orange-500" },
  ];

  const stats = [
    { value: "10,000+", label: "Students Trained" },
    { value: "500+", label: "Schools Registered" },
    { value: "2,500+", label: "Drills Completed" },
    { value: "95%", label: "Preparedness Score" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold">
          Making Schools{" "}
          <span className="text-destructive">Disaster-Ready</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive disaster preparedness education and emergency response training for Indian schools
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
            <Link to="/learn">Start Learning</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/drill">Join Drill</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/games">Get Prepared</Link>
          </Button>
        </div>
      </section>

      {/* Disaster Types */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {disasters.map((disaster) => {
          const IconComponent = disaster.icon;
          return (
            <div
              key={disaster.name}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card hover:bg-accent transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-background border flex items-center justify-center">
                <IconComponent className={`w-6 h-6 ${disaster.color}`} />
              </div>
              <span className="text-sm font-medium">{disaster.name}</span>
            </div>
          );
        })}
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Live Alerts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span>Live Disaster Alerts</span>
            </CardTitle>
            <Button variant="link" asChild className="text-sm">
              <Link to="/alerts">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="space-y-1">
                  <Badge variant={alert.variant}>{alert.severity}</Badge>
                  <p className="text-sm font-medium">{alert.location}</p>
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Enable Alert Notifications
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Helplines */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Helplines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {helplines.map((helpline) => (
                <div
                  key={helpline.number}
                  className={`p-4 rounded-lg text-white text-center ${helpline.color}`}
                >
                  <div className="text-2xl font-bold">{helpline.number}</div>
                  <div className="text-sm">{helpline.service}</div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              View All Contacts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;