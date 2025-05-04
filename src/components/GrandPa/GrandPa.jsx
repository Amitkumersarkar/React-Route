import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css';

// props drilling using context 
export const AssetContext = createContext('Gold');
 
const GrandPa = () => {
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>GrandPa</h2>
            <section className="flex">
                <AssetContext.Provider value="Gold">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty asset={asset}></Aunty>
                </AssetContext.Provider>
            </section>
        </div>
    );
};

export default GrandPa;