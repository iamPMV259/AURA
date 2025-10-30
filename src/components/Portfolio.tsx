import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe,
  Briefcase,
  Calendar,
  Award,
  Trophy,
  FileText,
  Download,
  Share2,
  Star,
  TrendingUp
} from 'lucide-react';
import { portfolioData } from '../data/mockData';

interface PortfolioProps {
  onSettingsClick?: () => void;
}

export function Portfolio({ onSettingsClick }: PortfolioProps) {
  const { personalInfo, careerPath, topSkills, projects, achievements } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Card className="border-slate-200 mb-6 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"></div>
          <CardContent className="relative pt-0 pb-6 px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16 md:-mt-12">
              {/* Avatar */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0">
                <User className="w-16 h-16 text-white" />
              </div>

              {/* Personal Info */}
              <div className="flex-1 pt-2 md:pb-2">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h1 className="text-slate-900 mb-2">{personalInfo.name}</h1>
                    <p className="text-slate-600">{personalInfo.bio}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" className="border-slate-300" onClick={onSettingsClick}>
                      <Download className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Profile
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-blue-600" />
                    {personalInfo.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Github className="w-4 h-4 text-blue-600" />
                    <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      Portfolio Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Career Path */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Career Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {careerPath.map((job, index) => (
                    <div key={job.id} className="relative">
                      {index !== careerPath.length - 1 && (
                        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-slate-200"></div>
                      )}
                      <div className="flex gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          job.current 
                            ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
                            : 'bg-slate-300'
                        }`}>
                          <Briefcase className={`w-5 h-5 ${job.current ? 'text-white' : 'text-slate-600'}`} />
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-slate-900">{job.title}</h3>
                              <p className="text-slate-600">{job.company}</p>
                            </div>
                            {job.current && (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              {' - '}
                              {job.current ? 'Present' : new Date(job.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                            <span>•</span>
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <p className="text-sm text-slate-700 mb-3">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Star className="w-5 h-5 text-purple-600" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-slate-900">{project.name}</h3>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">{project.impact}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-blue-600 mb-1">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-600 mb-1">15+</div>
                    <div className="text-sm text-slate-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-600 mb-1">4</div>
                    <div className="text-sm text-slate-600">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 mb-1">3</div>
                    <div className="text-sm text-slate-600">Awards</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Skills */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Top Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <span className="text-xs text-slate-500 mt-1">{skill.category}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon === 'award' ? Award : achievement.icon === 'trophy' ? Trophy : FileText;
                  return (
                    <div key={achievement.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Icon className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-slate-900 mb-1">{achievement.title}</h4>
                        <p className="text-xs text-slate-600 mb-1">{achievement.issuer}</p>
                        <p className="text-xs text-slate-500">
                          {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-purple-600">
              <CardContent className="p-6 text-center text-white">
                <h3 className="mb-2">Interested in working together?</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Let's connect and discuss how we can collaborate
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
