export const Counter = ({state, dispatch, counterNumber}) => {
  return (
      <div>
        <div> Count : {state['count' + counterNumber]}</div>

        <button onClick={() => dispatch({type: 'count' + counterNumber, payload: 1})}>Inc</button>
        <button onClick={() => dispatch({type: 'count' + counterNumber, payload: -1})}>Dec</button>
        <button onClick={() => dispatch({type: 'reset', payload: counterNumber})}>Reset</button>
      </div>
  );
};
