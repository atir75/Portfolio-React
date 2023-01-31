import { Briefcase, Envelope, Eye, House, User } from "phosphor-react";
import "../Header/styles.css";

export function Header() {
  return (
    <div>
      <header className="Header">
        <div className="HeaderIcon">
            <a href="#home" ><House size={32}/></a>
            <a href="#about"><User size={32} /></a>
            <a href="#view"><Eye size={32} /></a>
            <a href="#experience"><Briefcase size={32} /></a>
            <a href="#mail"><Envelope size={32} /></a>
        </div>
      </header>
    </div>
  );
}
