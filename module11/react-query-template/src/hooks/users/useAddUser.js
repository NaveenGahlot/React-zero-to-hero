import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import apiClient from '../../utils/api-client';

const useAddUser = (setName) => {
    const queryClient = useQueryClient();
    const [mutationError, setMutationError] = useState(null);
    return useMutation({
        mutationFn: (newUser) => apiClient.post('/users', newUser).then((res) => res.data),
        onSuccess: (createdUser, newUser) => {
            const previousData = queryClient.getQueryData(['users']);
            queryClient.setQueryData(['users'], (users) => users.map((user) => (user === newUser ? createdUser : user)));
            setName('');
            setMutationError(null);
            return { previousData };
        },
        onMutate: (newUser) => {
            queryClient.setQueryData(['users'], (oldUsers = []) => [newUser, ...oldUsers]);
        },
        onError: (err, newUser, context) => {
            if (!context) {
                return;
            }
            queryClient.setQueryData(['users'], context.previousData);
            setMutationError(err.message);
        },
        // onSettled: () => {
        //     queryClient.invalidateQueries(['users']);
        // }
    });
}
export default useAddUser