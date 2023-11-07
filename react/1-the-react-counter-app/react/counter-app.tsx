import React, { useState } from 'react';

export function App() {
    const [ctr, setCtr] = useState(0);

    const increment = () => {
        setCtr(ctr + 1);
    };

    const decrement = () => {
        setCtr(ctr - 1);
    };

    return (
        <div>
        <button data-testid="decrement-button" onClick={decrement}>-</button>
        <button data-testid="increment-button" onClick={increment}>+</button>
        <p>clicked: {ctr}</p>
        </div>
    )
}

// run your code by clicking the run button on the right