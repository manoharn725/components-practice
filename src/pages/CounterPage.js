// import { useState } from 'react';
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const SUBMIT_VALUE_UPDATE = "submit-value-update";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case SUBMIT_VALUE_UPDATE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }

  // if(action.type === INCREMENT_COUNT){
  //   return {
  //     ...state,
  //     count: state.count + 1 ,
  //   }
  // }
  // if(action.type === DECREMENT_COUNT){
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   }
  // }
  // if(action.type === CHANGE_VALUE_TO_ADD){
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   }
  // }
  // if(action.type === SUBMIT_VALUE_UPDATE){
  //   return {
  //     ...state,
  //     count: state.count + state.valueToAdd,
  //     valueToAdd: 0,
  //   }
  // }
  // return state
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [ valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);
  // console.log('hello');

  const increment = () => {
    // setCount(count + 1)
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    console.log(typeof value, value);
    // setValueToAdd(value);
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: SUBMIT_VALUE_UPDATE,
    });
  };

  return (
    <Panel className="m-3">
      <h1>Count is {state.count}</h1>
      <div className="flex">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button secondary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button success>Add It!</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
