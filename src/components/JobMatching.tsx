import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { 
  ArrowLeft, 
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  Star,
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  Heart,
  Send
} from 'lucide-react';

interface JobMatchingProps {
  onBack: () => void;
  onJobClick: (jobId: number) => void;
}

const jobListings = [
  {
    id: 1,
    title: 'Senior Machine Learning Engineer',
    company: 'TechCorp Vietnam',
    location: 'Ho Chi Minh City',
    type: 'Full-time',
    salary: '$3000 - $5000',
    match: 92,
    posted: '2 days ago',
    skills: ['Python', 'TensorFlow', 'AWS', 'ML Algorithms'],
    experience: '5+ years',
    logo: 'TC',
    description: 'Looking for an experienced ML engineer to lead our AI initiatives...',
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    company: 'Global IT Services',
    location: 'Hanoi',
    type: 'Full-time',
    salary: '$2500 - $4500',
    match: 85,
    posted: '5 days ago',
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
    experience: '4+ years',
    logo: 'GI',
    description: 'Design and implement scalable cloud infrastructure for enterprise clients...',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Startup Hub',
    location: 'Da Nang',
    type: 'Full-time',
    salary: '$1800 - $3000',
    match: 78,
    posted: '1 week ago',
    skills: ['React', 'Node.js', 'MongoDB', 'Docker'],
    experience: '3+ years',
    logo: 'SH',
    description: 'Join our dynamic team building innovative web applications...',
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Ho Chi Minh City',
    type: 'Full-time',
    salary: '$2800 - $4200',
    match: 81,
    posted: '3 days ago',
    skills: ['Python', 'SQL', 'Tableau', 'Statistics'],
    experience: '3+ years',
    logo: 'AP',
    description: 'Analyze complex datasets and provide actionable insights...',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Remote',
    type: 'Full-time',
    salary: '$2200 - $3800',
    match: 75,
    posted: '4 days ago',
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
    experience: '4+ years',
    logo: 'CT',
    description: 'Automate and optimize our deployment pipelines...',
  },
  {
    id: 6,
    title: 'AI Research Engineer',
    company: 'Innovation Labs',
    location: 'Hanoi',
    type: 'Full-time',
    salary: '$3500 - $6000',
    match: 88,
    posted: '1 day ago',
    skills: ['Deep Learning', 'PyTorch', 'Research', 'NLP'],
    experience: '5+ years',
    logo: 'IL',
    description: 'Conduct cutting-edge AI research and development...',
  },
];

export function JobMatching({ onBack, onJobClick }: JobMatchingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
          <h1 className="text-slate-900 mb-2">AI-Powered Job Matching</h1>
          <p className="text-slate-600">Find opportunities that match your verified skills</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-blue-900">127</div>
                  <p className="text-xs text-slate-600">Total Matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-green-900">85%</div>
                  <p className="text-xs text-slate-600">Avg Match Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-purple-900">{savedJobs.length}</div>
                  <p className="text-xs text-slate-600">Saved Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Send className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-orange-900">12</div>
                  <p className="text-xs text-slate-600">Applied</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="border-slate-200 mb-6">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search by job title, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">{job.logo}</span>
                  </div>

                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-slate-900 mb-1">{job.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
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
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSaveJob(job.id)}
                        className={savedJobs.includes(job.id) ? 'text-red-600' : ''}
                      >
                        <Heart className={`w-5 h-5 ${savedJobs.includes(job.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-slate-700">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-slate-500" />
                          <span className="text-slate-700">{job.experience}</span>
                        </div>
                        <Badge className="bg-slate-200 text-slate-700">
                          {job.type}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-slate-600">Match Score</span>
                          </div>
                          <Progress value={job.match} className="w-24 h-2" />
                          <p className="text-xs text-slate-500 mt-1">{job.match}%</p>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onJobClick(job.id)}
                          >
                            View Details
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
