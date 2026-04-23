import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock, Users, Award, ChevronRight } from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  content: string;
  orderIndex: number;
  completed: boolean;
}

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  image: string;
  enrolledCount: number;
  chapters: Chapter[];
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: '数据基础与SQL',
    description: '掌握数据存储和查询的基础知识，包括数据库原理和SQL语句。本课程将帮助你理解数据库的基本概念，掌握SQL查询语句的使用，以及学习数据库设计的基本原理。',
    level: 'beginner',
    category: '数据基础',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20basics%20and%20SQL%20database%20concepts&image_size=landscape_16_9',
    enrolledCount: 1200,
    chapters: [
      {
        id: 1,
        title: '数据库基础',
        content: '数据库的基本概念、类型和结构。包括关系型数据库和非关系型数据库的区别，数据库管理系统的功能等。',
        orderIndex: 1,
        completed: false
      },
      {
        id: 2,
        title: 'SQL基础',
        content: 'SQL语句的基本语法和使用方法。包括SELECT、INSERT、UPDATE、DELETE等基本语句的使用。',
        orderIndex: 2,
        completed: false
      },
      {
        id: 3,
        title: 'SQL查询进阶',
        content: '复杂查询、连接和子查询。包括JOIN语句的使用，子查询的编写，以及聚合函数的应用。',
        orderIndex: 3,
        completed: false
      },
      {
        id: 4,
        title: '数据建模',
        content: '实体关系模型和数据库设计。包括ER图的绘制，表结构的设计，以及数据完整性约束的设置。',
        orderIndex: 4,
        completed: false
      }
    ]
  },
  {
    id: 2,
    title: '统计分析基础',
    description: '学习描述性统计和推断性统计的核心概念和方法。本课程将帮助你掌握统计分析的基本原理，学会使用统计方法分析数据，以及理解统计结果的含义。',
    level: 'beginner',
    category: '统计分析',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=statistics%20analysis%20concepts%20and%20charts&image_size=landscape_16_9',
    enrolledCount: 980,
    chapters: [
      {
        id: 5,
        title: '描述性统计',
        content: '均值、中位数、方差等描述性统计指标。包括数据的集中趋势和离散程度的度量。',
        orderIndex: 1,
        completed: false
      },
      {
        id: 6,
        title: '概率基础',
        content: '概率分布和随机变量。包括正态分布、二项分布、泊松分布等常见概率分布。',
        orderIndex: 2,
        completed: false
      },
      {
        id: 7,
        title: '假设检验',
        content: 't检验、卡方检验等假设检验方法。包括原假设和备择假设的设定，检验统计量的计算，以及p值的解释。',
        orderIndex: 3,
        completed: false
      },
      {
        id: 8,
        title: '回归分析',
        content: '线性回归和相关分析。包括简单线性回归、多元线性回归，以及相关系数的计算和解释。',
        orderIndex: 4,
        completed: false
      }
    ]
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

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || '1');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [completedChapters, setCompletedChapters] = useState<Set<number>>(new Set());

  const course = mockCourses.find(c => c.id === courseId) || mockCourses[0];

  const handleChapterClick = (chapterId: number) => {
    setSelectedChapter(chapterId);
  };

  const handleMarkComplete = (chapterId: number) => {
    const newCompleted = new Set(completedChapters);
    if (newCompleted.has(chapterId)) {
      newCompleted.delete(chapterId);
    } else {
      newCompleted.add(chapterId);
    }
    setCompletedChapters(newCompleted);
  };

  const selectedChapterData = course.chapters.find(ch => ch.id === selectedChapter) || course.chapters[0];
  const progress = Math.round((completedChapters.size / course.chapters.length) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ChevronRight size={16} className="transform rotate-180 mr-1" />
        返回课程列表
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 课程信息 */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
                <span className={`px-3 py-1 text-sm rounded-full ${getLevelColor(course.level)}`}>
                  {getLevelText(course.level)}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <div className="flex space-x-6 mb-6">
                <div className="flex items-center">
                  <Users size={18} className="mr-2 text-gray-500" />
                  <span className="text-gray-600">{course.enrolledCount} 人学习</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2 text-gray-500" />
                  <span className="text-gray-600">预计 10 小时</span>
                </div>
                <div className="flex items-center">
                  <Award size={18} className="mr-2 text-gray-500" />
                  <span className="text-gray-600">完成后获得证书</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  开始学习
                </button>
                <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                  加入收藏
                </button>
              </div>
            </div>
          </div>

          {/* 章节内容 */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">章节内容</h2>
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium text-gray-800 mb-2">{selectedChapterData.title}</h3>
              <p className="text-gray-600">{selectedChapterData.content}</p>
              {/* 这里可以添加更多内容，如代码示例、图表等 */}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button 
                onClick={() => handleMarkComplete(selectedChapterData.id)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${completedChapters.has(selectedChapterData.id) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                <CheckCircle size={16} className="mr-2" />
                {completedChapters.has(selectedChapterData.id) ? '已完成' : '标记为完成'}
              </button>
              <Link to={`/exercises?courseId=${course.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                相关练习
              </Link>
            </div>
          </div>
        </div>

        {/* 章节列表和进度 */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">课程进度</h2>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>已完成 {completedChapters.size} / {course.chapters.length} 章节</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-3">章节列表</h2>
            <div className="space-y-2">
              {course.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-full text-left px-4 py-3 rounded-md flex justify-between items-center transition-colors ${selectedChapter === chapter.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'}`}
                >
                  <span>第 {chapter.orderIndex} 章: {chapter.title}</span>
                  {completedChapters.has(chapter.id) && (
                    <CheckCircle size={16} className="text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 课程信息卡片 */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">课程信息</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">类别</span>
                <span className="font-medium">{course.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">难度</span>
                <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(course.level)}`}>
                  {getLevelText(course.level)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">章节数</span>
                <span>{course.chapters.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">学习人数</span>
                <span>{course.enrolledCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;