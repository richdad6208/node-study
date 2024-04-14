import { useQuery } from "@tanstack/react-query";

const getTest = async () => {
  const rowData = await fetch("http://localhost:3000/");
  const response = await rowData.json();
  return response;
};

export const useGetTest = () => {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: getTest,
  });
  return { data };
};
