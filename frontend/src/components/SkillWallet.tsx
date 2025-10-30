import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ShieldCheck, Download, Share2, GraduationCap, Award } from 'lucide-react';
import { Button } from './ui/button';
import { credentials } from '../data/mockData';

interface SkillWalletProps {
  onCertificateClick?: (credentialId: number) => void;
}

export function SkillWallet({ onCertificateClick }: SkillWalletProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-slate-900 mb-2">My Skill Wallet</h1>
          <p className="text-slate-600">Your verified credentials and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {credentials.map((credential) => (
            <Card
              key={credential.id}
              className="group relative overflow-hidden border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
              
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-md">
                    <ShieldCheck className="w-5 h-5 text-white" />
                    <span className="text-sm text-white">Verified</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h2 className="text-slate-900 mb-2">
                      {credential.name}
                    </h2>
                    <p className="text-slate-600">
                      {credential.issuer}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Award className="w-4 h-4" />
                    <span>Issued: {new Date(credential.issueDate).toLocaleDateString('vi-VN')}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50"
                      onClick={() => onCertificateClick?.(credential.id)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Info Section */}
        <Card className="mt-8 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-1">Blockchain-Verified Credentials</h3>
                <p className="text-sm text-slate-600">
                  All credentials in your wallet are cryptographically signed and verifiable on-chain. 
                  You have full control over who can view and verify your achievements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
