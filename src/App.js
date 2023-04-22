import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Workout from '../src/pages/Workout';
import Header from './pages/Header';
import Home_workout from './pages/Home_workout';
import Gym_wokrout from './pages/Gym_workout'
function App() {
    return (
      <div className='App'>
      <Routes>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="workout" element={<Workout />}/>
            <Route path="hworkout" element={<Home_workout />} />
            <Route path="gworkout" element={<Gym_wokrout/>} />
            <Route path="about" element={<About/>}/>
          </Route>
      </Routes>
    </div>
    );
}

export default App;
