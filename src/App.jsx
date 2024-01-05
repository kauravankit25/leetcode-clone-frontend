//import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Problems from './components/Problems'
import ProblemSubmission from './components/ProblemSubmission'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/signup" Component={SignUp}/>
        <Route path="/problems" Component={Problems}/>
        <Route path="/problemSubmission/:id" Component={ProblemSubmission}/>
        </Routes>
    </Router>
  )
}

export default App
