import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Users, 
  Trophy, 
  Clock, 
  Target, 
  Zap, 
  Brain, 
  Shield,
  PlayCircle,
  Star
} from "lucide-react";

const Games = () => {
  const games = [
    {
      title: "Crisis Command",
      description: "A strategy-based leadership game where players manage limited resources and make tough decisions to save a disaster-hit city. Test your decision-making skills under pressure.",
      type: "Strategy",
      difficulty: "Advanced",
      duration: "20-30 min",
      players: "1 player",
      skills: ["Resource Management", "Decision Making", "Leadership", "Crisis Planning"],
      icon: Shield,
      color: "bg-game-strategy",
      features: [
        "Real-time resource allocation",
        "Multiple disaster scenarios",
        "Leadership challenges",
        "Impact assessment scoring"
      ]
    },
    {
      title: "Escape the Disaster Zone",
      description: "Navigate through real-life disaster environments like fires, floods, and earthquakes. Make the right survival choices under time pressure to reach safety.",
      type: "Simulation",
      difficulty: "Intermediate",
      duration: "15-25 min",
      players: "1 player",
      skills: ["Quick Thinking", "Survival Skills", "Route Planning", "Risk Assessment"],
      icon: Target,
      color: "bg-game-simulation",
      features: [
        "Multiple disaster scenarios",
        "Time-pressure challenges",
        "Realistic environments",
        "Survival technique training"
      ]
    },
    {
      title: "Disaster Quiz Arena",
      description: "Fast-paced, competitive multiplayer quiz with power-ups and leaderboards. Turn preparedness knowledge into an engaging competition with friends.",
      type: "Quiz",
      difficulty: "Beginner",
      duration: "10-15 min",
      players: "1-8 players",
      skills: ["Knowledge Recall", "Quick Response", "Competitive Spirit", "Learning Retention"],
      icon: Brain,
      color: "bg-game-quiz",
      features: [
        "Multiplayer competitions",
        "Power-ups and bonuses",
        "Global leaderboards",
        "Daily challenges"
      ]
    },
    {
      title: "Rescue Ops Simulator",
      description: "Emphasizes teamwork as players take on roles like Medic, Rescuer, and Coordinator. Work together to save lives and manage chaos in emergency situations.",
      type: "Teamwork",
      difficulty: "Advanced",
      duration: "25-40 min",
      players: "2-6 players",
      skills: ["Teamwork", "Communication", "Role Coordination", "Emergency Response"],
      icon: Users,
      color: "bg-game-teamwork",
      features: [
        "Role-based gameplay",
        "Team coordination challenges",
        "Real-time communication",
        "Collaborative problem solving"
      ]
    }
  ];

  const achievements = [
    { title: "First Responder", description: "Complete your first rescue mission", icon: Shield },
    { title: "Team Player", description: "Successfully coordinate a team rescue", icon: Users },
    { title: "Quiz Master", description: "Win 10 quiz competitions", icon: Trophy },
    { title: "Crisis Manager", description: "Successfully manage a city-wide disaster", icon: Target },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Strategy":
        return "bg-blue-100 text-blue-800";
      case "Simulation":
        return "bg-red-100 text-red-800";
      case "Quiz":
        return "bg-green-100 text-green-800";
      case "Teamwork":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Disaster Preparedness Games</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Interactive games designed for youngsters (15+) to learn disaster preparedness through strategy, 
          decision-making, competition, and collaboration
        </p>
      </div>

      {/* Games Grid */}
      <section className="grid lg:grid-cols-2 gap-8">
        {games.map((game, index) => {
          const IconComponent = game.icon;
          return (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Game Header with Solid Color */}
              <div className={`${game.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-20 transform rotate-12 translate-x-4 -translate-y-4">
                  <IconComponent className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{game.title}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {game.type}
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {game.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <Clock className="w-5 h-5 mx-auto text-muted-foreground" />
                    <div className="text-sm font-medium">{game.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="space-y-1">
                    <Users className="w-5 h-5 mx-auto text-muted-foreground" />
                    <div className="text-sm font-medium">{game.players}</div>
                    <div className="text-xs text-muted-foreground">Players</div>
                  </div>
                  <div className="space-y-1">
                    <Star className="w-5 h-5 mx-auto text-muted-foreground" />
                    <div className="text-sm font-medium">{game.difficulty}</div>
                    <div className="text-xs text-muted-foreground">Level</div>
                  </div>
                </div>

                {/* Skills Learned */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Skills Learned</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Game Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {game.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-center space-x-2">
                        <Zap className="w-3 h-3 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    const gameMessages = {
                      "Crisis Command": "🎮 Loading Crisis Command... Get ready to make tough decisions as a disaster response leader!",
                      "Escape the Disaster Zone": "🔥 Loading Escape the Disaster Zone... Navigate through dangerous scenarios and reach safety!",
                      "Disaster Quiz Arena": "🧠 Loading Disaster Quiz Arena... Test your disaster preparedness knowledge!",
                      "Rescue Ops Simulator": "👥 Loading Rescue Ops Simulator... Work with your team to save lives!"
                    };
                    alert(gameMessages[game.title] || "Game loading...");
                    // Simulate game loading
                    setTimeout(() => {
                      alert(`${game.title} is ready! This is a demo version. Full games coming soon!`);
                    }, 2000);
                  }}
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Game
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Achievements Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Achievements & Badges</h2>
          <p className="text-muted-foreground">Unlock achievements as you progress through the games</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Game Statistics */}
      <section className="bg-muted/50 rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Trophy className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Community Stats</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1,247</div>
            <div className="text-sm text-muted-foreground">Games Played Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">8,394</div>
            <div className="text-sm text-muted-foreground">Total Players</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="text-sm text-muted-foreground">Achievements Unlocked</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">92%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;