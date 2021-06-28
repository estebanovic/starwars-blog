import { useContext } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Vehicles() {
    const { store, actions } = useContext(AppContext);
    const { vehicles } = store;

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">vehicles</h1>
                <Cards objects={vehicles} getData={actions.getVehicles} setReadList={actions.setReadList} view={"vehicels"}/>
                <br />
            </div>
        </div>
    );
}

export default Vehicles;