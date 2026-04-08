import React from 'react' 

const UserList = ({users, loading, error}) => {
  if(loading) return <div>Loading...</div>;
  if(error) return <div>Somthing went wrong...</div>;
  if(!users) return null;
  return (
    <div>
      {users.length && users.map((user)=>{
        return(
            <div key={user.id}>
              <p>{user.address}</p>
              <p><strong>{user.name}</strong></p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.username}</p>
              <p>{user.website}</p>
            </div>
          )
      })}
    </div>
  )
}

export default UserList
