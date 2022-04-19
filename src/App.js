import { useReducer } from 'react';

import './App.css';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'counter1' :
      return { ...state, counter1: state.counter1 + payload }
    case 'counter2' :
      return { ...state, counter2: state.counter2 + payload }
    case 'counter3' :
      return { ...state, counter3: state.counter3 + payload }

    case 'reset1' :
      return { ...state, counter1: 0 }
    case 'reset2' :
      return { ...state, counter2: 0 }
    case 'reset3' :
      return { ...state, counter3: 0 }

    default :
      console.error('невідомий тип!');
      return state;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, { counter1: 0, counter2: 0, counter3: 0 });
  return (
      <div>
        <div>
          <div>Counter #1 : {state.counter1}</div>
          <button onClick={() => dispatch({ type: 'counter1', payload: 1 })}>inc</button>
          <button onClick={() => dispatch({ type: 'counter1', payload: -1 })}>dec</button>
          <button onClick={() => dispatch({ type: 'reset1' })}>reset</button>
        </div>

        <hr/>

        <div>
          <div>Counter #2 : {state.counter2}</div>
          <button onClick={() => dispatch({ type: 'counter2', payload: 1 })}>inc</button>
          <button onClick={() => dispatch({ type: 'counter2', payload: -1 })}>dec</button>
          <button onClick={() => dispatch({ type: 'reset2' })}>reset</button>
        </div>

        <hr/>

        <div>
          <div>Counter #3 : {state.counter3}</div>
          <button onClick={() => dispatch({ type: 'counter3', payload: 1 })}>inc</button>
          <button onClick={() => dispatch({ type: 'counter3', payload: -1 })}>dec</button>
          <button onClick={() => dispatch({ type: 'reset3' })}>reset</button>
        </div>
      </div>
  );
}
