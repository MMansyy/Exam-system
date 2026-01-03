import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axiosInstance from '@/lib/axios.global';
import { UserContext } from '@/Context/UserContext';


interface Answer {
    q_ID: number;
    st_Answer: string;
}

interface ExamSubmission {
    ex_ID: number;
    st_ID: number;
    answers: Answer[];
}

interface Question {
    q_ID: number;
    q_Text: string;
    options: string[];
}

const Exam: React.FC = () => {
    const { name: examName, id } = useParams<{ name: string, id: string }>();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [examID, setexamID] = useState<number>(0);


    const [questions, setQuestions] = useState<Question[]>([
        { q_ID: 1, q_Text: "What is React?", options: ["A library", "A framework", "A language"] },
        { q_ID: 2, q_Text: "What is JSX?", options: ["JavaScript XML", "Java Syntax", "JSON Extension"] },
        { q_ID: 3, q_Text: "What is a component?", options: ["Reusable UI piece", "A function", "A class"] }
    ]);

    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

    const handleAnswerSelect = (questionId: number, answer: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = async () => {
        const answers: Answer[] = Object.entries(selectedAnswers).map(([qId, answer]) => ({
            q_ID: parseInt(qId),
            st_Answer: answer
        }));

        const submission: ExamSubmission = {
            ex_ID: parseInt(examID || '0'),
            st_ID: user?.id,
            answers: answers
        };

        try {
            const response = await axiosInstance.post('/ExamSubEP/submit', submission);
            console.log('Submission successful:', response.data);
        } catch (err: any) {
            console.log(submission);
            console.error('Submission failed:', err);
            setError('Failed to submit exam. Please try again.');
            return;
        }
        console.log('Submitting:', submission);

        navigate('/home');
    };

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    React.useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setIsLoading(true);
                console.log("Attempting to fetch with ID:", examName);
                const response = await axiosInstance.post(
                    `/Exam/generate?courseName=${encodeURIComponent(examName || '')}&mcqNum=5&tfNum=5`
                );

                console.log("Full API Response:", response);
                console.log("Response Data:", response.data);

                const transformedQuestions: Question[] = response.data.map((item: any) => {
                    const options = [item.a, item.b];
                    if (item.c) options.push(item.c);

                    return {
                        q_ID: item.q_ID,
                        q_Text: item.question,
                        options: options.filter(Boolean)
                    };
                });

                if (transformedQuestions.length === 0) {
                    console.log("API returned empty questions array");
                }
                setexamID(response.data[0]?.ex_ID || 0);
                setQuestions(transformedQuestions);
                setError(null);
            } catch (err: any) {
                console.error('Error Details:', err);
                if (err.response) {
                    console.error('Server Error Data:', err.response.data);
                    console.error('Server Status:', err.response.status);
                    setError(`Server Error: ${err.response.status} - ${err.message}`);
                } else if (err.request) {
                    console.error('No response received:', err.request);
                    setError('Network Error: No response from server. Check if API is running.');
                } else {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        console.log("Exam ID in useEffect:", examName);

        if (examName) {
            fetchQuestions();
        }
    }, [examName]);

    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <div className="text-center">
                    <p className="text-lg">Loading exam questions...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto py-8 px-4">
                <Card className="border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Error</CardTitle>
                        <CardDescription>{error}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => navigate('/home')}>Back to Exams</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Exam</h1>
                <p className="text-muted-foreground mt-2">Answer all questions before submitting</p>
            </div>

            <div className="space-y-6 mb-8">
                {questions.map((question, index) => (
                    <Card key={question.q_ID}>
                        <CardHeader>
                            <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                            <CardDescription className="text-base font-normal text-foreground">
                                {question.q_Text}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {question.options.map((option, optIndex) => (
                                    <button
                                        key={optIndex}
                                        onClick={() => handleAnswerSelect(question.q_ID, option)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:border-primary hover:bg-accent ${selectedAnswers[question.q_ID] === option
                                            ? 'border-primary bg-primary/10 font-medium'
                                            : 'border-border bg-background'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedAnswers[question.q_ID] === option
                                                ? 'border-primary'
                                                : 'border-muted-foreground'
                                                }`}>
                                                {selectedAnswers[question.q_ID] === option && (
                                                    <div className="w-3 h-3 rounded-full bg-primary" />
                                                )}
                                            </div>
                                            <span className="flex-1">{option}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-end">
                <Button
                    onClick={handleSubmit}
                    disabled={Object.keys(selectedAnswers).length !== questions.length}
                    size="lg"
                >
                    Submit Exam
                </Button>
            </div>
        </div>
    );
};

export default Exam;