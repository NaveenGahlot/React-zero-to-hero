import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";


const useTodos = (userId) => {
const fetchTodos = () => apiClient.get(`/todos`, {
  params: {
    userId,
  }
}).then((res) => res.data);
return useQuery({
    queryKey: userId ? ['users', userId, 'todos'] : ['todos'],
    queryFn: fetchTodos,
    gcTime: 1000 * 60 * 5, // 5 minutes 
    retry: 3,
  }); 
};
export default useTodos;