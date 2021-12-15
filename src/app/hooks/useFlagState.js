import {useState} from "react";

const useFlagState = (initialVal) => {
    const [state, setState] = useState(initialVal || false);
    const changeFlag = () => {
        setState(!state)
    }

    return [state, changeFlag]

}

export default useFlagState