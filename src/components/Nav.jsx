import {Link} from "react-router-dom"
import bierImg from "../assets/beer.png"

const Nav = () => {
    return ( 
        <nav>
            <Link to="/"><img src={bierImg} alt="" /></Link>
        </nav>
     );
}
 
export default Nav;