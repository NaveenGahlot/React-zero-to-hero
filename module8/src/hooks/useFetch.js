import React, { useEffect, useState } from 'react' 

const useFetch = () => {
  const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = async() =>{
        try{
            setIsLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users') 
        const json = await res.json();
        console.log(json)
        if(!json.data) return;
        setUsers(json.data)
        setIsLoading(false)
        }catch(err){
            console.log(err)
            setError(err)
        }
    }
    useEffect(()=>{
        getUsers()
    }, []);
    return {users, isLoading, error};
}

export default useFetch
