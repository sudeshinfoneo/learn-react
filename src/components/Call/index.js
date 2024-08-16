import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

const Call= (props) => {

    function MyComponent() {
        const [count, setCount] = useState(0);
        const [text, setText] = useState('');

    }

    return (
        <>
            <div className="text-center">
            <button type="button" style={{margin: 50, padding: 10}}>Click Me!</button>
            </div>
        </>
    )
}
export default Call;
