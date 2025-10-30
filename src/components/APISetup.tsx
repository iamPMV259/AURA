import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { 
  Key, 
  Copy, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Eye,
  EyeOff,
  Code,
  Terminal,
  FileCode
} from 'lucide-react';

interface APISetupProps {
  onBack: () => void;
}

export function APISetup({ onBack }: APISetupProps) {
  const [apiKey, setApiKey] = useState('aura_live_sk_1234567890abcdefghijklmnopqrstuvwxyz');
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSaved, setWebhookSaved] = useState(false);

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerateKey = () => {
    if (confirm('Are you sure? Your old API key will be revoked immediately.')) {
      setApiKey('aura_live_sk_' + Math.random().toString(36).substring(2, 15));
      alert('New API key generated successfully!');
    }
  };

  const handleSaveWebhook = () => {
    setWebhookSaved(true);
    setTimeout(() => setWebhookSaved(false), 3000);
  };

  const codeExamples = {
    nodejs: `// Node.js Example
const axios = require('axios');

const AURA_API_KEY = 'your_api_key_here';
const AURA_API_URL = 'https://api.aura.edu/v1';

async function issueCredential(studentData) {
  try {
    const response = await axios.post(
      \`\${AURA_API_URL}/credentials/issue\`,
      {
        student_name: studentData.name,
        student_email: studentData.email,
        credential_title: studentData.credential,
        issue_date: new Date().toISOString()
      },
      {
        headers: {
          'Authorization': \`Bearer \${AURA_API_KEY}\`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Credential issued:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}`,
    python: `# Python Example
import requests
import json
from datetime import datetime

AURA_API_KEY = 'your_api_key_here'
AURA_API_URL = 'https://api.aura.edu/v1'

def issue_credential(student_data):
    headers = {
        'Authorization': f'Bearer {AURA_API_KEY}',
        'Content-Type': 'application/json'
    }
    
    payload = {
        'student_name': student_data['name'],
        'student_email': student_data['email'],
        'credential_title': student_data['credential'],
        'issue_date': datetime.now().isoformat()
    }
    
    response = requests.post(
        f'{AURA_API_URL}/credentials/issue',
        headers=headers,
        json=payload
    )
    
    if response.status_code == 200:
        print('Credential issued:', response.json())
        return response.json()
    else:
        print('Error:', response.json())`,
    curl: `# cURL Example
curl -X POST https://api.aura.edu/v1/credentials/issue \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "student_name": "Nguyen Van A",
    "student_email": "nva@email.com",
    "credential_title": "B.Sc. Computer Science",
    "issue_date": "2024-10-30T00:00:00Z"
  }'`
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-slate-600 hover:text-slate-900"
        >
          ← Back to Institution Portal
        </Button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-slate-900 mb-2">API Integration Setup</h1>
            <p className="text-slate-600">Connect AURA directly to your student information system</p>
          </div>

          {/* API Key Management */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Key className="w-5 h-5 text-blue-600" />
                API Key Management
              </CardTitle>
              <CardDescription>Your secret key for authenticating API requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  Keep your API key secure. Never share it publicly or commit it to version control.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="apiKey"
                      type={showApiKey ? 'text' : 'password'}
                      value={apiKey}
                      readOnly
                      className="pr-10 font-mono text-sm"
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleCopyApiKey}
                    className="border-slate-300"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={handleRegenerateKey}
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Regenerate Key
              </Button>

              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-900">Active</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">Created</div>
                  <div className="text-slate-900">Oct 15, 2024</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">Last Used</div>
                  <div className="text-slate-900">2 hours ago</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Webhook Configuration */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Webhook Configuration</CardTitle>
              <CardDescription>Receive real-time notifications about credential events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="webhookUrl"
                    type="url"
                    placeholder="https://your-domain.com/webhook"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  />
                  <Button
                    onClick={handleSaveWebhook}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {webhookSaved ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Saved
                      </>
                    ) : (
                      'Save'
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Events to Subscribe</Label>
                <div className="space-y-2">
                  {[
                    'credential.issued',
                    'credential.verified',
                    'credential.revoked',
                    'credential.shared'
                  ].map((event) => (
                    <label key={event} className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <code className="text-sm text-slate-700">{event}</code>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Documentation */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <FileCode className="w-5 h-5 text-purple-600" />
                API Documentation & Examples
              </CardTitle>
              <CardDescription>Get started with these code examples</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="nodejs">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>

                {Object.entries(codeExamples).map(([key, code]) => (
                  <TabsContent key={key} value={key} className="mt-4">
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                        onClick={() => {
                          navigator.clipboard.writeText(code);
                        }}
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-blue-900 mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  API Endpoints
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      POST
                    </Badge>
                    <code className="text-slate-700">/v1/credentials/issue</code>
                    <span className="text-slate-600">- Issue a new credential</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                      GET
                    </Badge>
                    <code className="text-slate-700">/v1/credentials/{'{id}'}</code>
                    <span className="text-slate-600">- Get credential details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                      DELETE
                    </Badge>
                    <code className="text-slate-700">/v1/credentials/{'{id}'}/revoke</code>
                    <span className="text-slate-600">- Revoke a credential</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  <Terminal className="w-4 h-4 mr-2" />
                  View Full API Documentation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* API Usage Stats */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">API Usage Statistics</CardTitle>
              <CardDescription>Current billing period: Oct 1 - Oct 31, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-slate-600 mb-1">Total Requests</div>
                  <div className="text-slate-900">24,567</div>
                  <div className="text-xs text-slate-500 mt-1">of 100,000 limit</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-sm text-slate-600 mb-1">Credentials Issued</div>
                  <div className="text-slate-900">1,234</div>
                  <div className="text-xs text-green-600 mt-1">+12% from last month</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="text-sm text-slate-600 mb-1">Success Rate</div>
                  <div className="text-slate-900">99.8%</div>
                  <div className="text-xs text-slate-500 mt-1">45 failed requests</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="text-sm text-slate-600 mb-1">Avg Response Time</div>
                  <div className="text-slate-900">127ms</div>
                  <div className="text-xs text-green-600 mt-1">-15ms from last month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
