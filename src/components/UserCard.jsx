const UserCard = ({user}) => {
    const {username, name, avatar_url} = user

    return (
        <>
        <h3>Name: {name}</h3>
        <div>Username: {username}</div>
        <img src={avatar_url} alt="user avatar"/>
        </>
    )
}

export default UserCard

