import React, { useState } from 'react';
// import Button from './Button';

const Counter = ({num}) => {
    // state
    const [count, setCount] = useState(0);
    // 버튼 눌렀을때 위에도 동작함(리렌더링)

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
                <button type='button' onClick={() => handleChange(num)}>+{num}</button>
                <button type='button' onClick={() => handleChange(-num)}>-{num}</button>
            </div>
        </div>
    );
};

export default Counter;