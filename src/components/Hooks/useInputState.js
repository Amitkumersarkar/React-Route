import { useState } from "react"
// customHook

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    const onChange = e => {
        setValue(e.target.value);
    }
    // return [value, handleChange];

    return {
        value,
        onChange
    }
}
export default useInputState;