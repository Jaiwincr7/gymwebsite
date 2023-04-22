import '../App.css';
import { Link,Outlet} from "react-router-dom"

function Header() {
    return (
        <div className="App">
        <ul>
        <li><Link to="/home" className='nav-link'>Home</Link></li>
        <li><Link to="/workout" className='nav-link'>Workout</Link></li>
        <li><Link to="/about" className='nav-link'>About</Link></li>
      </ul>
      <Outlet/>
      </div>
    );
}

export default Header;