import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Save,
  Camera,
  Bell,
  Shield,
  Eye,
  Lock,
  Trash2
} from 'lucide-react';
import { portfolioData } from '../data/mockData';

interface ProfileSettingsProps {
  onBack: () => void;
}

export function ProfileSettings({ onBack }: ProfileSettingsProps) {
  const [formData, setFormData] = useState(portfolioData.personalInfo);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    courseUpdates: true,
    jobMatches: true,
    achievements: true,
  });
  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    showPhone: false,
    allowSearchEngines: true,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handlePrivacyToggle = (key: string) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Profile Settings</h1>
          <p className="text-slate-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Card className="lg:col-span-1 border-slate-200 h-fit">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4 relative">
                  <User className="w-12 h-12 text-white" />
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                    <Camera className="w-4 h-4 text-white" />
                  </button>
                </div>
                <h3 className="text-slate-900 mb-1">{formData.name}</h3>
                <p className="text-sm text-slate-600">{formData.email}</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Badge className="w-full bg-blue-600 justify-center">Premium Member</Badge>
                <Badge className="w-full bg-green-600 justify-center">Verified Profile</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <Tabs defaultValue="profile">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="profile">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="notifications">
                      <Bell className="w-4 h-4 mr-2" />
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger value="privacy">
                      <Eye className="w-4 h-4 mr-2" />
                      Privacy
                    </TabsTrigger>
                    <TabsTrigger value="security">
                      <Lock className="w-4 h-4 mr-2" />
                      Security
                    </TabsTrigger>
                  </TabsList>

                  {/* Profile Tab */}
                  <TabsContent value="profile" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-slate-900 mb-4">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="age">Age</Label>
                            <Input
                              id="age"
                              type="number"
                              value={formData.age}
                              onChange={(e) => handleInputChange('age', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-slate-900 mb-4">Bio</h3>
                        <Textarea
                          value={formData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          rows={4}
                          placeholder="Tell us about yourself..."
                        />
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-slate-900 mb-4">Social Links</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="linkedin">LinkedIn</Label>
                            <div className="relative">
                              <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="linkedin"
                                value={formData.linkedin}
                                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="github">GitHub</Label>
                            <div className="relative">
                              <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="github"
                                value={formData.github}
                                onChange={(e) => handleInputChange('github', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="website">Personal Website</Label>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <Input
                                id="website"
                                value={formData.website}
                                onChange={(e) => handleInputChange('website', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3">
                        <Button variant="outline" onClick={onBack}>
                          Cancel
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Notifications Tab */}
                  <TabsContent value="notifications" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-slate-900 mb-4">Notification Preferences</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Email Notifications</p>
                              <p className="text-sm text-slate-600">Receive updates via email</p>
                            </div>
                            <Switch
                              checked={notifications.email}
                              onCheckedChange={() => handleNotificationToggle('email')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Push Notifications</p>
                              <p className="text-sm text-slate-600">Get push notifications on your device</p>
                            </div>
                            <Switch
                              checked={notifications.push}
                              onCheckedChange={() => handleNotificationToggle('push')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Course Updates</p>
                              <p className="text-sm text-slate-600">New lessons and course materials</p>
                            </div>
                            <Switch
                              checked={notifications.courseUpdates}
                              onCheckedChange={() => handleNotificationToggle('courseUpdates')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Job Matches</p>
                              <p className="text-sm text-slate-600">New job opportunities matching your skills</p>
                            </div>
                            <Switch
                              checked={notifications.jobMatches}
                              onCheckedChange={() => handleNotificationToggle('jobMatches')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Achievements</p>
                              <p className="text-sm text-slate-600">Badges and milestone notifications</p>
                            </div>
                            <Switch
                              checked={notifications.achievements}
                              onCheckedChange={() => handleNotificationToggle('achievements')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Privacy Tab */}
                  <TabsContent value="privacy" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-slate-900 mb-4">Privacy Settings</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Public Profile</p>
                              <p className="text-sm text-slate-600">Make your profile visible to everyone</p>
                            </div>
                            <Switch
                              checked={privacy.profilePublic}
                              onCheckedChange={() => handlePrivacyToggle('profilePublic')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Show Email Address</p>
                              <p className="text-sm text-slate-600">Display email on public profile</p>
                            </div>
                            <Switch
                              checked={privacy.showEmail}
                              onCheckedChange={() => handlePrivacyToggle('showEmail')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Show Phone Number</p>
                              <p className="text-sm text-slate-600">Display phone on public profile</p>
                            </div>
                            <Switch
                              checked={privacy.showPhone}
                              onCheckedChange={() => handlePrivacyToggle('showPhone')}
                            />
                          </div>
                          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                              <p className="text-slate-900">Allow Search Engines</p>
                              <p className="text-sm text-slate-600">Let search engines index your profile</p>
                            </div>
                            <Switch
                              checked={privacy.allowSearchEngines}
                              onCheckedChange={() => handlePrivacyToggle('allowSearchEngines')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Security Tab */}
                  <TabsContent value="security" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-slate-900 mb-4">Change Password</h3>
                        <div className="space-y-4 max-w-md">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Update Password
                          </Button>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-slate-900 mb-4">Two-Factor Authentication</h3>
                        <div className="p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Shield className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="text-slate-900">2FA Enabled</p>
                                <p className="text-sm text-slate-600">Extra security for your account</p>
                              </div>
                            </div>
                            <Badge className="bg-green-600">Active</Badge>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            Manage 2FA
                          </Button>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-slate-900 mb-2 text-red-600">Danger Zone</h3>
                        <p className="text-sm text-slate-600 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
