import Cousin from "../Cousin/Cousin";

const Uncle = () => {

    return (
        <div>
            <h2>Uncle : </h2>
            <section className="flex">
                <Cousin name={'Puja'}></Cousin>
                <Cousin name={'Payel'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;