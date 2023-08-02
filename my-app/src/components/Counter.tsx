import React, { useState } from 'react'

interface ISTATE {
    count: number
}

const Counter: React.FC = () => {
    const [state, setState] = useState<ISTATE>({ count: 0 })

    const Increment = () => {
        setState({ count: state.count + 1 })
    }

    const Decrement = () => {
        setState({ count: state.count - 1 })
    }

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={Increment}>Inc</button>
            <button onClick={Decrement}>Dec</button>
        </>
    )
}
export default Counter