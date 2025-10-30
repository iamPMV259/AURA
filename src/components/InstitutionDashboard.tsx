import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Upload, Link as LinkIcon, Building2, CheckCircle2, XCircle } from 'lucide-react';
import { credentialStatusData } from '../data/mockData';

interface InstitutionDashboardProps {
  onUploadClick: () => void;
  onApiSetupClick: () => void;
}

export function InstitutionDashboard({ onUploadClick, onApiSetupClick }: InstitutionDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-slate-900">Institution Portal</h1>
          </div>
          <p className="text-slate-600">Manage and issue verifiable credentials</p>
        </div>
        
        <div className="space-y-6">
          {/* Issue Credentials Section */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Issue Verifiable Credentials</CardTitle>
              <CardDescription>Upload credentials or integrate via API</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group p-6 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-500 transition-all cursor-pointer bg-white">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:bg-blue-100 transition-colors">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-slate-900 mb-2">Bulk CSV Upload</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Upload multiple credentials at once using a CSV file
                    </p>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={onUploadClick}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload CSV
                    </Button>
                  </div>
                </div>
                
                <div className="group p-6 border-2 border-dashed border-slate-300 rounded-lg hover:border-purple-500 transition-all cursor-pointer bg-white">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-purple-50 rounded-full mb-4 group-hover:bg-purple-100 transition-colors">
                      <LinkIcon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-slate-900 mb-2">Connect API</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Integrate AURA directly with your student information system
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                      onClick={onApiSetupClick}
                    >
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Setup API
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Credential Status Table */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Credential Status & Audit</CardTitle>
              <CardDescription>Track all issued credentials and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead>Student Name</TableHead>
                      <TableHead>Credential Title</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {credentialStatusData.map((record) => (
                      <TableRow key={record.id} className="hover:bg-slate-50">
                        <TableCell>{record.studentName}</TableCell>
                        <TableCell className="text-slate-900">
                          {record.credentialTitle}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          {new Date(record.issueDate).toLocaleDateString('vi-VN')}
                        </TableCell>
                        <TableCell>
                          {record.status === 'Issued' ? (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Issued
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircle className="w-3 h-3 mr-1" />
                              Revoked
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
