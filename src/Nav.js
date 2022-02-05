import { useState } from "react/cjs/react.development";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import image3 from "./logo1.jpeg"
import { SlidebarData } from "./SlidbarData";
import Slidebar from "./Slidebar";

function Nav() {
    const [status, setState] = useState(true)
    return (<>
        <nav className="navBar">
            <div className="Nav_div">
                <div className="img_div">
                    <a href="/"><img src={image3} alt="" className="CompanyLogo" /></a>
                </div>
            </div>
            <div className="Nav_del" >
                <ul className="nav_ul">
                    <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="/about">
                        <span class="ml-2">Home</span></a>
                    </li>
                    <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="/services"><span className="ml-2">Services</span></a></li>
                    <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="/products"><span className="ml-2">Products</span></a></li>
                    <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="/portfolio"><span className="ml-2">Portfolio</span></a></li>
                    <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="/developers"><span className="ml-2">About us</span></a></li>
                    <a className="contact_btn" href="/contact-us">
                        <button className="button " type="button">Contact Us</button>
                    </a>
                </ul>
            </div>
            <div className="dropdown">
                <button className="dropbtn" onClick={() => setState(!status)}><i className="fas fa-bars"></i></button>
                <div id="myDropdown" className="dropdown-content" className={status? "slide ":"active"} >
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Services</a></li>
                        <li><a href="#about">Products</a></li>
                        <li><a href="#about">Portfolio</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact  Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="main_image">
            <Slidebar slide={SlidebarData} />
        </div>
    </>
    )
}
export default Nav;