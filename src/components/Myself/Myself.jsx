import Wife from "../Wife/Wife";

const Myself = ({asset}) => {

    return (
        <div>
            <h2>Myself</h2>
            <section>
                <Wife asset={asset}></Wife>
            </section>
        </div>
    );
};

export default Myself;