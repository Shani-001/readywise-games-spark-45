import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Clock, Users } from "lucide-react";

const Learn = () => {
  const disasterVideos = [
    {
      title: "Earthquake Safety & Response",
      description: "Learn essential earthquake preparedness, safety measures during tremors, and post-earthquake response protocols.",
      videoUrl: "https://youtu.be/avvBpyh1kdE?si=UVHXNXHQUCuqi3Cr",
      duration: "8:45",
      difficulty: "Beginner",
      topics: ["Drop, Cover, Hold", "Building Safety", "Emergency Kit"],
    },
    {
      title: "Flood Preparedness & Safety",
      description: "Comprehensive guide to flood safety, evacuation procedures, and water-related emergency response.",
      videoUrl: "https://youtu.be/LiZ5hryi2Sw?t=31",
      duration: "12:30",
      difficulty: "Intermediate",
      topics: ["Evacuation Routes", "Water Safety", "Rescue Techniques"],
    },
    {
      title: "Fire Safety & Prevention",
      description: "Essential fire safety protocols, prevention strategies, and emergency evacuation procedures.",
      videoUrl: "https://youtu.be/KyCvJg6GCkQ?t=380",
      duration: "15:20",
      difficulty: "Beginner",
      topics: ["Fire Prevention", "Evacuation Plans", "Fire Extinguishers"],
    },
    {
      title: "Cyclone Preparedness",
      description: "Understanding cyclone formation, early warning systems, and protective measures during storms.",
      videoUrl: "https://youtu.be/fR8-yQlZ9Ts?t=649",
      duration: "10:15",
      difficulty: "Intermediate",
      topics: ["Weather Monitoring", "Shelter Preparation", "Emergency Supplies"],
    },
    {
      title: "Landslide Awareness & Safety",
      description: "Recognizing landslide risks, warning signs, and appropriate response measures.",
      videoUrl: "https://youtu.be/krJLnXpemtQ?t=13",
      duration: "7:30",
      difficulty: "Beginner",
      topics: ["Risk Assessment", "Warning Signs", "Safe Zones"],
    },
  ];

  const learningModules = [
    {
      title: "Basic Disaster Awareness",
      description: "Introduction to common disasters and basic preparedness concepts",
      lessons: 8,
      duration: "2 hours",
      level: "Beginner",
    },
    {
      title: "Emergency Response Protocols",
      description: "Step-by-step emergency response procedures for different scenarios",
      lessons: 12,
      duration: "3 hours",
      level: "Intermediate",
    },
    {
      title: "First Aid & Medical Response",
      description: "Essential first aid skills for disaster situations",
      lessons: 10,
      duration: "2.5 hours",
      level: "Intermediate",
    },
    {
      title: "Community Preparedness",
      description: "Building resilient communities and coordinated response systems",
      lessons: 6,
      duration: "1.5 hours",
      level: "Advanced",
    },
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

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Disaster Preparedness Learning</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive educational resources and interactive modules to build disaster preparedness knowledge
        </p>
      </div>

      {/* Educational Videos Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <PlayCircle className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Educational Videos</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disasterVideos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full"
                  onClick={() => window.open(video.videoUrl, '_blank')}
                >
                  <PlayCircle className="w-6 h-6 mr-2" />
                  Watch Video
                </Button>
              </div>
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(video.difficulty)}>
                    {video.difficulty}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{video.description}</p>
                <div className="flex flex-wrap gap-1">
                  {video.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Interactive Learning Modules</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {learningModules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(module.level)}>
                    {module.level}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                <CardTitle>{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{module.description}</p>
                <Button className="w-full">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Groups Section */}
      <section className="bg-muted/50 rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Join Study Groups</h2>
        </div>
        <p className="text-muted-foreground">
          Connect with other students and educators to share knowledge and practice emergency scenarios together.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">Find Study Groups</Button>
          <Button variant="outline">Create New Group</Button>
          <Button variant="outline">Schedule Practice Drill</Button>
        </div>
      </section>
    </div>
  );
};

export default Learn;