import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const{user} = useContext(UserContext)
if ( !user) return <div></div>
return <div> Welcome {user.username}</div>
   
}

export default Profile
