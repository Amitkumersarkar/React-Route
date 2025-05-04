import Wife from "../Wife/Wife";

const Cousin = ({ name, asset }) => {

    return (
        <div>
            <h2>Cousin : </h2>
            <p>{name}</p>
            <section>
                <Wife asset={asset}></Wife>
            </section>
        </div>
    );
};

export default Cousin;