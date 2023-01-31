import { Briefcase, Envelope, Eye, House, User } from "phosphor-react";
import "../Header/styles.css";

export function Header() {
  return (
    <div>
      <header className="Header">
        <div className="HeaderIcon">
            <a href="#home"><House size={32}/></a>
            <a><User size={32} /></a>
            <a><Eye size={32} /></a>
            <a><Briefcase size={32} /></a>
            <a><Envelope size={32} /></a>
        </div>
      </header>
    </div>
  );
}
