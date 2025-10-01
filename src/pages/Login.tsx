import Ph_form from "@/components/form/Ph_form";
import Ph_Input from "@/components/form/Ph_Input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/redux/features/auth/auth_apis";
import { set_user, type TUSer } from "@/redux/features/auth/auth_slice";
import { useAppDispatch } from "@/redux/hook";
import { decode_access_token } from "@/utils/decode_access_token";
import { useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  // console.log(data, isLoading, error);

  const defaultValues = {
    user_id: "A-0001",
    user_password: "chamonali1",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const login_id = toast.loading("Logging in...");
    try {
      const userInfo = {
        auth_data: {
          id: data?.user_id,
          password: data?.user_password,
        },
      };
      const res = await login(userInfo).unwrap();
      const user = decode_access_token(res?.data?.accessToken) as TUSer;
      if (user) {
        toast.success("Logged in successfully", {
          id: login_id,
          duration: 2000,
        });
      }
      dispatch(
        set_user({
          user: user,
          token: res?.data?.accessToken,
        })
      );
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Login failed", { id: login_id, duration: 2000 });
    }
  };

  return (
    <Ph_form onSubmit={onSubmit} defaultValues={defaultValues}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="min-w-md   rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="grid gap-4 p-20">
            <div className="grid gap-1">
              <Ph_Input
                type="text"
                id="user_id"
                name="user_id"
                place_holder="eg: A-****, F-***, *********"
                label="Your user id"
              ></Ph_Input>
            </div>
            <div className="grid gap-1">
              <Ph_Input
                type="password"
                id="user_password"
                name="user_password"
                place_holder="**************"
                label="enter your password"
              ></Ph_Input>
            </div>

            <Button type="submit" className="mt-4">
              Login
            </Button>
          </div>
        </div>
      </div>
    </Ph_form>
  );
};

export default Login;
