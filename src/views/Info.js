import { useContext } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Info() {
    const { store, actions } = useContext(AppContext);


    return (
        <>
        </>
    );
}

export default Info;