import { NavLink } from "react-router-dom"
import styles from "./MenuLink.module.css";

const MenuLink = ({ to, children }) => {

    return (
        <>
            <NavLink 
              to={to}
              className={({ isActive }) => 
                `${styles.link} ${isActive 
                  ? styles.linkActive
                  : ""}`
              }  
              end
            >
              {children}
            </NavLink>
        </>
    )
}

export default MenuLink;