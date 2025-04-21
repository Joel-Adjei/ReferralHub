import React from 'react';
import { Formik } from 'formik';
import {
    FaUserFriends,
    FaPercentage,
    FaMoneyBillWave,
    FaClipboardList,
    FaInfoCircle,
    FaCaretUp,
    FaCaretDown,
    FaFacebook,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

const ReferralDashboard = () => {
    // Data for stats and charts
    const stats = [
        {
            title: 'Total Promoters',
            value: '1,234',
            icon: <FaUserFriends className="text-gray-600" />,
            change: '+12%',
            isPositive: true,
            bgColor: 'bg-gray-100'
        },
        {
            title: 'Conversion rate',
            value: '23.5%',
            icon: <FaPercentage className="text-gray-600" />,
            change: '-2.43%',
            isPositive: false,
            bgColor: 'bg-red-50'
        },
        {
            title: 'Revenue Generated',
            value: '$12,345',
            icon: <FaMoneyBillWave className="text-gray-600" />,
            change: '+8.7%',
            isPositive: true,
            bgColor: 'bg-pink-50'
        },
        {
            title: 'Active Campaigns',
            value: '3',
            icon: <FaClipboardList className="text-gray-600" />,
            change: '',
            isPositive: true,
            bgColor: 'bg-blue-50'
        }
    ];

    const metricsCircles = [
        { title: 'Repeat Referral Rate', value: '42%', color: 'text-green-500', bgColor: 'bg-green-100', percentage: 42 },
        { title: 'Referral Engagement Rate', value: '67%', color: 'text-red-400', bgColor: 'bg-red-100', percentage: 67 },
        { title: 'Churn Rate of Leads', value: '28%', color: 'text-blue-400', bgColor: 'bg-blue-100', percentage: 28 },
        { title: 'Upsell Rate of Leads', value: '19%', color: 'text-purple-500', bgColor: 'bg-purple-100', percentage: 19 }
    ];

    const recentActivities = [
        { activity: 'Julian earned $10', date: '28-4-2024', time: '10:30 AM' },
        { activity: 'John Doe signed up from your referral link', date: '29-4-2024', time: '9:45 AM' },
        { activity: 'You reached 50 referrals milestone!', date: '30-4-2024', time: '8:20 AM' },
        { activity: 'You updated your referral campaign', date: '31-4-2024', time: '7:00 AM' }
    ];

    const leaderboardData = [
        { rank: 1, name: 'Emery Dokidis', rate: 150, sent: 80, successRate: '60%', revenue: '$1,200' },
        { rank: 2, name: 'Kadin Lipshutz', rate: 132, sent: 90, successRate: '65%', revenue: '$980' },
        { rank: 3, name: 'Randy Culhane', rate: 110, sent: 60, successRate: '60%', revenue: '$880' },
        { rank: 4, name: 'Jaxson Vaccaro', rate: 100, sent: 85, successRate: '75%', revenue: '$500' },
        { rank: 5, name: 'Jocelyn Levin', rate: 50, sent: 30, successRate: '63%', revenue: '$600' },
        { rank: 6, name: 'Maren Septimus', rate: 80, sent: 35, successRate: '25%', revenue: '$200' },
        { rank: 7, name: 'Haylie Saris', rate: 120, sent: 55, successRate: '45%', revenue: '$150' },
        { rank: 8, name: 'Randy Herwitz', rate: 110, sent: 90, successRate: '65%', revenue: '$880' }
    ];

    const channelPerformance = [
        { name: 'Facebook', percentage: 78, color: 'bg-orange-100' },
        { name: 'Twitter', percentage: 45, color: 'bg-pink-100' },
        { name: 'LinkedIn', percentage: 23, color: 'bg-blue-100' }
    ];

    // Circle progress component
    const CircleProgress = ({ percentage, color, bgColor, title, value }) => {
        const radius = 40;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-sm text-gray-600 font-medium">{title}</span>
                    <FaInfoCircle className="text-gray-400 text-sm" />
                </div>
                <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke={bgColor}
                            strokeWidth="8"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className={color}
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-xl font-bold ${color}`}>{value}</span>
                    </div>
                </div>
            </div>
        );
    };

    // Line chart component (simplified version)
    const LineChart = () => {
        // This is a simplified version - in a real app, you'd use a charting library
        return (
            <div className="w-full h-64 relative">
                <div className="absolute left-0 bottom-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>50%</span>
                    <span>40%</span>
                    <span>30%</span>
                    <span>20%</span>
                    <span>10%</span>
                    <span>0%</span>
                </div>
                <div className="absolute bottom-0 left-6 right-0 h-full">
                    {/* Path would be generated from data points in a real implementation */}
                    <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                        <path
                            d="M0,140 C20,130 40,150 60,120 C80,90 100,100 120,110 C140,120 160,100 180,90 C200,80 220,90 240,70 C260,50 280,60 300,50 C320,40 340,60 360,50 C380,40 400,50 420,45 C440,40 460,50 480,60 L500,60"
                            fill="none"
                            stroke="#4F86F7"
                            strokeWidth="3"
                        />
                    </svg>

                    {/* Tooltip example */}
                    <div className="absolute left-[120px] top-[80px] bg-gray-700 text-white px-2 py-1 rounded text-xs">
                        30%
                    </div>
                    <div className="absolute left-[120px] bottom-0 top-0 border-l border-blue-300" />

                    {/* X-axis labels */}
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                    </div>
                </div>
            </div>
        );
    };

    // Donut chart component
    const DonutChart = () => {
        return (
            <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#EFEFFF" />
                    <circle cx="50" cy="50" r="18" fill="white" />

                    {/* This would be generated from actual data in a real implementation */}
                    <path
                        d="M50,10 A40,40 0 1,1 20,80 L50,50 Z"
                        fill="#619BF7"
                    />
                </svg>
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                    <div className="flex items-center mb-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-xs">Referrals sent 57%</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-200 mr-2"></div>
                        <span className="text-xs">Converted 42%</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto p-4 bg-gray-50">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <div key={index} className={`p-4 rounded-lg shadow-sm ${stat.bgColor}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-500">{stat.title}</span>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                {stat.icon}
                            </div>
                        </div>
                        <div className="flex items-end">
                            <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                            {stat.change && (
                                <div className="flex items-center ml-2 mb-1">
                                    {stat.isPositive ? (
                                        <FaCaretUp className="text-green-500" />
                                    ) : (
                                        <FaCaretDown className="text-red-500" />
                                    )}
                                    <span className={`text-xs ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                                </div>
                            )}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">vs last month</div>
                    </div>
                ))}
            </div>

            {/* Circle Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {metricsCircles.map((metric, index) => (
                    <CircleProgress
                        key={index}
                        title={metric.title}
                        value={metric.value}
                        percentage={metric.percentage}
                        color={metric.color}
                        bgColor={metric.bgColor}
                    />
                ))}
            </div>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Line Chart */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium text-gray-800">Promoter Performance Over Time</h2>
                        <div className="relative">
                            <select className="pl-4 pr-8 py-2 border rounded-md text-sm appearance-none">
                                <option>Last 6 months</option>
                                <option>Last 3 months</option>
                                <option>Last month</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <LineChart />
                </div>

                {/* Conversion Success & Channel Performance */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h2 className="text-lg font-medium text-gray-800 mb-4">Conversion Success Rate</h2>
                        <div className="flex items-center justify-center">
                            <DonutChart />
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h2 className="text-lg font-medium text-gray-800 mb-4">Top Performing Channel</h2>
                        <div className="flex justify-between space-x-4">
                            {channelPerformance.map((channel, index) => (
                                <div key={index} className={`flex-1 p-3 ${channel.color} rounded-md text-center`}>
                                    <div className="text-sm mb-1">{channel.name}</div>
                                    <div className="text-xl font-bold">{channel.percentage}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Recent Activities</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="text-left text-gray-500">
                            <th className="py-3 px-4">Activities</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recentActivities.map((activity, index) => (
                            <tr key={index} className="border-t border-gray-100">
                                <td className="py-3 px-4">{activity.activity}</td>
                                <td className="py-3 px-4 text-gray-500">{activity.date}</td>
                                <td className="py-3 px-4 text-gray-500">{activity.time}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Leaderboard Table View</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="text-left text-gray-500 text-sm">
                            <th className="py-3 px-4">Rank</th>
                            <th className="py-3 px-4">Promoter Name</th>
                            <th className="py-3 px-4">Conversion Rate</th>
                            <th className="py-3 px-4">Referrals Sent</th>
                            <th className="py-3 px-4">Successful Conversions</th>
                            <th className="py-3 px-4">Revenue Generated</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaderboardData.map((row) => (
                            <tr key={row.rank} className="border-t border-gray-100">
                                <td className="py-3 px-4">{row.rank}</td>
                                <td className="py-3 px-4">{row.name}</td>
                                <td className="py-3 px-4">{row.rate}</td>
                                <td className="py-3 px-4">{row.sent}</td>
                                <td className="py-3 px-4">{row.successRate}</td>
                                <td className="py-3 px-4">{row.revenue}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReferralDashboard;