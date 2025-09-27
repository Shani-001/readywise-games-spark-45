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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Wrench className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-primary">Emergency Toolkit</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential tools and resources to keep you prepared for any emergency situation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{tool.description}</p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
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
                          alert("🗺️ Evacuation Route Planner\n\n📍 Step-by-step guide:\n\n1. 🏢 Identify all exit routes in your building\n2. 📍 Mark primary and secondary assembly points\n3. 🛣️ Plan alternative routes for different scenarios\n4. 🔄 Practice routes regularly with your team\n5. 📱 Share routes with all occupants\n\n🚀 Opening interactive route planner tool...\n\n💡 Tip: Always have multiple escape routes planned!");
                        },
                        "Emergency Kit Checklist": () => {
                          const checklist = `✅ EMERGENCY KIT CHECKLIST\n\n💧 WATER (3 days supply - 1 gallon per person per day)\n🍞 FOOD (Non-perishable, 3-day supply)\n🔦 FLASHLIGHT (LED recommended)\n🔋 BATTERIES (Extra sets)\n📻 BATTERY/HAND CRANK RADIO\n💊 FIRST AID KIT (Complete)\n💉 MEDICATIONS (7-day supply)\n📄 IMPORTANT DOCUMENTS (Copies in waterproof container)\n💰 CASH (Small bills)\n👕 CLOTHING (Change of clothes, sturdy shoes)\n🧻 HYGIENE ITEMS (Personal hygiene supplies)\n🔧 TOOLS (Multi-tool, wrench for gas shut-off)\n📱 PHONE CHARGER (Portable battery pack)\n🚨 WHISTLE (For signaling help)\n🗂️ LOCAL MAPS\n🧸 COMFORT ITEMS (For children)\n🐕 PET SUPPLIES (If applicable)\n\n📝 Review and update every 6 months!`;
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
                    <Download className="w-5 h-5 mr-2" />
                    {tool.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-primary">
              <FileText className="w-6 h-6" />
              <span>Quick Reference Guides</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Fire Safety", tip: "Stop, Drop, Roll", icon: "🔥" },
                { title: "Earthquake", tip: "Drop, Cover, Hold", icon: "🌍" },
                { title: "Flood", tip: "Turn Around, Don't Drown", icon: "🌊" },
                { title: "First Aid", tip: "Check, Call, Care", icon: "🏥" }
              ].map((guide, index) => (
                <div key={index} className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <div className="text-2xl mb-2">{guide.icon}</div>
                  <div className="font-semibold text-primary">{guide.title}</div>
                  <div className="text-sm text-muted-foreground">{guide.tip}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Toolkit;