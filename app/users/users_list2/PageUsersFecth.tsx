'use client';

import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { User } from '../page';

const PageUsersFecth = () => {
  const fetchUsers = () =>
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(res => res.data);

  const { data: users_list = [], isLoading, error } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  return (
    <>
      <div>list2</div>
      {new Date().toLocaleTimeString()}
      {users_list.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default PageUsersFecth;