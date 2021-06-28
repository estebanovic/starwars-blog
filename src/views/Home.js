import { useContext } from "react";
import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";
import { AppContext } from "../store/appContext";

function Home() {
    const { store, actions } = useContext(AppContext);
    const { people, planets, starships } = store;

    return (
        <div className="container mb-5">
            <div className="row">
                <div>
                    <h1 className="mt-5">Characters</h1>
                    <HomeCards objects={people} getData={actions.getPeople} setReadList={actions.setReadList} view={"planets"} />
                    <Link to="/characters"><h3>More</h3></Link>
                </div>
                <div>
                    <h1 className="mt-5">Planets</h1>
                    <HomeCards objects={planets} getData={actions.getPlanets} setReadList={actions.setReadList} view={"planets"} />
                    <Link to="/planets"><h3>More</h3></Link>
                </div>
                <div>
                    <h1 className="mt-5">Starships</h1>
                    <HomeCards objects={starships} getData={actions.getStarships} setReadList={actions.setReadList} view={"planets"} />
                    <Link to="/starships"><h3>More</h3></Link>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Home;