import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { api } from "@/src/lib/hono";

export function useUpdateExperienceItem(id?: string) {
  const queryClient = useQueryClient();
  return useMutation<any, Error, any>({
    mutationFn: async (json) => {
      const res = await api.experience[":id"].$patch({ param: { id }, json });
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["experience"],
      });
      queryClient.invalidateQueries({
        queryKey: ["exp_item", id],
      });
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });
}
