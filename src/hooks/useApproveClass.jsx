import { useQuery } from "@tanstack/react-query";

const useApproveClass = () => {
  const { data: approvedClass = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://b7a12-summer-camp-server-side-mdasif61.vercel.app/approved"
      );
      return res.json();
    },
  });
  return { approvedClass, refetch };
};

export default useApproveClass;
