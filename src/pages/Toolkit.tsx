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
                <Button 
                  className="w-full"
                  onClick={() => {
                    const actions = {
                      "Emergency Contact List": () => {
                        const contacts = `📞 EMERGENCY CONTACTS 📞\n\n🚨 NATIONAL EMERGENCY: 112\n🚑 AMBULANCE: 108\n🚒 FIRE: 101\n👮 POLICE: 100\n🌊 DISASTER HELPLINE: 1078\n⛑️ WOMEN HELPLINE: 1091\n👶 CHILD HELPLINE: 1098\n\n📋 KEEP THIS LIST HANDY!`;
                        alert(contacts);
                        
                        // Create downloadable file
                        const blob = new Blob([contacts], { type: 'text/plain' });
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'emergency-contacts.txt';
                        a.click();
                        window.URL.revokeObjectURL(url);
                      },
                      "Evacuation Route Planner": () => {
                        alert("🗺️ Evacuation Route Planner\n\n1. Identify all exit routes in your building\n2. Mark assembly points\n3. Plan alternative routes\n4. Practice regularly\n\nOpening interactive route planner...");
                      },
                      "Emergency Kit Checklist": () => {
                        const checklist = `✅ EMERGENCY KIT CHECKLIST\n\n💧 WATER (3 days supply)\n🍞 FOOD (Non-perishable)\n🔦 FLASHLIGHT\n🔋 BATTERIES\n📻 RADIO\n💊 FIRST AID KIT\n💉 MEDICATIONS\n📄 IMPORTANT DOCUMENTS\n💰 CASH\n👕 CLOTHING\n🧻 HYGIENE ITEMS\n🔧 TOOLS\n📱 PHONE CHARGER\n🚨 WHISTLE\n🗂️ LOCAL MAPS`;
                        alert(checklist);
                        
                        const blob = new Blob([checklist], { type: 'text/plain' });
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'emergency-kit-checklist.txt';
                        a.click();
                        window.URL.revokeObjectURL(url);
                      }
                    };
                    actions[tool.title]?.() || alert(`${tool.action} functionality for ${tool.title}`);
                  }}
                >
                  {tool.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Toolkit;