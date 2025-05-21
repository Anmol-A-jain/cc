import { useState } from 'react';
import { BarChart, LineChart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FileText, DollarSign, Users, TrendingUp } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function PartnerDashboard() {
  const [timeframe, setTimeframe] = useState('week');

  const stats = [
    {
      title: 'Active Leads',
      value: '23',
      change: '+15%',
      icon: FileText,
    },
    {
      title: 'Total Earnings',
      value: '₹45,600',
      change: '+8%',
      icon: DollarSign,
    },
    {
      title: 'Sub-Partners',
      value: '12',
      change: '+2',
      icon: Users,
    },
    {
      title: 'Conversion Rate',
      value: '18%',
      change: '+3%',
      icon: TrendingUp,
    },
  ];

  const earningsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Earnings',
        data: [2500, 3200, 2800, 4500, 3800, 5000, 4200],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const leadsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'New Leads',
        data: [5, 8, 6, 10, 7, 12, 9],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Partner Dashboard</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Welcome back, Partner</p>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="year">Last 12 months</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-blue-600" />
              <span className={`text-sm font-semibold ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Earnings Overview</h2>
          <BarChart data={earningsData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lead Generation</h2>
          <LineChart data={leadsData} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Leads</h2>
          <div className="space-y-4">
            {[
              {
                name: 'John Smith',
                type: 'Home Loan',
                amount: '₹45L',
                status: 'Processing',
              },
              {
                name: 'Sarah Johnson',
                type: 'Business Loan',
                amount: '₹25L',
                status: 'Approved',
              },
              {
                name: 'Michael Chen',
                type: 'Personal Loan',
                amount: '₹5L',
                status: 'Pending',
              },
            ].map((lead, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{lead.name}</p>
                  <p className="text-sm text-gray-600">{lead.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{lead.amount}</p>
                  <p className={`text-sm ${
                    lead.status === 'Approved'
                      ? 'text-green-600'
                      : lead.status === 'Processing'
                      ? 'text-blue-600'
                      : 'text-yellow-600'
                  }`}>
                    {lead.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Sub-Partners</h2>
          <div className="space-y-4">
            {[
              {
                name: 'David Kumar',
                leads: 15,
                earnings: '₹12,500',
              },
              {
                name: 'Priya Shah',
                leads: 12,
                earnings: '₹10,800',
              },
              {
                name: 'Alex Wong',
                leads: 10,
                earnings: '₹9,200',
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{partner.name}</p>
                  <p className="text-sm text-gray-600">{partner.leads} leads</p>
                </div>
                <p className="font-medium">{partner.earnings}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}