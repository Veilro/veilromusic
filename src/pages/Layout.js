import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
// import keyboard from "../help.jpg"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import email from "../assets/email.png"
// import silverlining from "../assets/silver.png"

const Layout = () => {
  return (
      <>
      <div className="flexbox-container">
      {/* <img className="cardimg" src={silverlining}/> */}

      <nav>
      <ul className="navbar">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/completed">My Music</Link>
          </li>
          <li>
            <Link to="/unfinished">Unfinished and Upcoming</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact/Socials</Link>
          </li> */}
        </ul>
      </nav>
      </div>
      {/* <img className="cardimg" src={twitter} alt="ok"/> */}


      <div className="centre">
      <Outlet />
      </div>

      <div className="centre">

      <ul className="wrapper">
  <li className="icon twitter">
  <a href = "https://twitter.com/veilro2">
    <img className="wrapper icon" alt="twitter" src={twitter}/>
    </a>
  </li>
  <li className="icon instagram">
  <a href = "https://instagram.com/veilro?igshid=YmMyMTA2M2Y=">
  <img className="wrapper icon" alt="instagram" src={instagram}/>
  </a>
  </li>
  <li className="icon youtube">
  <a href = "mailto: veilromusic@gmail.com">
  <img className="wrapper icon" alt="email" src={email}/>
  </a>
  </li>
</ul>
</div>

    </>
  )
};

export default Layout;
