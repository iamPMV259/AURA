import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { LearnerDashboard } from './components/LearnerDashboard';
import { InstitutionDashboard } from './components/InstitutionDashboard';
import { SkillWallet } from './components/SkillWallet';
import { TrustTech } from './components/TrustTech';
import { Portfolio } from './components/Portfolio';
import { CourseDetail } from './components/CourseDetail';
import { CSVUpload } from './components/CSVUpload';
import { APISetup } from './components/APISetup';
import { SkillAssessment } from './components/SkillAssessment';
import { CertificatePreview } from './components/CertificatePreview';
import { LearningProgress } from './components/LearningProgress';
import { JobMatching } from './components/JobMatching';
import { JobDetail } from './components/JobDetail';
import { ProfileSettings } from './components/ProfileSettings';
import { Button } from './components/ui/button';
import { 
  Home, 
  LayoutDashboard, 
  Building2, 
  Wallet, 
  Shield,
  UserCircle,
  Menu,
  X
} from 'lucide-react';

type Page = 'home' | 'learner' | 'institution' | 'wallet' | 'trust' | 'portfolio' | 'course-detail' | 'csv-upload' | 'api-setup' | 'skill-assessment' | 'certificate-preview' | 'learning-progress' | 'job-matching' | 'job-detail' | 'profile-settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedCertificateId, setSelectedCertificateId] = useState<number | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const navigation = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'learner' as Page, label: 'Learner Dashboard', icon: LayoutDashboard },
    { id: 'institution' as Page, label: 'Institution Portal', icon: Building2 },
    { id: 'wallet' as Page, label: 'My Wallet', icon: Wallet },
    { id: 'trust' as Page, label: 'Trust & Tech', icon: Shield },
    { id: 'portfolio' as Page, label: 'Portfolio', icon: UserCircle },
  ];

  const handleCourseClick = (courseId: number) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-detail');
  };

  const handleBackToLearnerDashboard = () => {
    setCurrentPage('learner');
    setSelectedCourseId(null);
  };

  const handleUploadClick = () => {
    setCurrentPage('csv-upload');
  };

  const handleApiSetupClick = () => {
    setCurrentPage('api-setup');
  };

  const handleBackToInstitution = () => {
    setCurrentPage('institution');
  };

  const handleAssessmentClick = () => {
    setCurrentPage('skill-assessment');
  };

  const handleProgressClick = () => {
    setCurrentPage('learning-progress');
  };

  const handleJobMatchingClick = () => {
    setCurrentPage('job-matching');
  };

  const handleCertificateClick = (certificateId: number) => {
    setSelectedCertificateId(certificateId);
    setCurrentPage('certificate-preview');
  };

  const handleBackToWallet = () => {
    setCurrentPage('wallet');
    setSelectedCertificateId(null);
  };

  const handleJobClick = (jobId: number) => {
    setSelectedJobId(jobId);
    setCurrentPage('job-detail');
  };

  const handleBackToJobMatching = () => {
    setCurrentPage('job-matching');
    setSelectedJobId(null);
  };

  const handleSettingsClick = () => {
    setCurrentPage('profile-settings');
  };

  const handleBackToPortfolio = () => {
    setCurrentPage('portfolio');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroSection />;
      case 'learner':
        return (
          <LearnerDashboard 
            onCourseClick={handleCourseClick}
            onAssessmentClick={handleAssessmentClick}
            onProgressClick={handleProgressClick}
            onJobMatchingClick={handleJobMatchingClick}
          />
        );
      case 'institution':
        return <InstitutionDashboard onUploadClick={handleUploadClick} onApiSetupClick={handleApiSetupClick} />;
      case 'wallet':
        return <SkillWallet onCertificateClick={handleCertificateClick} />;
      case 'trust':
        return <TrustTech />;
      case 'portfolio':
        return <Portfolio onSettingsClick={handleSettingsClick} />;
      case 'course-detail':
        return <CourseDetail courseId={selectedCourseId || 1} onBack={handleBackToLearnerDashboard} />;
      case 'csv-upload':
        return <CSVUpload onBack={handleBackToInstitution} />;
      case 'api-setup':
        return <APISetup onBack={handleBackToInstitution} />;
      case 'skill-assessment':
        return <SkillAssessment onBack={handleBackToLearnerDashboard} />;
      case 'certificate-preview':
        return <CertificatePreview certificateId={selectedCertificateId || 1} onBack={handleBackToWallet} />;
      case 'learning-progress':
        return <LearningProgress onBack={handleBackToLearnerDashboard} />;
      case 'job-matching':
        return <JobMatching onBack={handleBackToLearnerDashboard} onJobClick={handleJobClick} />;
      case 'job-detail':
        return <JobDetail jobId={selectedJobId || 1} onBack={handleBackToJobMatching} />;
      case 'profile-settings':
        return <ProfileSettings onBack={handleBackToPortfolio} />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-white tracking-wider">AURA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? 'default' : 'ghost'}
                    onClick={() => setCurrentPage(item.id)}
                    className={
                      currentPage === item.id
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={currentPage === item.id ? 'default' : 'ghost'}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setMenuOpen(false);
                      }}
                      className={
                        currentPage === item.id
                          ? 'bg-blue-600 hover:bg-blue-700 text-white justify-start'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800 justify-start'
                      }
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-slate-400 text-sm">
                © 2025 AURA - Skills you can prove. Guidance you can trust.
              </span>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
