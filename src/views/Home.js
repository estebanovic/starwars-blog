import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";
import { AppContext } from "../store/appContext";

function Home() {
    const { store, actions } = useContext(AppContext);
    const { people, planets, starships, species, vehicles } = store;

    return (
        <div className="container mb-5">
            <div className="row">
                <div>
                    <h1 className="mt-5">Characters</h1>
                    <HomeCards objects={people} view="people"/>
                    <Link to="/characters"><h3>More</h3></Link>
                    <br/>
                </div>
                <div>
                    <h1 className="mt-5">Planets</h1>
                    <HomeCards objects={planets} view="planets"/>
                    <Link to="/planets"><h3>More</h3></Link>
                    <br/>
                </div>
                <div>
                    <h1 className="mt-5">Starships</h1>
                    <HomeCards objects={starships} view="starships"/>
                    <Link to="/starships"><h3>More</h3></Link>
                    <br/>
                </div>
                <div>
                    <h1 className="mt-5">vehicles</h1>
                    <HomeCards objects={vehicles} view="vehicles"/>
                    <Link to="/starships"><h3>More</h3></Link>
                    <br/>
                </div>
                <div>
                    <h1 className="mt-5">Species</h1>
                    <HomeCards objects={species} view="species"/>
                    <Link to="/starships"><h3>More</h3></Link>
                    <br/>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Home;