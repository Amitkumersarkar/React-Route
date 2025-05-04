
const ReuseableForm = ({ formTitle, handleSubmit, submitBtnText = 'Submit', children }) => {
    // const handleSubmit = e => {
    //     e.preventDefault();
    // }

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
            <h1>{formTitle}</h1>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="enter your name" />
                <br />
                <input type="text" name="email" placeholder="enter your email" />
                <br />
                <input type="text" name="password" placeholder="enter your password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;