 
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  return (
    <UserContextProvider>
    <h1>React</h1>
    <Login/>
    <Profile/>
       
    </UserContextProvider>
  )
}

export default App
