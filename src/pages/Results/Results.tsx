import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useContext, useEffect, useState } from "react"
import axiosInstance from "@/lib/axios.global"
import { UserContext } from "@/Context/UserContext"

type ExamResult = {
    ex_ID: number
    courseName: string
    studentDegree: number
    totalExamDegree: number
    examDate: string | null
}




export default function Results() {
    const [results, setresults] = useState<ExamResult[]>([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!user?.id) return;

        const fetchResults = async () => {
            try {
                const res = await axiosInstance.get(
                    `/ExamCorrectionEP/student-grades/${user.id}`
                );
                setresults(res.data);
                console.log(res.data);
                
            } catch (err) {
                console.error(err);
            }
        };

        fetchResults();
    }, [user?.id]);




    const average =
        results.reduce((acc, r) => acc + r.studentDegree, 0) /
        results.reduce((acc, r) => acc + r.totalExamDegree, 0) *
        100

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Student Results</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div>Total Exams: <strong>{results.length}</strong></div>
                    <div>
                        Average Score:
                        <strong className="ml-1">{average.toFixed(0)}%</strong>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {results.map((exam) => {
                    const percentage =
                        (exam.studentDegree / exam.totalExamDegree) * 100

                    const passed = percentage >= 50

                    return (
                        <Card key={exam.ex_ID} className="hover:shadow-md transition">
                            <CardHeader>
                                <CardTitle className="text-base">
                                    {exam.courseName}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Score</span>
                                    <span>
                                        {exam.studentDegree} / {exam.totalExamDegree}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Percentage</span>
                                    <span className="font-medium">
                                        {percentage.toFixed(0)}%
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Status</span>
                                    <Badge variant={passed ? "default" : "destructive"}>
                                        {passed ? "Pass" : "Fail"}
                                    </Badge>
                                </div>

                                <div className="flex justify-between">
                                    <span>Date</span>
                                    <span className="text-muted-foreground">
                                        {exam.examDate ?? "Pending"}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
