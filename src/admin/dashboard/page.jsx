"use client";

import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import {
  Users,
  Activity,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    {
      title: "Total Patients",
      value: "1,234",
      change: "12%",
      changeType: "increase",
      icon: Users,
      color: "blue",
    },
    {
      title: "Active RPM",
      value: "856",
      change: "8%",
      changeType: "increase",
      icon: Activity,
      color: "green",
    },
    {
      title: "Monthly Revenue",
      value: "$245,890",
      change: "15%",
      changeType: "increase",
      icon: DollarSign,
      color: "purple",
    },
    {
      title: "Pending Alerts",
      value: "23",
      change: "5%",
      changeType: "decrease",
      icon: AlertCircle,
      color: "orange",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      patient: "John Smith",
      action: "New RPM enrollment",
      time: "2 hours ago",
      type: "enrollment",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      action: "Blood pressure alert triggered",
      time: "3 hours ago",
      type: "alert",
    },
    {
      id: 3,
      patient: "Michael Brown",
      action: "CCM time logged",
      time: "5 hours ago",
      type: "logging",
    },
    {
      id: 4,
      patient: "Emily Davis",
      action: "Device reading received",
      time: "6 hours ago",
      type: "reading",
    },
    {
      id: 5,
      patient: "Robert Wilson",
      action: "Care plan updated",
      time: "8 hours ago",
      type: "update",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: "John Smith",
      date: "May 15, 2026",
      time: "10:00 AM",
      type: "RPM Review",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      date: "May 15, 2026",
      time: "11:30 AM",
      type: "CCM Check-in",
    },
    {
      id: 3,
      patient: "Michael Brown",
      date: "May 16, 2026",
      time: "9:00 AM",
      type: "Device Setup",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.patient}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">
                        {appointment.date}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900 mb-1">{appointment.patient}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                      <span>•</span>
                      {appointment.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-900">Add Patient</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Activity className="h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-900">View Alerts</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span className="font-medium text-gray-900">Generate Report</span>
              </button>
              <button className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-medium text-gray-900">Schedule Review</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
