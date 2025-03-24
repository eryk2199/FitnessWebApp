import { NavLink, Outlet } from "react-router";

export default function AppLayout() {
    return(
        <div className="app-layout">
            <div className="app-layout__content">
                <nav className="nav">
                    <h3 className="nav__logo">SimpleFitness</h3>
                    <ul className="link-list">
                        <li className="link-list__item">
                            <NavLink to="weigth">Weigth tracker</NavLink>
                        </li>
                        <li className="link-list__item"> 
                            <NavLink to="calories">Calorie tracker</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Outlet/>
                </div>
            </div>
            <footer className="footer">
                Copyrigth 2025
            </footer>
        </div>
    )
}