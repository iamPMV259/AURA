import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Brain,
  Award,
  ChevronRight
} from 'lucide-react';

interface SkillAssessmentProps {
  onBack: () => void;
}

const assessmentQuestions = [
  {
    id: 1,
    skill: 'Machine Learning',
    question: 'Which algorithm is most suitable for classification problems with non-linear decision boundaries?',
    options: [
      'Linear Regression',
      'Support Vector Machine with RBF kernel',
      'Simple Decision Tree',
      'K-Means Clustering'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    skill: 'Machine Learning',
    question: 'What is the primary purpose of regularization in machine learning?',
    options: [
      'To increase training speed',
      'To prevent overfitting',
      'To add more features',
      'To visualize data'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    skill: 'Cloud Computing',
    question: 'Which AWS service is best for serverless computing?',
    options: [
      'EC2',
      'S3',
      'Lambda',
      'RDS'
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    skill: 'Cloud Computing',
    question: 'What does "horizontal scaling" mean in cloud computing?',
    options: [
      'Adding more power to existing servers',
      'Adding more servers to distribute load',
      'Reducing the number of servers',
      'Moving to a different cloud provider'
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    skill: 'Data Analysis',
    question: 'Which measure of central tendency is most affected by outliers?',
    options: [
      'Mean',
      'Median',
      'Mode',
      'None of the above'
    ],
    correctAnswer: 0
  }
];

export function SkillAssessment({ onBack }: SkillAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    assessmentQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return (correct / assessmentQuestions.length) * 100;
  };

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const skillLevel = score >= 80 ? 'Expert' : score >= 60 ? 'Advanced' : score >= 40 ? 'Intermediate' : 'Beginner';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <Card className="border-slate-200">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-slate-900 mb-2">Assessment Complete!</h1>
                <p className="text-slate-600">Here are your results</p>
              </div>

              <div className="space-y-6 max-w-md mx-auto">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <div className="text-blue-900 mb-2">Your Score</div>
                  <p className="text-slate-600">{score.toFixed(0)}%</p>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-purple-900 mb-2">Skill Level</div>
                  <Badge className="bg-purple-600 text-white text-lg px-4 py-1">
                    {skillLevel}
                  </Badge>
                </div>

                <div className="p-6 bg-slate-50 rounded-xl text-left">
                  <h3 className="text-slate-900 mb-3 text-center">Question Breakdown</h3>
                  <div className="space-y-2">
                    {assessmentQuestions.map((q, index) => (
                      <div key={q.id} className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Question {index + 1}</span>
                        {selectedAnswers[index] === q.correctAnswer ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <span className="text-red-600 text-sm">Incorrect</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setSelectedAnswers([]);
                  }}
                >
                  Retake Assessment
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={onBack}
                >
                  View Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = assessmentQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-slate-900 mb-1">Skill Assessment</h1>
              <p className="text-slate-600">Test your knowledge and get personalized recommendations</p>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span>~15 minutes</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
              <span>{progress.toFixed(0)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-slate-200 mb-6">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-blue-600 text-white">
                {question.skill}
              </Badge>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Brain className="w-4 h-4" />
                <span>Technical Question</span>
              </div>
            </div>
            <CardTitle className="text-slate-900">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-blue-300'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-slate-700"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            {currentQuestion === assessmentQuestions.length - 1 ? 'Finish' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
