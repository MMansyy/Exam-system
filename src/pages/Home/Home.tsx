import QuizCard from '@/components/QuizCard/QuizCard';
import { UserContext } from '@/Context/UserContext';
import axiosInstance from '@/lib/axios.global';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
interface Quiz {
    crs_ID: number;
    crs_Name: string;
}


export default function Home() {

    const [quizzes, setQuizzes] = useState<Quiz[]>()
    const [filterdQuizes, setfilterdQuizes] = useState<Quiz[]>([...quizzes || []])
    const { user } = useContext(UserContext);

    console.log(user);



    useEffect(() => {
        if (user && user.id) {
            axiosInstance.get(`/student/${user.id}/courses`)
                .then((res) => {
                    setQuizzes(res.data);
                    setfilterdQuizes(res.data);
                }).catch((err) => {
                    toast.error("Error fetching quizzes:", err);
                });
        }
    }, [user?.id]);


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
                    const filtered = quizzes?.filter(quiz =>
                        quiz.crs_Name.toLowerCase().includes(value)
                    );
                    setfilterdQuizes(filtered);
                }} type='text' placeholder='Search quizzes' className='mt-6 p-2 px-4 border border-gray-300 bg-gray-100 rounded-lg w-full' />
            </div>
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
        </section>
    )
}
