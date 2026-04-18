import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";

const fetchTodos = () => apiClient.get('/todos').then((res) => res.data);

const useTodos = () => {
return useQuery({
    queryKey: ['users'],
    queryFn: fetchTodos,
  }); 
};
export default useTodos;