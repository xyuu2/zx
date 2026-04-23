import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Exercises from './pages/Exercises';
import ExerciseDetail from './pages/ExerciseDetail';
import Profile from './pages/Profile';
import { BookOpen, BarChart2, User, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <Router>
      {/* 导航栏 */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen size={24} className="text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-800">数据分析学习平台</span>
              </Link>
            </div>
            
            {/* 桌面导航 */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                首页
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                课程
              </Link>
              <Link to="/exercises" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                练习
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                个人中心
              </Link>
            </nav>
            
            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* 移动端导航菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 transition-colors py-2">
                首页
              </Link>
              <Link to="/courses" className="block text-gray-700 hover:text-blue-600 transition-colors py-2">
                课程
              </Link>
              <Link to="/exercises" className="block text-gray-700 hover:text-blue-600 transition-colors py-2">
                练习
              </Link>
              <Link to="/profile" className="block text-gray-700 hover:text-blue-600 transition-colors py-2">
                个人中心
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 主内容 */}
      <main className="pt-24 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:id" element={<ExerciseDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">数据分析学习平台</h3>
              <p className="text-gray-400">
                专注于数据分析技能培养，提供系统化的学习内容和交互式练习。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">课程</Link></li>
                <li><Link to="/exercises" className="text-gray-400 hover:text-white transition-colors">练习</Link></li>
                <li><Link to="/profile" className="text-gray-400 hover:text-white transition-colors">个人中心</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <p className="text-gray-400 mb-2">邮箱: contact@example.com</p>
              <p className="text-gray-400">电话: 123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 数据分析学习平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;