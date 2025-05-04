import useInputState from "../Hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Amit');
    const emailState = useInputState('amitsarkar@amrito');
    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input
                    value={name} onChange={handleNameChange}
                    type="text" name="name" placeholder="enter your name" id="" /> */}
                <br />
                <input {...emailState} type="text" name="email" placeholder="enter your email" />
                <br />
                <input type="text" name="password" placeholder="enter your password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;