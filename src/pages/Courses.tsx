import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  image: string;
  enrolledCount: number;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: '数据基础与SQL',
    description: '掌握数据存储和查询的基础知识，包括数据库原理和SQL语句',
    level: 'beginner',
    category: '数据基础',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20basics%20and%20SQL%20database%20concepts&image_size=square',
    enrolledCount: 1200
  },
  {
    id: 2,
    title: '统计分析基础',
    description: '学习描述性统计和推断性统计的核心概念和方法',
    level: 'beginner',
    category: '统计分析',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=statistics%20analysis%20concepts%20and%20charts&image_size=square',
    enrolledCount: 980
  },
  {
    id: 3,
    title: '数据可视化',
    description: '掌握数据可视化的原理和工具，创建有效的数据图表',
    level: 'intermediate',
    category: '数据可视化',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20charts%20and%20graphs&image_size=square',
    enrolledCount: 1500
  },
  {
    id: 4,
    title: 'Python数据分析',
    description: '使用Python进行数据处理、分析和建模',
    level: 'intermediate',
    category: '编程语言',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20with%20pandas%20and%20numpy&image_size=square',
    enrolledCount: 2000
  },
  {
    id: 5,
    title: '机器学习基础',
    description: '了解机器学习的基本概念和常用算法',
    level: 'intermediate',
    category: '机器学习',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=machine%20learning%20basics%20and%20algorithms&image_size=square',
    enrolledCount: 1800
  },
  {
    id: 6,
    title: '深度学习入门',
    description: '学习深度学习的基本原理和常用模型',
    level: 'advanced',
    category: '机器学习',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20learning%20neural%20networks%20concepts&image_size=square',
    enrolledCount: 1300
  },
  {
    id: 7,
    title: '大数据处理',
    description: '掌握大数据处理的技术和工具，如Hadoop和Spark',
    level: 'advanced',
    category: '大数据',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=big%20data%20processing%20with%20hadoop%20and%20spark&image_size=square',
    enrolledCount: 1100
  },
  {
    id: 8,
    title: '时间序列分析',
    description: '学习时间序列数据的分析方法和预测模型',
    level: 'intermediate',
    category: '统计分析',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=time%20series%20analysis%20and%20forecasting&image_size=square',
    enrolledCount: 950
  },
  {
    id: 9,
    title: '文本分析',
    description: '掌握文本数据的处理和分析方法',
    level: 'intermediate',
    category: '数据分析',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=text%20analysis%20and%20natural%20language%20processing&image_size=square',
    enrolledCount: 1250
  },
  {
    id: 10,
    title: '数据工程基础',
    description: '了解数据工程的核心概念和实践',
    level: 'advanced',
    category: '数据工程',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20engineering%20pipelines%20and%20ETL&image_size=square',
    enrolledCount: 850
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-blue-100 text-blue-800';
    case 'advanced':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getLevelText = (level: string) => {
  switch (level) {
    case 'beginner':
      return '初级';
    case 'intermediate':
      return '中级';
    case 'advanced':
      return '高级';
    default:
      return level;
  }
};

const Courses: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">数据分析课程</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            全部课程
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
            按难度筛选
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
            按类别筛选
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(course.level)}`}>
                    {getLevelText(course.level)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{course.category}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={14} className="mr-1" />
                    {course.enrolledCount} 人学习
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;