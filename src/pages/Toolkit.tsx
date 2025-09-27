import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Download, FileText, Map } from "lucide-react";

const Toolkit = () => {
  const tools = [
    {
      title: "Emergency Contact List",
      description: "Comprehensive list of emergency contacts and helplines",
      icon: FileText,
      action: "Download"
    },
    {
      title: "Evacuation Route Planner",
      description: "Plan and visualize evacuation routes for your school",
      icon: Map,
      action: "Open Tool"
    },
    {
      title: "Emergency Kit Checklist",
      description: "Complete checklist for emergency preparedness kit",
      icon: Download,
      action: "Download"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Emergency Toolkit</h1>
        <p className="text-xl text-muted-foreground">
          Essential tools and resources for disaster preparedness
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{tool.description}</p>
                <Button className="w-full">{tool.action}</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Toolkit;