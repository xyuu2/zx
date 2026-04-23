import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ChevronRight, BarChart2, Database, LineChart, Code, Brain, FileText } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero 部分 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                掌握数据分析技能，开启职业新篇章
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                系统化学习数据分析核心技能，从基础到进阶，助力你成为数据领域的专业人才
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses" className="px-6 py-3 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors font-medium">
                  开始学习
                </Link>
                <Link to="/exercises" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
                  练习测试
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9" 
                alt="数据分析" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">推荐学习路径</h2>
          
          <div className="relative">
            {/* 时间轴线 */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* 路径节点 */}
            <div className="space-y-12">
              {/* 节点 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">数据基础与SQL</h3>
                  <p className="text-gray-600">掌握数据库原理和SQL查询语句，为数据分析打下基础</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Database size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 节点 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <LineChart size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">统计分析基础</h3>
                  <p className="text-gray-600">学习描述性统计和推断性统计的核心概念和方法</p>
                </div>
              </div>
              
              {/* 节点 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">数据可视化</h3>
                  <p className="text-gray-600">掌握数据可视化的原理和工具，创建有效的数据图表</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <BarChart2 size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 节点 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Code size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Python数据分析</h3>
                  <p className="text-gray-600">使用Python进行数据处理、分析和建模</p>
                </div>
              </div>
              
              {/* 节点 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">机器学习基础</h3>
                  <p className="text-gray-600">了解机器学习的基本概念和常用算法</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Brain size={24} className="text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐课程 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">热门课程</h2>
            <Link to="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
              查看全部
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 课程 1 */}
            <Link to="/courses/1" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20basics%20and%20SQL%20database%20concepts&image_size=square" 
                    alt="数据基础与SQL" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">数据基础与SQL</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">掌握数据存储和查询的基础知识，包括数据库原理和SQL语句</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">初级</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={14} className="mr-1" />
                      1200 人学习
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* 课程 2 */}
            <Link to="/courses/2" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20with%20pandas%20and%20numpy&image_size=square" 
                    alt="Python数据分析" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Python数据分析</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">使用Python进行数据处理、分析和建模</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">中级</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={14} className="mr-1" />
                      2000 人学习
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* 课程 3 */}
            <Link to="/courses/3" className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=machine%20learning%20basics%20and%20algorithms&image_size=square" 
                    alt="机器学习基础" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">机器学习基础</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">了解机器学习的基本概念和常用算法</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">中级</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={14} className="mr-1" />
                      1800 人学习
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 学习优势 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">为什么选择我们</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 优势 1 */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">系统化课程</h3>
              <p className="text-gray-600">从基础到进阶，循序渐进的课程体系，帮助你全面掌握数据分析技能</p>
            </div>
            
            {/* 优势 2 */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">交互式练习</h3>
              <p className="text-gray-600">丰富的练习题和实时反馈，帮助你巩固所学知识，提升实践能力</p>
            </div>
            
            {/* 优势 3 */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">认证证书</h3>
              <p className="text-gray-600">完成课程后获得认证证书，提升你的职业竞争力</p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始你的数据分析学习之旅</h2>
          <p className="text-lg mb-8 text-blue-100">
            加入我们，掌握数据分析核心技能，开启职业新篇章
          </p>
          <Link to="/courses" className="inline-block px-8 py-3 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors font-medium">
            立即开始
          </Link>
        </div>
      </section>
    </div>
  );
};