import {useState} from "react";

const useFlagState = (initialVal) => {
    const [state, setState] = useState(initialVal || false);
    const changeFlag = (value) => {
        setState(value)
    }

    return [state, changeFlag]

}

export default useFlagState