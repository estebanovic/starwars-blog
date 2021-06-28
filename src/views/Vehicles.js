import { useContext, useEffect } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Vehicles() {
    const { store, actions } = useContext(AppContext);
    const { vehicles } = store;

    useEffect(() => {
        return () => actions.getVehicles(`https://www.swapi.tech/api/vehicles/?page=1&limit=9`);
    },[])

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">vehicles</h1>
                <Cards objects={vehicles} getData={actions.getVehicles} setReadList={actions.setReadList} view={"vehicles"}/>
                <br />
            </div>
        </div>
    );
}

export default Vehicles;