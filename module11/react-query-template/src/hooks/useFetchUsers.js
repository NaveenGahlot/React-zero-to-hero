import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";


const useFetchUsers = (page = 1, pageSize = 10) => {
  const fetchTodos = () =>
    apiClient
      .get(`/todos`, {
        params: {
          _limit: pageSize, // number of items per page
          _start: (page - 1) * pageSize, // calculate the starting index
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: ["todos", page, pageSize],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    keepPreviousData: true,
    retry: 3, 
  });
};
export default useFetchUsers;