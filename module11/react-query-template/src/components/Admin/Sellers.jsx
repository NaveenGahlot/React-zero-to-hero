// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import apiClient from '../../utils/api-client';
import useUsers from '../../hooks/useUsers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const Sellers = () => {
  const queryClient = useQueryClient();
  const { data: users = [], error, isLoading } = useUsers();
  const [name, setName] = useState('');
  const [mutationError, setMutationError] = useState(null);

  const addUserMutation = useMutation({
    mutationFn: (newUser) => apiClient.post('/users', newUser).then((res) => res.data),
    onSuccess: (createdUser) => {
      queryClient.setQueryData(['users'], (oldUsers = []) => [createdUser, ...oldUsers]);
      setName('');
      setMutationError(null);
    },
    onError: (err) => {
      setMutationError(err.message);
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: (id) => apiClient.delete(`/users/${id}`).then((res)=> res.data),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['users'], (oldUsers = []) => oldUsers.filter((user) => user.id !== id));
      setMutationError(null);
    },
    onError: (err) => setMutationError(err.message),
  });

  const updateUserMutation = useMutation({
    mutationFn: (updatedUser) => apiClient.patch(`/users/${updatedUser.id}`, updatedUser).then((res) => res.data),
    onSuccess: (updateUser) => queryClient.setQueriesData( ['users'] , (oldUsers = []) => oldUsers.map((user) => (user.id === updateUser.id ? updateUser : user)) ),
    onError: (err) => setMutationError(err.message),
  });

  const addUser = () => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newUser = {
      name: trimmedName,
    };
    addUserMutation.mutate(newUser);
  };

  const deleteUser = (id) => {
    deleteUserMutation.mutate(id);
  };

  const updateUser = (user) => {
    const updatedUser = {
      ...user,
      name: `${user.name} Update`,
    };
    updateUserMutation.mutate(updatedUser);
  };

  return (
    <div>
      <h1>Sellers component</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={addUser}>Add User</button>
      {isLoading && <p>Loading...</p>}
      {/* //{(error || mutationError) && <em>{error?.message || mutationError}</em>} */}
      {error && <em>{error.message}</em>}
      {addUserMutation.error && <em>{addUserMutation.error.message}</em>}
      {deleteUserMutation.error && <em>{deleteUserMutation.error.message}</em>}
      {updateUserMutation.error && <em>{updateUserMutation.error.message}</em>}
      <table>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>
                <p>{user.id}</p>
                <h3>{user.name}</h3>
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => updateUser(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellers;
