
const SimpleForm = () => {
    // declare an event handler
    const handleSubmit = e => {
        //to stop loading
        e.preventDefault();
        console.log(e.target.name.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="enter your email" />
                <br />
                <input type="text" name="password" placeholder="enter your password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;