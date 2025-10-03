import type { TResponse } from "@/types";
import { toast } from "sonner";

const creation_successful_sender = <T>(
  data: TResponse<T>,
  success_message: string,
  failed_message: string,
  toast_id: string
) => {
  if (data?.data?.success == true) {
    toast.success(success_message, { id: toast_id, duration: 7000 });
  } else {
    toast.error(failed_message, { id: toast_id, duration: 7000 });
  }
};

export default creation_successful_sender;
