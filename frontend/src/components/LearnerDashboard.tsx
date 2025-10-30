import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ui/chart';
import { skillGapsData, aiRecommendations } from '../data/mockData';
import { Sparkles, Clock, TrendingUp, Target, Award, Briefcase } from 'lucide-react';
import { Badge } from './ui/badge';

interface LearnerDashboardProps {
  onCourseClick: (courseId: number) => void;
  onAssessmentClick?: () => void;
  onProgressClick?: () => void;
  onJobMatchingClick?: () => void;
}

export function LearnerDashboard({ onCourseClick, onAssessmentClick, onProgressClick, onJobMatchingClick }: LearnerDashboardProps) {
  const chartConfig = {
    current: {
      label: "Current Level",
      color: "hsl(217, 91%, 60%)",
    },
    target: {
      label: "Target Level",
      color: "hsl(188, 100%, 50%)",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-slate-900 mb-2">Welcome back, Learner</h1>
              <p className="text-slate-600">Your personalized learning journey continues</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onAssessmentClick}>
                <Target className="w-4 h-4 mr-2" />
                Take Assessment
              </Button>
              <Button variant="outline" onClick={onProgressClick}>
                <Award className="w-4 h-4 mr-2" />
                View Progress
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={onJobMatchingClick}>
                <Briefcase className="w-4 h-4 mr-2" />
                Find Jobs
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Skill Gaps Visualization */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                My Skill Gaps
              </CardTitle>
              <CardDescription>Current vs Target skill levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={skillGapsData}>
                    <PolarGrid stroke="#cbd5e1" />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={{ fill: '#64748b' }}
                    />
                    <Radar
                      name="Current Level"
                      dataKey="current"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Target Level"
                      dataKey="target"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
              
              <div className="mt-4 flex gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Current Level</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Target Level</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Recommendations */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Personalized AI Recommendations
              </CardTitle>
              <CardDescription>Courses tailored to close your skill gaps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                {aiRecommendations.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all bg-white"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-slate-900">{course.title}</h3>
                      <Badge variant="outline" className="ml-2">
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => onCourseClick(course.id)}
                      >
                        Start Learning
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
