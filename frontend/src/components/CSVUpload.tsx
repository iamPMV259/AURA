import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  X, 
  Download,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';

interface CSVUploadProps {
  onBack: () => void;
}

export function CSVUpload({ onBack }: CSVUploadProps) {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [uploadedData, setUploadedData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploadStatus('uploading');
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setUploadStatus('success');
              // Mock data after successful upload
              setUploadedData([
                { studentName: 'Nguyen Van A', email: 'nva@email.com', credential: 'B.Sc. Computer Science', status: 'Ready' },
                { studentName: 'Tran Thi B', email: 'ttb@email.com', credential: 'Data Science Certificate', status: 'Ready' },
                { studentName: 'Le Van C', email: 'lvc@email.com', credential: 'AI Engineering Diploma', status: 'Ready' },
                { studentName: 'Pham Thi D', email: 'ptd@email.com', credential: 'Web Development Certificate', status: 'Ready' },
              ]);
            }, 500);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleIssueCredentials = () => {
    // Simulate credential issuance
    setUploadStatus('idle');
    setUploadProgress(0);
    setFileName('');
    setUploadedData([]);
    alert('Credentials issued successfully! Students will receive their verifiable credentials via email.');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
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
            <h1 className="text-slate-900 mb-2">Bulk CSV Upload</h1>
            <p className="text-slate-600">Upload multiple credentials at once using a CSV file</p>
          </div>

          {/* Instructions */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-blue-900 mb-2">CSV File Requirements</h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Required columns: student_name, student_email, credential_title, issue_date</li>
                    <li>• Optional columns: credential_id, description, expiry_date</li>
                    <li>• Maximum file size: 10MB</li>
                    <li>• Supported format: .csv only</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Template */}
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FileSpreadsheet className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">CSV Template</h3>
                    <p className="text-sm text-slate-600">Download our template to get started</p>
                  </div>
                </div>
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  <Download className="w-4 h-4 mr-2" />
                  Download Template
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upload Area */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Upload Your CSV File</CardTitle>
              <CardDescription>Drag and drop or click to browse</CardDescription>
            </CardHeader>
            <CardContent>
              {uploadStatus === 'idle' && (
                <label className="block">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer text-center">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-700 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-slate-500">CSV files only (Max 10MB)</p>
                  </div>
                </label>
              )}

              {uploadStatus === 'uploading' && (
                <div className="p-8 text-center">
                  <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-pulse" />
                  <p className="text-slate-900 mb-2">Uploading {fileName}...</p>
                  <Progress value={uploadProgress} className="h-2 mb-2" />
                  <p className="text-sm text-slate-600">{uploadProgress}% complete</p>
                </div>
              )}

              {uploadStatus === 'success' && (
                <div className="space-y-4">
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      File uploaded successfully! {uploadedData.length} credentials ready to issue.
                    </AlertDescription>
                  </Alert>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm text-slate-700">Student Name</th>
                          <th className="px-4 py-3 text-left text-sm text-slate-700">Email</th>
                          <th className="px-4 py-3 text-left text-sm text-slate-700">Credential</th>
                          <th className="px-4 py-3 text-left text-sm text-slate-700">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {uploadedData.map((row, index) => (
                          <tr key={index} className="border-t border-slate-200">
                            <td className="px-4 py-3 text-sm text-slate-900">{row.studentName}</td>
                            <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                            <td className="px-4 py-3 text-sm text-slate-900">{row.credential}</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={handleIssueCredentials}
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Issue All Credentials
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setUploadStatus('idle');
                        setFileName('');
                        setUploadedData([]);
                      }}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Recent Uploads</CardTitle>
              <CardDescription>View your upload history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { file: 'graduates_2024_spring.csv', date: '2024-10-15', credentials: 156, status: 'Completed' },
                  { file: 'certificates_october.csv', date: '2024-10-10', credentials: 89, status: 'Completed' },
                  { file: 'diplomas_batch_3.csv', date: '2024-10-05', credentials: 234, status: 'Completed' },
                ].map((upload, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="text-sm text-slate-900">{upload.file}</p>
                        <p className="text-xs text-slate-500">
                          {upload.credentials} credentials • {upload.date}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {upload.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
