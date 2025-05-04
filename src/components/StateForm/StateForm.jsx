import { useState } from "react";

const StateForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        // validation
        if (password.length < 6) {
            setError('password must be six character');
        }
        else {
            setError('');
        }
        console.log(email);
    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter your name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" placeholder="enter your email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" placeholder="enter your password" />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;