import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Award, Settings, BarChart2, User, LogOut } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('statistics');
  const navigate = useNavigate();

  // 模拟学习统计数据
  const learningStats = {
    totalCourses: 10,
    completedCourses: 3,
    totalExercises: 15,
    completedExercises: 8,
    totalTimeSpent: 24,
    averageScore: 85
  };

  // 饼图数据
  const pieData = {
    labels: ['已完成', '未完成'],
    datasets: [
      {
        data: [learningStats.completedCourses, learningStats.totalCourses - learningStats.completedCourses],
        backgroundColor: ['#4299e1', '#e2e8f0'],
        borderWidth: 1
      }
    ]
  };

  // 柱状图数据
  const barData = {
    labels: ['数据基础与SQL', '统计分析基础', '数据可视化', 'Python数据分析', '机器学习基础'],
    datasets: [
      {
        label: '练习得分',
        data: [90, 85, 80, 75, 70],
        backgroundColor: '#4299e1',
        borderRadius: 4
      }
    ]
  };

  // 模拟证书数据
  const certificates = [
    {
      id: 1,
      title: '数据基础与SQL',
      issueDate: '2026-04-15',
      score: 90
    },
    {
      id: 2,
      title: '统计分析基础',
      issueDate: '2026-04-10',
      score: 85
    }
  ];

  const handleLogout = () => {
    // 模拟登出
    alert('已登出');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">个人中心</h1>
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          返回首页
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 侧边导航 */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <User size={32} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">张三</h2>
              <p className="text-gray-600">普通用户</p>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('statistics')}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${activeTab === 'statistics' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
              >
                <BarChart2 size={18} className="mr-3" />
                学习统计
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${activeTab === 'certificates' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
              >
                <Award size={18} className="mr-3" />
                证书管理
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors ${activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
              >
                <Settings size={18} className="mr-3" />
                个人设置
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 rounded-md flex items-center text-red-600 hover:bg-red-50 transition-colors mt-8"
              >
                <LogOut size={18} className="mr-3" />
                登出
              </button>
            </nav>
          </div>
        </div>

        {/* 主内容 */}
        <div className="lg:col-span-9">
          {/* 学习统计 */}
          {activeTab === 'statistics' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">学习统计</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-600 mb-1">总课程数</p>
                  <p className="text-2xl font-bold text-blue-600">{learningStats.totalCourses}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-600 mb-1">已完成课程</p>
                  <p className="text-2xl font-bold text-green-600">{learningStats.completedCourses}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-gray-600 mb-1">学习时长 (小时)</p>
                  <p className="text-2xl font-bold text-purple-600">{learningStats.totalTimeSpent}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">课程完成情况</h3>
                  <div className="h-64">
                    <Pie data={pieData} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">练习得分</h3>
                  <div className="h-64">
                    <Bar data={barData} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">最近学习</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">课程名称</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">进度</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最后学习</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">数据基础与SQL</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">100%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2026-04-15
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">统计分析基础</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">100%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2026-04-10
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">数据可视化</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">50%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2026-04-05
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 证书管理 */}
          {activeTab === 'certificates' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">证书管理</h2>
              
              {certificates.length > 0 ? (
                <div className="space-y-6">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800">{cert.title}</h3>
                          <p className="text-gray-600 mt-1">颁发日期: {cert.issueDate}</p>
                          <p className="text-gray-600 mt-1">得分: {cert.score}</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                          下载证书
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Award size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">你还没有获得任何证书</p>
                  <Link to="/courses" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    开始学习
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* 个人设置 */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">个人设置</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">基本信息</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                      <input
                        type="text"
                        defaultValue="张三"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                      <input
                        type="email"
                        defaultValue="zhangsan@example.com"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">密码设置</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">当前密码</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">新密码</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">确认新密码</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">通知设置</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">学习进度通知</span>
                      <input type="checkbox" checked className="h-4 w-4 text-blue-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">练习结果通知</span>
                      <input type="checkbox" checked className="h-4 w-4 text-blue-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">课程更新通知</span>
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    保存设置
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;