'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Key, 
  Trash2, 
  Save,
  ArrowLeft,
  Settings,
  Moon,
  Sun,
  Monitor,
  Check
} from 'lucide-react'

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [theme, setTheme] = useState('dark')
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false
  })
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer passionate about creating amazing user experiences.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev'
  })

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'account', name: 'Account', icon: Settings },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'danger', name: 'Danger Zone', icon: Trash2 }
  ]

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const handleSave = () => {
    // Handle save logic here
    console.log('Settings saved:', { profile, notifications, theme })
    alert('Settings saved successfully!')
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-slate-600"></div>
              <h1 className="text-xl font-semibold text-white">Settings</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="mt-8 lg:mt-0 lg:col-span-9">
            <div className="bg-slate-800 rounded-lg border border-slate-700">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Profile Information</h2>
                    <button
                      onClick={handleSave}
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="h-20 w-20 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">JD</span>
                      </div>
                      <div>
                        <button className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-colors">
                          Change Avatar
                        </button>
                        <p className="text-sm text-slate-400 mt-1">JPG, GIF or PNG. 1MB max.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => handleProfileChange('name', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => handleProfileChange('email', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={profile.location}
                          onChange={(e) => handleProfileChange('location', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          value={profile.website}
                          onChange={(e) => handleProfileChange('website', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        value={profile.bio}
                        onChange={(e) => handleProfileChange('bio', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === 'account' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white">Account Status</h3>
                          <p className="text-slate-400">Your account is active and verified</p>
                        </div>
                        <div className="flex items-center text-emerald-400">
                          <Check className="h-5 w-5 mr-2" />
                          <span>Verified</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Connected Accounts</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">G</span>
                            </div>
                            <div>
                              <p className="text-white font-medium">Google</p>
                              <p className="text-slate-400 text-sm">Connected</p>
                            </div>
                          </div>
                          <button className="text-red-400 hover:text-red-300">Disconnect</button>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-gray-800 rounded flex items-center justify-center mr-3">
                              <span className="text-white text-sm font-bold">GH</span>
                            </div>
                            <div>
                              <p className="text-white font-medium">GitHub</p>
                              <p className="text-slate-400 text-sm">Not connected</p>
                            </div>
                          </div>
                          <button className="text-indigo-400 hover:text-indigo-300">Connect</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium capitalize">
                            {key === 'email' ? 'Email Notifications' : 
                             key === 'push' ? 'Push Notifications' : 
                             'Marketing Communications'}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            {key === 'email' ? 'Receive notifications via email' : 
                             key === 'push' ? 'Receive push notifications in browser' : 
                             'Receive updates about new features and offers'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange(key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            value ? 'bg-indigo-600' : 'bg-slate-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === 'appearance' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Appearance</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Theme</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'light', name: 'Light', icon: Sun },
                          { id: 'dark', name: 'Dark', icon: Moon },
                          { id: 'system', name: 'System', icon: Monitor }
                        ].map((themeOption) => (
                          <button
                            key={themeOption.id}
                            onClick={() => setTheme(themeOption.id)}
                            className={`p-4 rounded-lg border-2 transition-colors ${
                              theme === themeOption.id
                                ? 'border-indigo-500 bg-indigo-600/20'
                                : 'border-slate-600 bg-slate-700 hover:border-slate-500'
                            }`}
                          >
                            <themeOption.icon className="h-6 w-6 text-white mx-auto mb-2" />
                            <p className="text-white text-sm">{themeOption.name}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Security</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white">Change Password</h3>
                          <p className="text-slate-400">Update your password to keep your account secure</p>
                        </div>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                          Change Password
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
                          <p className="text-slate-400">Add an extra layer of security to your account</p>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                          Enable 2FA
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white">API Keys</h3>
                          <p className="text-slate-400">Manage your API keys for integrations</p>
                        </div>
                        <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-500 transition-colors">
                          Manage Keys
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Danger Zone Tab */}
              {activeTab === 'danger' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Danger Zone</h2>
                  <div className="space-y-6">
                    <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-red-400">Delete Account</h3>
                          <p className="text-slate-400">Permanently delete your account and all associated data</p>
                        </div>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                          Delete Account
                        </button>
                      </div>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-yellow-400">Export Data</h3>
                          <p className="text-slate-400">Download a copy of all your data</p>
                        </div>
                        <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
                          Export Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}