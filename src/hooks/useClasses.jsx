import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";

const useClasses = () => {
  const { loading } = useContext(AuthContext);
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        "https://b7a12-summer-camp-server-side-mdasif61.vercel.app/classes"
      );
      return res.json();
    },
  });
  return { classes, refetch };
};

export default useClasses;
