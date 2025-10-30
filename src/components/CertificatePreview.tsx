import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  CheckCircle2,
  Calendar,
  Building2,
  User,
  Shield,
  QrCode,
  ExternalLink
} from 'lucide-react';

interface CertificatePreviewProps {
  certificateId: number;
  onBack: () => void;
}

const certificateDetails: Record<number, any> = {
  1: {
    name: 'B.Sc. Computer Science',
    issuer: 'Stanford University',
    issuerLogo: 'S',
    recipient: 'Nguyen Minh Khoa',
    issueDate: '2024-06-15',
    credentialId: 'STAN-CS-2024-001234',
    skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Computer Architecture'],
    description: 'Bachelor of Science degree in Computer Science with focus on artificial intelligence and machine learning.',
    blockchainHash: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb8',
    verified: true,
  },
  2: {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    issuerLogo: 'AWS',
    recipient: 'Nguyen Minh Khoa',
    issueDate: '2024-09-20',
    credentialId: 'AWS-SA-2024-987654',
    skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    blockchainHash: '0x8f3cf7ad23Cd3CaDbD9735ACf3eEe5931E001Ca4',
    verified: true,
  },
  3: {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    issuerLogo: 'DL',
    recipient: 'Nguyen Minh Khoa',
    issueDate: '2024-08-10',
    credentialId: 'DLAI-ML-2024-456789',
    skills: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'Model Optimization'],
    description: 'Comprehensive machine learning specialization covering supervised, unsupervised learning and neural networks.',
    blockchainHash: '0x5E4efb364071c552a9C8DB3f8B0F98f8c8e52D4e',
    verified: true,
  },
  4: {
    name: 'Full Stack Web Development',
    issuer: 'Meta',
    issuerLogo: 'M',
    recipient: 'Nguyen Minh Khoa',
    issueDate: '2024-07-05',
    credentialId: 'META-FS-2024-112233',
    skills: ['React', 'Node.js', 'Database Design', 'API Development'],
    description: 'Professional certificate in full-stack web development using modern frameworks and best practices.',
    blockchainHash: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    verified: true,
  },
};

export function CertificatePreview({ certificateId, onBack }: CertificatePreviewProps) {
  const cert = certificateDetails[certificateId] || certificateDetails[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Wallet
        </Button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Certificate Preview */}
          <div className="lg:col-span-2">
            <Card className="border-4 border-slate-300 shadow-2xl">
              <CardContent className="p-12">
                {/* Certificate Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">{cert.issuerLogo}</span>
                  </div>
                  <h2 className="text-slate-600 mb-2">{cert.issuer}</h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>

                {/* Certificate Body */}
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-slate-600 mb-2">This is to certify that</p>
                    <h1 className="text-blue-900 mb-6">{cert.recipient}</h1>
                  </div>

                  <div>
                    <p className="text-slate-600 mb-2">has successfully completed</p>
                    <h2 className="text-slate-900 mb-6">{cert.name}</h2>
                  </div>

                  <p className="text-slate-600 max-w-2xl mx-auto">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-center gap-8 pt-6">
                    <div className="text-center">
                      <p className="text-sm text-slate-500 mb-1">Issue Date</p>
                      <p className="text-slate-700">
                        {new Date(cert.issueDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="h-12 w-px bg-slate-300"></div>
                    <div className="text-center">
                      <p className="text-sm text-slate-500 mb-1">Credential ID</p>
                      <p className="text-slate-700">{cert.credentialId}</p>
                    </div>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-green-600">Blockchain Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share Certificate
              </Button>
              <Button variant="outline">
                <QrCode className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Certificate Details Sidebar */}
          <div className="space-y-4">
            {/* Verification Status */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-green-900 mb-1">Verified Credential</h3>
                    <p className="text-sm text-green-700">
                      This credential has been verified on the blockchain
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full border-green-300 text-green-700 hover:bg-green-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Blockchain
                </Button>
              </CardContent>
            </Card>

            {/* Details */}
            <Card className="border-slate-200">
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <User className="w-4 h-4" />
                    <span>Recipient</span>
                  </div>
                  <p className="text-slate-900">{cert.recipient}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>Issuing Organization</span>
                  </div>
                  <p className="text-slate-900">{cert.issuer}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Issue Date</span>
                  </div>
                  <p className="text-slate-900">
                    {new Date(cert.issueDate).toLocaleDateString('vi-VN')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Shield className="w-4 h-4" />
                    <span>Blockchain Hash</span>
                  </div>
                  <p className="text-xs text-slate-600 break-all font-mono">
                    {cert.blockchainHash}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-slate-900 mb-3">Skills Demonstrated</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
