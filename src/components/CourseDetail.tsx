import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Clock, 
  BookOpen, 
  Award, 
  PlayCircle, 
  CheckCircle2,
  Lock,
  TrendingUp,
  Users,
  Star
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface CourseDetailProps {
  courseId: number;
  onBack: () => void;
}

export function CourseDetail({ courseId, onBack }: CourseDetailProps) {
  const course = {
    id: courseId,
    title: 'Advanced Machine Learning with Python',
    instructor: 'Dr. Sarah Chen',
    rating: 4.8,
    students: 12453,
    duration: '6 weeks',
    level: 'Advanced',
    description: 'Master deep learning algorithms and neural networks. This comprehensive course covers everything from basic neural networks to advanced architectures like CNNs, RNNs, and Transformers.',
    skills: ['Deep Learning', 'Neural Networks', 'Python', 'TensorFlow', 'PyTorch'],
    progress: 0,
  };

  const modules = [
    {
      id: 1,
      title: 'Introduction to Deep Learning',
      lessons: 5,
      duration: '2h 30m',
      completed: false,
      locked: false,
    },
    {
      id: 2,
      title: 'Neural Network Fundamentals',
      lessons: 8,
      duration: '4h 15m',
      completed: false,
      locked: false,
    },
    {
      id: 3,
      title: 'Convolutional Neural Networks',
      lessons: 10,
      duration: '5h 45m',
      completed: false,
      locked: true,
    },
    {
      id: 4,
      title: 'Recurrent Neural Networks',
      lessons: 9,
      duration: '4h 30m',
      completed: false,
      locked: true,
    },
    {
      id: 5,
      title: 'Transformer Architecture',
      lessons: 12,
      duration: '6h 20m',
      completed: false,
      locked: true,
    },
    {
      id: 6,
      title: 'Final Project & Certification',
      lessons: 3,
      duration: '8h 00m',
      completed: false,
      locked: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-slate-600 hover:text-slate-900"
        >
          ← Back to Dashboard
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-3">{course.level}</Badge>
                    <h1 className="text-slate-900 mb-2">{course.title}</h1>
                    <p className="text-slate-600">by {course.instructor}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-slate-900">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    47 lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Certificate included
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Course Progress</span>
                    <span className="text-slate-900">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Course Content Tabs */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <Tabs defaultValue="curriculum">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="curriculum" className="mt-6 space-y-4">
                    {modules.map((module) => (
                      <div
                        key={module.id}
                        className={`p-4 border rounded-lg transition-all ${
                          module.locked
                            ? 'border-slate-200 bg-slate-50'
                            : 'border-blue-200 bg-white hover:shadow-md cursor-pointer'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            {module.completed ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                            ) : module.locked ? (
                              <Lock className="w-5 h-5 text-slate-400 mt-1" />
                            ) : (
                              <PlayCircle className="w-5 h-5 text-blue-500 mt-1" />
                            )}
                            <div>
                              <h3 className={`mb-1 ${module.locked ? 'text-slate-500' : 'text-slate-900'}`}>
                                Module {module.id}: {module.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-slate-600">
                                <span>{module.lessons} lessons</span>
                                <span>•</span>
                                <span>{module.duration}</span>
                              </div>
                            </div>
                          </div>
                          {!module.locked && (
                            <Button size="sm" variant="outline">
                              Start Module
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="about" className="mt-6">
                    <div className="space-y-4 text-slate-700">
                      <div>
                        <h3 className="text-slate-900 mb-2">What you'll learn</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Build and train deep neural networks from scratch</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Implement CNNs for computer vision tasks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Master RNNs and LSTMs for sequence modeling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                            <span>Understand and apply Transformer architectures</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-slate-900 mb-2">Prerequisites</h3>
                        <ul className="space-y-2 text-slate-600">
                          <li>• Intermediate Python programming skills</li>
                          <li>• Basic understanding of linear algebra and calculus</li>
                          <li>• Familiarity with NumPy and pandas</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6 space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-slate-900">Student {review}</span>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-slate-600">
                              Excellent course! The instructor explains complex concepts very clearly.
                              The hands-on projects really helped solidify my understanding.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enroll Card */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 sticky top-24">
              <CardContent className="p-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4" size="lg">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
                <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                  Add to Watchlist
                </Button>
              </CardContent>
            </Card>

            {/* Skills You'll Gain */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Skills You'll Gain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Machine Learning', gain: '+25%' },
                    { name: 'Deep Learning', gain: '+40%' },
                    { name: 'Python', gain: '+15%' },
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-700">{skill.name}</span>
                      <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                        {skill.gain}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificate Info */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">Earn a Certificate</h3>
                    <p className="text-sm text-slate-600">
                      Complete this course and receive a verified credential for your skill wallet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
