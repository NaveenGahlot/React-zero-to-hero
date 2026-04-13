import React, { useEffect, useState } from 'react' 
import apiClient from '../../utils/api-client';
import Loader from '../common/Loader';

const Sellers = () => {
  // const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  // useEffect(()=>{
  //   // document.title = `this is name is:- ${name}`;
  //   // const heading = document.querySelector("h1");
  //   // heading.style.color = "red";
  //   console.log("Sellers component mounted");
  //   return () => {
  //     console.log("Sellers component unmounted");
  //   }
  // }, [name])
  useEffect(()=>{
    fetchPost();
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=>response.json())
    // .then((data)=>console.log(data))
    // setLoading(true);
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    //   setPosts(response.data);
    //   setLoading(false);
    // }).catch((error)=>{
    //   // console.log("ajay", error);
    //   setError("Something went wrong!", error.message);
    //   // setLoading(false);
    // })
  }, [])

  const fetchPost = async () => {
    try{
      setLoading(true);
      const response = await apiClient.get("/users", newUser);
      setUsers(response.data);
      setLoading(false);
    }catch(error){
      setError("Something went wrong!", error.message);
      setLoading(false);
    }
  }
  const addUser =() =>{
    const newUser = {
      name: name, 
      id: users.length + 1,
    }
    console.log(newUser);
    setUsers([newUser, ...users]);
    apiClient.post("/users", newUser)
    .then((response)=>{
      setUsers([response.data, ...users]);
    })
    .catch((error)=>{
      console.error("Error adding user:", error);
      setError("Failed to add user. Please try again.", error.message);
      setUsers(users);
    });
  }
  const deleteUser = (id)=>{
    setUsers(users.filter((u)=> u.id !== id));
    apiClient.delete(`/users/${id}`).catch((err)=>{
      setError(err.message);
      setUsers(users);
  })
  }
  const UpdateUser = async (user) => {
    const updatedUser = {
      ...user,
      name: user.name + " Update"
    };
    try {
      setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
      await apiClient.patch(`/users/${user.id}`, updatedUser);
    } catch (err) {
      setError(err.message);
      setUsers(users);
    }
  }

  if(loading){
    return <Loader />
  }
  return (
    <>
    <div>
      <h1>Sellers componet</h1>
      <input type="text"  onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={addUser}>addUser</button>
      {loading && <Loader />}
      {error && <em>{error}</em>}
      <table>
        <tbody>
          {users.map((user)=>(
          <tr key={user.id}>
            <td>
              <p>{user.id}</p>
              <h3>{user.name}</h3>
            </td>
            <td>
              <button onClick={()=> {deleteUser(user.id)}}>Delete</button>
            </td>
            <td>
              <button onClick={()=> {UpdateUser(user)}}>
                Update
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Sellers
