import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className='p-5 rounded-xl border-2 border-gray-300 m-5'>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
 