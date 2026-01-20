import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserContext } from "@/Context/UserContext";
import { useContext } from "react";

export default function Dashbord() {

    const { user } = useContext(UserContext);

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Instructor Dashboard</CardTitle>
                    <CardContent className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div>
                            <strong>ID:</strong> {user.id}
                        </div>
                        {user.name && (
                            <div>
                                <strong>Name:</strong> {user.name}
                            </div>
                        )}
                    </CardContent>
                </CardHeader>
                
            </Card>
        </div>
    )
}
