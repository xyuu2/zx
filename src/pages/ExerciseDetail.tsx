import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, CheckCircle, XCircle, Award } from 'lucide-react';

interface Question {
  id: number;
  type: string;
  content: string;
  options?: string[];
  answer: string;
  explanation: string;
  orderIndex: number;
}

interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  courseId: number;
  courseName: string;
  questions: Question[];
}

const mockExercises: Exercise[] = [
  {
    id: 1,
    title: 'SQL基础练习',
    description: '测试SQL基本语句的使用能力，包括SELECT、INSERT、UPDATE、DELETE等基本操作。',
    difficulty: 'easy',
    courseId: 1,
    courseName: '数据基础与SQL',
    questions: [
      {
        id: 1,
        type: 'multiple_choice',
        content: '以下哪个SQL语句用于从表中选择所有数据？',
        options: [
          'SELECT * FROM table;',
          'SELECT ALL FROM table;',
          'SELECT EVERYTHING FROM table;',
          'SELECT FROM table;'
        ],
        answer: 'SELECT * FROM table;',
        explanation: 'SELECT * 语句用于选择表中的所有列和所有行。',
        orderIndex: 1
      },
      {
        id: 2,
        type: 'fill_blank',
        content: 'SQL中用于插入数据的语句是__________。',
        answer: 'INSERT',
        explanation: 'INSERT语句用于向表中插入新数据。',
        orderIndex: 2
      },
      {
        id: 3,
        type: 'multiple_choice',
        content: '以下哪个SQL语句用于更新表中的数据？',
        options: [
          'UPDATE',
          'MODIFY',
          'CHANGE',
          'ALTER'
        ],
        answer: 'UPDATE',
        explanation: 'UPDATE语句用于更新表中的现有数据。',
        orderIndex: 3
      }
    ]
  },
  {
    id: 2,
    title: 'SQL查询进阶练习',
    description: '测试复杂SQL查询的能力，包括JOIN、子查询、聚合函数等高级操作。',
    difficulty: 'medium',
    courseId: 1,
    courseName: '数据基础与SQL',
    questions: [
      {
        id: 4,
        type: 'multiple_choice',
        content: '以下哪个JOIN类型返回左表中的所有记录和右表中匹配的记录？',
        options: [
          'INNER JOIN',
          'LEFT JOIN',
          'RIGHT JOIN',
          'FULL JOIN'
        ],
        answer: 'LEFT JOIN',
        explanation: 'LEFT JOIN返回左表中的所有记录和右表中匹配的记录。',
        orderIndex: 1
      },
      {
        id: 5,
        type: 'multiple_choice',
        content: '以下哪个聚合函数用于计算平均值？',
        options: [
          'SUM()',
          'COUNT()',
          'AVG()',
          'MAX()'
        ],
        answer: 'AVG()',
        explanation: 'AVG()函数用于计算平均值。',
        orderIndex: 2
      }
    ]
  }
];

interface Answer {
  questionId: number;
  answer: string;
}

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

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exerciseId = parseInt(id || '1');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);

  const exercise = mockExercises.find(ex => ex.id === exerciseId) || mockExercises[0];

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      if (existingIndex >= 0) {
        const newAnswers = [...prev];
        newAnswers[existingIndex] = { questionId, answer };
        return newAnswers;
      } else {
        return [...prev, { questionId, answer }];
      }
    });
  };

  const handleSubmit = () => {
    let correct = 0;
    exercise.questions.forEach(question => {
      const userAnswer = answers.find(a => a.questionId === question.id)?.answer;
      if (userAnswer === question.answer) {
        correct++;
      }
    });
    setCorrectCount(correct);
    const calculatedScore = Math.round((correct / exercise.questions.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);
  };

  const isCorrect = (questionId: number) => {
    const userAnswer = answers.find(a => a.questionId === questionId)?.answer;
    const question = exercise.questions.find(q => q.id === questionId);
    return userAnswer === question?.answer;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/exercises" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ChevronRight size={16} className="transform rotate-180 mr-1" />
        返回练习题列表
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{exercise.title}</h1>
            <p className="text-gray-600 mt-1">{exercise.description}</p>
          </div>
          <span className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
            {getDifficultyText(exercise.difficulty)}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={18} className="mr-2" />
          <span>建议完成时间: {exercise.questions.length * 2} 分钟</span>
        </div>
      </div>

      {!submitted ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">问题</h2>
          <div className="space-y-8">
            {exercise.questions.map((question, index) => (
              <div key={question.id} className="border-b pb-6">
                <div className="flex items-start mb-4">
                  <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-4">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">{question.content}</h3>
                    {question.type === 'multiple_choice' && question.options && (
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center">
                            <input
                              type="radio"
                              id={`q${question.id}_opt${optIndex}`}
                              name={`q${question.id}`}
                              value={option}
                              checked={answers.find(a => a.questionId === question.id)?.answer === option}
                              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                              className="mr-3"
                            />
                            <label htmlFor={`q${question.id}_opt${optIndex}`} className="text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                    {question.type === 'fill_blank' && (
                      <div>
                        <input
                          type="text"
                          value={answers.find(a => a.questionId === question.id)?.answer || ''}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="请输入答案"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              提交答案
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award size={48} className="text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">练习完成！</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-2">你的得分: <span className="font-bold text-blue-600">{score}%</span></p>
              <p className="text-gray-600">正确: {correctCount} / {exercise.questions.length}</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">详细反馈</h3>
          <div className="space-y-6">
            {exercise.questions.map((question, index) => {
              const userAnswer = answers.find(a => a.questionId === question.id)?.answer;
              const correct = userAnswer === question.answer;
              
              return (
                <div key={question.id} className="border-b pb-6">
                  <div className="flex items-start mb-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-4 ${correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {correct ? <CheckCircle size={16} /> : <XCircle size={16} />}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-800 mb-2">{question.content}</h4>
                      <div className="mb-2">
                        <span className="text-gray-600 mr-2">你的答案:</span>
                        <span className={`font-medium ${correct ? 'text-green-600' : 'text-red-600'}`}>
                          {userAnswer || '未回答'}
                        </span>
                      </div>
                      {!correct && (
                        <div className="mb-2">
                          <span className="text-gray-600 mr-2">正确答案:</span>
                          <span className="font-medium text-green-600">{question.answer}</span>
                        </div>
                      )}
                      <div className="mt-2">
                        <span className="text-gray-600 font-medium">解析:</span>
                        <p className="text-gray-700 mt-1">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Link to={`/exercises`} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
              返回练习题列表
            </Link>
            <Link to={`/courses/${exercise.courseId}`} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              返回课程
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseDetail;