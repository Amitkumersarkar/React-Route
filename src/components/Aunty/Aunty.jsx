import Cousin from "../Cousin/Cousin";

const Aunty = ({ asset }) => {

    return (
        <div>
            <h2>Aunty : </h2>
            <section className="flex">
                <Cousin name={'Arjon'} asset={asset}></Cousin>
                <Cousin name={'Niloy'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;