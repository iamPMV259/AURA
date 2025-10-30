import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Trophy,
  Target,
  TrendingUp,
  Clock,
  BookOpen,
  Award,
  Calendar,
  Flame
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface LearningProgressProps {
  onBack: () => void;
}

const weeklyProgressData = [
  { week: 'Week 1', hours: 8, completed: 3 },
  { week: 'Week 2', hours: 12, completed: 5 },
  { week: 'Week 3', hours: 15, completed: 7 },
  { week: 'Week 4', hours: 10, completed: 4 },
  { week: 'Week 5', hours: 18, completed: 8 },
  { week: 'Week 6', hours: 20, completed: 10 },
];

const skillProgressData = [
  { month: 'Jan', ml: 45, cloud: 30, data: 50 },
  { month: 'Feb', ml: 52, cloud: 38, data: 55 },
  { month: 'Mar', ml: 58, cloud: 45, data: 62 },
  { month: 'Apr', ml: 65, cloud: 50, data: 70 },
  { month: 'May', ml: 72, cloud: 58, data: 75 },
  { month: 'Jun', ml: 78, cloud: 65, data: 82 },
];

const currentCourses = [
  {
    id: 1,
    name: 'Advanced Machine Learning',
    progress: 75,
    totalLessons: 48,
    completedLessons: 36,
    nextLesson: 'Neural Network Optimization',
    deadline: '2025-11-15',
  },
  {
    id: 2,
    name: 'AWS Cloud Architecture',
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    nextLesson: 'VPC and Networking',
    deadline: '2025-12-01',
  },
  {
    id: 3,
    name: 'Data Visualization',
    progress: 90,
    totalLessons: 24,
    completedLessons: 22,
    nextLesson: 'Final Project',
    deadline: '2025-11-05',
  },
];

const achievements = [
  { id: 1, title: '7-Day Streak', icon: 'flame', color: 'orange' },
  { id: 2, title: 'Fast Learner', icon: 'trophy', color: 'yellow' },
  { id: 3, title: '10 Courses Completed', icon: 'award', color: 'purple' },
  { id: 4, title: '100 Hours Studied', icon: 'clock', color: 'blue' },
];

export function LearningProgress({ onBack }: LearningProgressProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Learning Progress</h1>
          <p className="text-slate-600">Track your learning journey and achievements</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-blue-600" />
                <Badge className="bg-blue-600">+12%</Badge>
              </div>
              <p className="text-slate-600 text-sm mb-1">Total Hours</p>
              <div className="text-blue-900">83 hrs</div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <BookOpen className="w-8 h-8 text-green-600" />
                <Badge className="bg-green-600">Active</Badge>
              </div>
              <p className="text-slate-600 text-sm mb-1">Courses Enrolled</p>
              <div className="text-green-900">12</div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Award className="w-8 h-8 text-purple-600" />
                <Badge className="bg-purple-600">New</Badge>
              </div>
              <p className="text-slate-600 text-sm mb-1">Certificates Earned</p>
              <div className="text-purple-900">8</div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Flame className="w-8 h-8 text-orange-600" />
                <Badge className="bg-orange-600">🔥</Badge>
              </div>
              <p className="text-slate-600 text-sm mb-1">Current Streak</p>
              <div className="text-orange-900">7 days</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Progress Chart */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Weekly Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="hours" fill="#3b82f6" name="Hours Studied" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="completed" fill="#06b6d4" name="Lessons Completed" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Skill Progress Chart */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Target className="w-5 h-5 text-purple-600" />
                Skill Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={skillProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Line type="monotone" dataKey="ml" stroke="#8b5cf6" strokeWidth={2} name="Machine Learning" />
                  <Line type="monotone" dataKey="cloud" stroke="#06b6d4" strokeWidth={2} name="Cloud Computing" />
                  <Line type="monotone" dataKey="data" stroke="#10b981" strokeWidth={2} name="Data Analysis" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Current Courses */}
        <Card className="border-slate-200 mb-6">
          <CardHeader>
            <CardTitle className="text-slate-900">Current Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentCourses.map((course) => (
              <div key={course.id} className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-slate-900 mb-1">{course.name}</h3>
                    <p className="text-sm text-slate-600">
                      Next: {course.nextLesson}
                    </p>
                  </div>
                  <Badge variant={course.progress >= 80 ? 'default' : 'outline'} className={course.progress >= 80 ? 'bg-green-600' : ''}>
                    {course.progress}%
                  </Badge>
                </div>
                
                <Progress value={course.progress} className="h-2 mb-3" />
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">
                    {course.completedLessons}/{course.totalLessons} lessons completed
                  </span>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>Due {new Date(course.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Trophy className="w-5 h-5 text-yellow-600" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon === 'flame' ? Flame : achievement.icon === 'trophy' ? Trophy : achievement.icon === 'award' ? Award : Clock;
                const colorClass = achievement.color === 'orange' ? 'from-orange-500 to-red-500' :
                                  achievement.color === 'yellow' ? 'from-yellow-500 to-amber-500' :
                                  achievement.color === 'purple' ? 'from-purple-500 to-pink-500' :
                                  'from-blue-500 to-cyan-500';
                
                return (
                  <div key={achievement.id} className="p-4 border border-slate-200 rounded-lg text-center hover:shadow-lg transition-all">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-slate-700">{achievement.title}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
