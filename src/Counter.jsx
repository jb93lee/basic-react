import React, { useState } from 'react';
// import Button from './Button';

const Counter = () => {
    // state
    const [count, setCount] = useState(0);

    // logic
    const handleChange = (amount) => {
        if (count >= 10 && amount > 0) {
            return;
        }
        if (count <= 0 && amount < 0) {
            return;
        }
        setCount(count + amount);
    };

    // view
    return (
        <div>
            <h1>{count}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                {/* <Button />
                <Button /> */}
                <button type='button' onClick={() => handleChange(1)}>+1</button>
                <button type='button' onClick={() => handleChange(-1)}>-1</button>
            </div>
        </div>
    );
};

export default Counter;