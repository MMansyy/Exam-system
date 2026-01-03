import { Link } from 'react-router-dom';


interface Quiz {
    crs_ID: number;
    crs_Name: string;
}

export default function QuizCard({ quiz, size }: { quiz: Quiz, size: 'small' | 'large' }) {
    if (size === 'small') {
        return (
            <div
                key={quiz.crs_ID}
                className="w-full md:w-56 min-h-64 flex flex-col justify-between">
                <img
                    src={'/images/Art.png'}
                    alt={quiz.crs_Name}
                    className="rounded-lg w-full h-32 object-cover shadow-sm"
                />

                <div className="flex flex-col flex-1 mt-2">
                    <h3 className='text-lg font-semibold line-clamp-1'>{quiz.crs_Name}</h3>
                    <p className='text-gray-500 mb-4'>{quiz.crs_Name}</p>
                    <div className="mt-auto w-full">
                        <Link to={`/quiz/${quiz.crs_ID}`} className='w-full block text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border transition-all duration-300 cursor-pointer'>
                            Take Quiz
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            key={quiz.crs_ID}
            className="w-full md:w-72">
            <img
                src={'/images/Art.png'}
                alt={quiz.crs_Name}
                className="rounded-lg w-full h-40 object-cover shadow-sm"
            />
            <div className="mt-3">
                <h3 className='text-xl font-bold line-clamp-1'>{quiz.crs_Name}</h3>
                <p className='text-gray-500'>{quiz.crs_Name}</p>
                <div className="mt-4">
                    <Link to={`/quiz/${quiz.crs_Name}/${quiz.crs_ID}`} className='w-full hover:outline-1 hover:outline-black block text-center  bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border transition-all duration-300 cursor-pointer'>
                        Take Quiz
                    </Link>
                </div>
            </div>
        </div>
    )
}
