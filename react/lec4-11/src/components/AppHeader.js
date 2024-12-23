import { useState } from "react";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";
// using <a href='/about'></a> for routing rerenders the entire page
// to avoid this, react-router provides Link to efficiently route to
// other pages by clicking on html elements without using <a href></a>
// which avoids unnecessary rerendering.
// <a href="/about">About Us</a> becomes <Link to="/about">About Us</Link>
/**
 * Hence React Apps are Single Page Applications
 * As the new page never really loads on top of an existing page
 * but instead the components common to both pages stay as it is
 * and only the new components are rendered and obsolete onse are
 * deleted all while staying in the same page.
 *
 * This is client side routing as once the app is loaded into
 * the browser then all the components are downloaded and only
 * api calls need network but in case of server side routing,
 * every time we route to a new page the server sends us a new
 * component or a new html file so we need network connectivity
 * while using the app even if we arent making api calls.
 */

const AppHeader = () => {
    const [loginButtonText, setLoginButtonText] = useState("Login")
    const networkStatus = useNetworkStatus();
    return (
        <header id="appHeader" className="flex justify-between items-center px-[20px] py-0">
            <div id="logo" className="font-['Jua',_sans-serif] font-normal not-italic text-[75px]">🥣 Spoonful</div>
            <nav id="navContainer" className="font-['Inter',_sans-serif] font-semibold not-italic flex items-center">
                <ul id="navItems" className="flex items-center">
                    <li className="p-[15px] m-[15px] text-[25px] list-none"><Link to="/">Home</Link></li>
                    <li className="p-[15px] m-[15px] text-[25px] list-none"><Link to="/about">About Us</Link></li>
                    <li className="p-[15px] m-[15px] text-[25px] list-none"><Link to="contact">Contact Us</Link></li>
                    <li className="p-[15px] m-[15px] text-[25px] list-none">Cart</li>
                </ul>
                <button id="loginButton" className="font-['Inter',_sans-serif] font-semibold not-italic h-[30px] m-[25px] text-[25px] cursor-pointer border-[none] [background-color:inherit]"
                    onClick={() => setLoginButtonText(loginButtonText == 'Login' ? 'Log Out' : 'Login')}>
                    {loginButtonText}
                </button>
                <div id="networkStatus">{networkStatus ? "🟢" : "🔴"}</div>
            </nav>
        </header>
    )
};
export default AppHeader;