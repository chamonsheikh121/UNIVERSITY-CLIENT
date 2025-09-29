import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth/auth_apis";
import { set_user } from "@/redux/features/auth/auth_slice";
import { useAppDispatch } from "@/redux/hook";
import { decode_access_token } from "@/utils/decode_access_token";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "chamonali1",
    },
  });

  const dispatch = useAppDispatch();

  const [login, { error }] = useLoginMutation();

  //   console.log(data, isLoading, error);

  const onSubmit = async (data) => {
    const userInfo = {
      auth_data: {
        id: data?.id,
        password: data?.password,
      },
    };
    const res = await login(userInfo).unwrap();
    const user = decode_access_token(res?.data?.accessToken);
    dispatch(
      set_user({
        user: user,
        token: res?.data?.accessToken,
      })
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-w-md   rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 p-20">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("id")}
              id="text"
              type="text"
              placeholder="Your id"
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              id="text"
              type="password"
              placeholder="********"
            />
          </div>

          <Button type="submit" className="mt-4">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
