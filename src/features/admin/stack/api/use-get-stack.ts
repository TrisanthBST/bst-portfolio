import { useQuery } from "@tanstack/react-query";

import { stackItemType } from "@/src/definitions/stack-validations";
import { api } from "@/src/lib/hono";

export type StackGroup = {
  type: string;
  items: (stackItemType & { _id: string })[];
};

export function useGetStack(withHidden: boolean = false) {
  const query = useQuery<StackGroup[]>({
    queryKey: ["stack", withHidden],
    queryFn: async () => {
      const res = await api.stack.$get({
        query: {
          withHidden,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch stack");
      const { data } = await res.json();
      return data as StackGroup[];
    },
  });
  return query;
}
