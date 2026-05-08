import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { expFormValues } from "@/src/definitions/experience-validations";
import { api } from "@/src/lib/hono";

export function useCreateExperience() {
  const queryClient = useQueryClient();
  return useMutation<any, Error, expFormValues>({
    mutationFn: async (json) => {
      const res = await api.experience.$post({ json });
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experience"] });
      toast.success("Experience Created");
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });
}
