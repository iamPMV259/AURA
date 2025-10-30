import { Wallet, Brain, ShieldCheck } from 'lucide-react';
import { Badge } from './ui/badge';

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Abstract AI mesh background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Mesh network pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-8xl tracking-wider text-white">
            AURA
          </h1>
          
          <p className="text-3xl text-blue-200">
            Skills you can prove. Guidance you can trust.
          </p>
          
          <div className="pt-12 flex flex-wrap justify-center gap-6">
            <div className="group bg-white/5 backdrop-blur-sm border border-blue-400/30 rounded-lg px-8 py-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Wallet className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-left">
                  <Badge variant="outline" className="mb-2 border-blue-400 text-blue-300">
                    Skill Wallet
                  </Badge>
                  <p className="text-sm text-blue-100/80">Your verified credentials in one place</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-8 py-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-left">
                  <Badge variant="outline" className="mb-2 border-cyan-400 text-cyan-300">
                    Personal AI
                  </Badge>
                  <p className="text-sm text-blue-100/80">AI-powered learning guidance</p>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm border border-emerald-400/30 rounded-lg px-8 py-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-left">
                  <Badge variant="outline" className="mb-2 border-emerald-400 text-emerald-300">
                    Verified Credentials
                  </Badge>
                  <p className="text-sm text-blue-100/80">Blockchain-backed proof of skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
