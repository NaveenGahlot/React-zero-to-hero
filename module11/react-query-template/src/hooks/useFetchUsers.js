import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";


const useFetchUsers = ({ page = 1, pageSize = 10 } = {}) => {
  const fetchTodos = ({ pageParam = page } = {}) =>
    apiClient
      .get(`/todos`, {
        params: {
          _limit: pageSize, // number of items per page
          _start: (pageParam - 1) * pageSize, // calculate the starting index
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery({
    queryKey: ["todos", page, pageSize],
    queryFn: fetchTodos,
    initialPageParam: page,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    keepPreviousData: true,
    retry: 3, 
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = 200; // Assuming there are 200 todos in total
      const totalPages = Math.ceil(totalItems / pageSize);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    }
  });
};
export default useFetchUsers;