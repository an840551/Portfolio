import { Person, Mail } from "@material-ui/icons";
import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">UnstopDev.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+913444567893</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>anjali@nam12.gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
