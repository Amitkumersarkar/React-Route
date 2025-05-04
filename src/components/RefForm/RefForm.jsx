import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // cursor handling
    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        // password validation

        console.log(nameRef.current.value);
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="enter your name" id="" />
                <br />
                <input ref={emailRef} defaultValue={'amitsarkaramrito@email.com'} type="text" name="email" placeholder="enter your email" />
                <br />
                <input ref={passwordRef} type="text" name="password" placeholder="enter your password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;