import React, { useState } from 'react';

interface ISTATE {
    message: String;
}

const Youtube: React.FC = () => {
    const [state, setState] = useState<ISTATE>({ message: "youtube" })

    const changeText = (greet: string) => {
        setState({ message: greet })
    }

    return (<>
        <h1>{state.message}</h1>
        <button onClick={() => changeText("Like")}>Like</button>
        <button onClick={() => changeText("Share")}>Share</button>
        <button onClick={() => changeText("Comment")}>Comment</button>
    </>);
}
export default Youtube;