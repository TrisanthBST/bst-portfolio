import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { api } from "@/src/lib/hono";

type ResponseType = {
  message?: string;
};

export function useLogout() {
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const res = await api.auth.logout.$post();
      const data: ResponseType = await res.json();
      return data;
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    }
  });
  return mutation;
}
