import { useState, useEffect } from 'react';

function useCounter(initialCount){
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
      console.log(count);
    }, [count]);

    const increment = ()=>{
      setCount(count + 1)
    }

    const decrement = ()=>{
      setCount(count - 1);
    }
    return {
        count: count,
        increment: increment,
        decrement: decrement,
    }
}

export default useCounter;