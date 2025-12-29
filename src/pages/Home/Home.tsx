import QuizCard from '@/components/QuizCard/QuizCard';
import { useState } from 'react';
interface Quiz {
    quizId: number;
    quizTitle: string;
    quizDesc: string;
    quizImg: string;
    titleSearch: string;
}
const quizzes: Quiz[] = [
    {
        quizId: 23,
        quizTitle: "The Ultimate History Quiz",
        quizDesc: "Test your knowledge of world history.",
        quizImg: "images/History.png",
        titleSearch: "History",
    },
    {
        quizId: 17,
        quizTitle: "The Ultimate Science Quiz",
        quizDesc: "Test your knowledge of science.",
        quizImg: "images/Science.png",
        titleSearch: "Science",
    },
    {
        quizId: 22,
        quizTitle: "The Ultimate Geography Quiz",
        quizDesc: "Test your knowledge of geography.",
        quizImg: "images/Geography.png",
        titleSearch: "Geography",
    },
    {
        quizId: 19,
        quizTitle: "The Ultimate Math Quiz",
        quizDesc: "Test your knowledge of math.",
        quizImg: "images/Math.png",
        titleSearch: "Math",
    },
    {
        quizId: 20,
        quizTitle: "The Ultimate Mythology Quiz",
        quizDesc: "Test your knowledge of mythology.",
        quizImg: "images/Literature.png",
        titleSearch: "Mythology",
    },
    {
        quizId: 25,
        quizTitle: "The Ultimate Art Quiz",
        quizDesc: "Test your knowledge of art.",
        quizImg: "images/Art.png",
        titleSearch: "Art",
    },
    {
        quizId: 21,
        quizTitle: "The Ultimate Sport Quiz",
        quizDesc: "Test your knowledge of sport.",
        quizImg: "images/Geography.png",
        titleSearch: "Sport",
    },
    {
        quizId: 15,
        quizTitle: "The Ultimate Video Games Quiz",
        quizDesc: "Test your knowledge of video games.",
        quizImg: "images/Science.png",
        titleSearch: "Video Games",
    },
];

export default function Home() {

    const [filterdQuizes, setfilterdQuizes] = useState<Quiz[]>([...quizzes])

    // const featuredQuizzes = [...quizzes];



    return (
        <section>
            <div>
                <h3 className='text-2xl font-bold'>Search</h3>
                <input onChange={(e) => {
                    const value = e.target.value.toLowerCase();
                    if (value === '') {
                        setfilterdQuizes([...quizzes]);
                        return;
                    }

                    const filtered = quizzes.filter(quiz =>
                        quiz.quizTitle.toLowerCase().includes(value)
                    );

                    setfilterdQuizes(filtered);
                }} type='text' placeholder='Search quizzes' className='mt-6 p-2 px-4 border border-gray-300 bg-gray-100 rounded-lg w-full' />
            </div>
            {/* {searchTerm === '' && */}
            <div className=''>
                <h3 className='text-2xl font-bold my-7'>
                    Featured
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
                    {filterdQuizes.map((quiz) => (
                        <QuizCard size='large' quiz={quiz} key={quiz.quizId} />
                    ))}
                </div>
            </div>
            {/* } */}
        </section>
    )
}
