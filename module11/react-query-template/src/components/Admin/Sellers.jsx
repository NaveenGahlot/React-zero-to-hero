// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import apiClient from '../../utils/api-client';
import useUsers from '../../hooks/useUsers';
// import lodash from 'lodash';

const Sellers = () => {
  // const [users, setUsers] = useState([]);
  // const [name, setName] = useState('');
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const fetchUsers = () => apiClient.get('/users').then((res) => res.data);
  const { data: users, error, isLoading } =  useUsers(); 

  const addUser = () => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const newUser = {
      name: trimmedName,
      id: nextId,
    };

    setUsers([newUser, ...users]);
    apiClient
      .post('/users', newUser)
      .then((response) => {
        setUsers([response.data, ...users]);
      })
      .catch((apiError) => {
        console.error('Error adding user:', apiError);
        setError('Failed to add user. Please try again.');
        setUsers(users);
      });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    apiClient.delete(`/users/${id}`).catch((err) => {
      setError(err.message);
      setUsers(users);
    });
  };

  const updateUser = async (user) => {
    const updatedUser = {
      ...user,
      name: `${user.name} Update`,
    };

    try {
      setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
      await apiClient.patch(`/users/${user.id}`, updatedUser);
    } catch (err) {
      setError(err.message);
      setUsers(users);
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <h1>Sellers component</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={addUser}>Add User</button>
      {isLoading && <p>Loading...</p>}
      {error && <em>{error.message}</em>}
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