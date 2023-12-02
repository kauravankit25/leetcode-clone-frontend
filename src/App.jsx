//import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/signup" Component={SignUp}/>
        </Routes>
    </Router>
  )
}

export default App
