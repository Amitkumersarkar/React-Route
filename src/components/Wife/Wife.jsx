import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Wife = ({ asset }) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Wife</h2>
            <p>Has : {asset}</p>
            <p>Also Has : {gift}</p>
        </div>
    );
};

export default Wife;