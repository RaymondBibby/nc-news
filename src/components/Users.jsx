import { UserContext } from "../contexts/User"
import { useContext, useState, useEffect  } from "react"
import { fetchUsers } from "../API/api"
import UserCard from "./UserCard"

const Users = () => {

    const {user, setUser} = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchUsers()
        .then(({users})=> {
            setUsers(users)
            setIsLoading(false)
        })
    })

    const handleSelectUser = (username) => {
        if(username === user) alert("User already Logged in")
        setUser(username)
    }

    if (isLoading === true) {
        return <>.......Users Loading</>
    } else {

        return (
            <div className="UserCard">
            <h1>Users:</h1>
            {users.map((user)=> {
                return (
                    <>
                    <UserCard user={user} key={user.username}/>
                    <button 
                    key={`button.${user.username}`}
                    name={user.username}
                    onClick={()=> {
                        handleSelectUser(user.username)
                    }}
                    >
                        select user
                    </button>
                    </>
                )
            })}
            </div>
        )
    }
}

export default Users