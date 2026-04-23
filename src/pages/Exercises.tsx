import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Clock, Award, Filter } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  courseId: number;
  courseName: string;
  questionCount: number;
}

const mockExercises: Exercise[] = [
  {
    id: 1,
    title: 'SQL基础练习',
    description: '测试SQL基本语句的使用能力，包括SELECT、INSERT、UPDATE、DELETE等基本操作。',
    difficulty: 'easy',
    courseId: 1,
    courseName: '数据基础与SQL',
    questionCount: 10
  },
  {
    id: 2,
    title: 'SQL查询进阶练习',
    description: '测试复杂SQL查询的能力，包括JOIN、子查询、聚合函数等高级操作。',
    difficulty: 'medium',
    courseId: 1,
    courseName: '数据基础与SQL',
    questionCount: 8
  },
  {
    id: 3,
    title: '数据库设计练习',
    description: '测试数据库设计和建模能力，包括ER图绘制、表结构设计等。',
    difficulty: 'hard',
    courseId: 1,
    courseName: '数据基础与SQL',
    questionCount: 6
  },
  {
    id: 4,
    title: '描述性统计练习',
    description: '测试描述性统计指标的计算和理解，包括均值、中位数、方差等。',
    difficulty: 'easy',
    courseId: 2,
    courseName: '统计分析基础',
    questionCount: 10
  },
  {
    id: 5,
    title: '概率基础练习',
    description: '测试概率分布和随机变量的理解，包括正态分布、二项分布等。',
    difficulty: 'medium',
    courseId: 2,
    courseName: '统计分析基础',
    questionCount: 8
  },
  {
    id: 6,
    title: '假设检验练习',
    description: '测试假设检验方法的应用，包括t检验、卡方检验等。',
    difficulty: 'hard',
    courseId: 2,
    courseName: '统计分析基础',
    questionCount: 6
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getDifficultyText = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return '简单';
    case 'medium':
      return '中等';
    case 'hard':
      return '困难';
    default:
      return difficulty;
  }
};

const Exercises: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courseId, setCourseId] = useState<string | null>(searchParams.get('courseId'));
  const [difficulty, setDifficulty] = useState<string>('all');
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    let exercises = [...mockExercises];
    
    if (courseId) {
      exercises = exercises.filter(ex => ex.courseId.toString() === courseId);
    }
    
    if (difficulty !== 'all') {
      exercises = exercises.filter(ex => ex.difficulty === difficulty);
    }
    
    setFilteredExercises(exercises);
  }, [courseId, difficulty]);

  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">练习题</h1>
          {courseId && (
            <p className="text-gray-600 mt-1">
              课程: {mockExercises.find(ex => ex.courseId.toString() === courseId)?.courseName}
            </p>
          )}
        </div>
        <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          返回课程列表
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* 筛选器 */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <Filter size={18} className="mr-2 text-gray-500" />
            <span className="text-gray-700 font-medium">难度筛选:</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => handleDifficultyChange('all')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${difficulty === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              全部
            </button>
            <button 
              onClick={() => handleDifficultyChange('easy')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${difficulty === 'easy' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              简单
            </button>
            <button 
              onClick={() => handleDifficultyChange('medium')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${difficulty === 'medium' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              中等
            </button>
            <button 
              onClick={() => handleDifficultyChange('hard')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${difficulty === 'hard' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              困难
            </button>
          </div>
        </div>
      </div>

      {/* 练习题列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <Link to={`/exercises/${exercise.id}`} key={exercise.id} className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{exercise.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                    {getDifficultyText(exercise.difficulty)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{exercise.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{exercise.courseName}</span>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {exercise.questionCount} 题
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">没有找到符合条件的练习题</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;