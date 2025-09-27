import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Shield } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Students Trained", value: "10,247", change: "+12%", icon: Users },
    { title: "Schools Registered", value: "523", change: "+8%", icon: Shield },
    { title: "Drills Completed", value: "2,834", change: "+15%", icon: TrendingUp },
    { title: "Preparedness Score", value: "95%", change: "+2%", icon: BarChart3 }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Track disaster preparedness progress and metrics
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <IconComponent className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-green-600">{stat.change}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preparedness Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Detailed analytics and trends will be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;