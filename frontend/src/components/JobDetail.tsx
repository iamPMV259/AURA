import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Building2,
  MapPin,
  DollarSign,
  Clock,
  Users,
  Briefcase,
  Star,
  CheckCircle2,
  Send,
  Heart,
  Share2,
  Calendar,
  Globe,
  Award
} from 'lucide-react';

interface JobDetailProps {
  jobId: number;
  onBack: () => void;
}

const jobDetails: Record<number, any> = {
  1: {
    title: 'Senior Machine Learning Engineer',
    company: 'TechCorp Vietnam',
    logo: 'TC',
    location: 'Ho Chi Minh City',
    type: 'Full-time',
    salary: '$3000 - $5000',
    experience: '5+ years',
    posted: '2 days ago',
    applicants: 47,
    match: 92,
    about: 'TechCorp Vietnam is a leading technology company specializing in AI and machine learning solutions. We work with Fortune 500 companies to build cutting-edge ML systems.',
    description: 'We are looking for an experienced Senior Machine Learning Engineer to join our AI team. You will lead the development of ML models and work on challenging problems in computer vision and NLP.',
    responsibilities: [
      'Design and implement machine learning models for production systems',
      'Lead technical discussions and mentor junior engineers',
      'Collaborate with product teams to identify ML opportunities',
      'Optimize model performance and scalability',
      'Stay current with latest ML research and best practices'
    ],
    requirements: [
      '5+ years of experience in machine learning',
      'Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch)',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Deep understanding of ML algorithms and statistics',
      'Excellent communication and leadership skills'
    ],
    niceToHave: [
      'PhD or Masters in Computer Science or related field',
      'Published research papers in ML conferences',
      'Experience with MLOps and model deployment',
      'Contributions to open-source ML projects'
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'ML Algorithms', 'Deep Learning', 'Computer Vision', 'NLP'],
    benefits: [
      'Competitive salary and equity package',
      'Health insurance for you and family',
      'Flexible working hours and remote options',
      'Annual learning budget',
      'Modern office with free meals',
      '20 days paid vacation'
    ],
    website: 'techcorp.vn',
    employees: '500-1000',
    founded: '2015',
    industry: 'Artificial Intelligence'
  }
};

export function JobDetail({ jobId, onBack }: JobDetailProps) {
  const job = jobDetails[jobId] || jobDetails[1];

  const matchedSkills = job.skills.slice(0, 5);
  const missingSkills = job.skills.slice(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Job Search
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <div className="flex gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">{job.logo}</span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-slate-900 mb-2">{job.title}</h1>
                    <div className="flex items-center gap-4 text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.posted}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600">{job.type}</Badge>
                      <Badge variant="outline">{job.experience}</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {job.salary}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Content */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <Tabs defaultValue="description">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="company">Company</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-slate-900 mb-3">About the Role</h3>
                      <p className="text-slate-600">{job.description}</p>
                    </div>

                    <div>
                      <h3 className="text-slate-900 mb-3">Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-slate-900 mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-slate-900 mb-3">Nice to Have</h3>
                      <ul className="space-y-2">
                        {job.niceToHave.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600">
                            <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="company" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-slate-900 mb-3">About {job.company}</h3>
                      <p className="text-slate-600 mb-4">{job.about}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">Company Size</span>
                          </div>
                          <p className="text-slate-900">{job.employees} employees</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Founded</span>
                          </div>
                          <p className="text-slate-900">{job.founded}</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm">Industry</span>
                          </div>
                          <p className="text-slate-900">{job.industry}</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            <Globe className="w-4 h-4" />
                            <span className="text-sm">Website</span>
                          </div>
                          <a href={`https://${job.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {job.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="benefits" className="mt-6">
                    <h3 className="text-slate-900 mb-4">Benefits & Perks</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {job.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Match Score */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-blue-900 mb-1">Match Score</div>
                <Progress value={job.match} className="h-3 mb-2" />
                <p className="text-blue-600">{job.match}%</p>
                <p className="text-sm text-slate-600 mt-2">
                  Your skills are a great fit for this role!
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Job Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Applicants</span>
                  <span className="text-slate-900">{job.applicants}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Posted</span>
                  <span className="text-slate-900">{job.posted}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Location</span>
                  <span className="text-slate-900">{job.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills Match */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Skills Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Matched Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {matchedSkills.map((skill: string, index: number) => (
                      <Badge key={index} className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                {missingSkills.length > 0 && (
                  <div>
                    <p className="text-sm text-slate-600 mb-2">Skills to Learn</p>
                    <div className="flex flex-wrap gap-2">
                      {missingSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-orange-700 border-orange-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-purple-600">
              <CardContent className="p-6 text-center text-white">
                <h3 className="mb-2">Ready to Apply?</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Your verified credentials will be automatically shared
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
