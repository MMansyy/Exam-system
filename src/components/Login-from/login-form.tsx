import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form";
import { UserContext } from "@/Context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "@/lib/axios.global"
import toast from "react-hot-toast"




export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const { register, handleSubmit, control } = useForm();
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    let toastId = toast.loading("Logging in...");
    axiosInstance.post('/login/check', data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "SET_USER",
            payload: {
              id: res.data?.id,
              role: res.data?.role,
              name: res.data?.name
            },
          });
          toast.success("Login successful!", { id: toastId });
          localStorage.setItem("user", JSON.stringify({
            id: res.data?.id,
            role: res.data?.role,
            name: res.data?.name
          }));
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      }).catch((err) => {
        toast.error("Login failed. Please check your ID and role.", { id: toastId });
      });
  };





  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your exam portal
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="user-id">Enter your id</FieldLabel>
                <Input
                  type="text"
                  {...register("id")}
                  placeholder="ex: 6597"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="role">Select your role</FieldLabel>
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectGroup>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="instructor">Instructor</SelectItem>
                        </SelectContent>
                      </SelectGroup>
                    </Select>
                  )}
                />
              </Field>
              <Field>
                <Button type="submit" >Login</Button>
              </Field>
              <FieldSeparator />
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
