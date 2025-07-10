// app/users/[id]/page.tsx
import React from 'react';

interface UserDetailsPageProps {
  params: Promise<{id:number}>
}

const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {
  const {id}= await params
  const id_valid = Number(id);

  const isValidId = Number.isInteger(id_valid);
  if (!isValidId) {
    throw new Error(`Invalid ID: ${id}`);
  }

  return <div>UserDetailsPage ID: {id}</div>;
};

// const InvalidUserIdPage = ({id}:{id:number}) => (
//   <div>
//     Invalid user ID: <strong>{id}</strong>. It must be a valid integer.
//   </div>
// );

 export default UserDetailsPage;
