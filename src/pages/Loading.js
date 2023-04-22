import '../App.css';
import {Link, Outlet} from "react-router-dom"

function Loading() {
    return (
        <div class="lds-ripple"><div></div><div></div></div>
    );
}

export default Loading;