import { Link } from "react-router-dom";
import Logo from "../imgs/star-wars-logo.svg";
import { useContext } from "react";
import { AppContext } from "../store/appContext";

function NavBar() {
    const { store, actions } = useContext(AppContext);
    const { readList } = store;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container justify-content-center">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="" width="40" className="d-inline-block align-text-top"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">PLanets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships">Starships</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ReadList
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                { readList !== null && Array.isArray(readList)?
                                    readList.map((object, i) => 
                                        <li key={i}>{object.name}</li>
                                    ) : readList !== null ? <li>{readList.name}</li> :<li>vacio</li>
                                }
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;