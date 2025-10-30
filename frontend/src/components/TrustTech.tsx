import { Card, CardContent } from './ui/card';
import { Key, Shield, Eye } from 'lucide-react';

export function TrustTech() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-slate-900 mb-4">Trust, Verified.</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Built on cutting-edge technology to ensure your credentials are secure, 
            private, and fully under your control
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* W3C DID/VC */}
          <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Key className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-slate-900 mb-4">W3C DID/VC</h2>
              
              <p className="text-slate-600">
                Built on open standards for decentralized identity and verifiable credentials.
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-700">W3C Compliant</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* On-Chain Proof */}
          <Card className="border-2 border-slate-200 hover:border-purple-400 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <Shield className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-slate-900 mb-4">On-Chain Proof (No PII)</h2>
              
              <p className="text-slate-600">
                We anchor cryptographic proofs on-chain, ensuring your personal data stays private.
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-purple-700">Privacy First</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Selective Disclosure */}
          <Card className="border-2 border-slate-200 hover:border-cyan-400 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mb-6 shadow-lg">
                <Eye className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-slate-900 mb-4">Selective Disclosure</h2>
              
              <p className="text-slate-600">
                You have full control. Share only what you want, when you want.
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-cyan-700">You're in Control</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Technical Details Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
          <h3 className="text-slate-900 mb-6 text-center">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-blue-600 mb-2">Step 1</div>
              <p className="text-sm text-slate-600">
                Institution issues a verifiable credential using W3C standards
              </p>
            </div>
            
            <div>
              <div className="text-purple-600 mb-2">Step 2</div>
              <p className="text-sm text-slate-600">
                Cryptographic proof is anchored on blockchain without exposing personal data
              </p>
            </div>
            
            <div>
              <div className="text-cyan-600 mb-2">Step 3</div>
              <p className="text-sm text-slate-600">
                You selectively share credentials with employers while maintaining privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
