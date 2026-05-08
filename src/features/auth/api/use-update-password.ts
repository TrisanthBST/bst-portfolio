import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { api } from "@/src/lib/hono";

type ResponseType = {
  success?: boolean;
  message: string;
};

type RequestType = {
  passwordCurrent: string;
  password: string;
  passwordConfirm: string;
};

export function useUpdatePassword() {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const res = await api.auth["update-password"].$patch({
        json
      });
      const data: ResponseType = await res.json();
      if ("success" in data && data.success === false) {
        throw new Error(data.message);
      }
      return data;
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    }
  });
  return mutation;
}
