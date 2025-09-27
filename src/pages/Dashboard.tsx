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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-5xl font-bold text-primary">Analytics Dashboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights and metrics for disaster preparedness across your organization
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 pb-16 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-secondary px-2 py-1 bg-secondary/20 rounded-full">{stat.change}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advanced Analytics Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Preparedness Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <BarChart3 className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">Interactive charts and trend analysis</p>
                  <p className="text-sm text-muted-foreground">Real-time data visualization coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Safety Score</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Overall Safety Rating</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Fire Safety</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Earthquake Prep</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Emergency Response</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Fire drill completed", time: "2 hours ago", type: "drill" },
                { action: "Safety training session", time: "5 hours ago", type: "training" },
                { action: "Emergency contact updated", time: "1 day ago", type: "update" },
                { action: "New safety equipment installed", time: "2 days ago", type: "equipment" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;