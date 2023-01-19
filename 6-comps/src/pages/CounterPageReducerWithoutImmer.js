import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUE_TO_COUNT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      // throw new Error('unexpected action type: ' + action.type);
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
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
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count: {state.count}</h1>
      <div className="flex flex-row p-3">
        <Button danger outline onClick={decrement}>
          decrement
        </Button>
        <Button primary outline onClick={increment}>
          increment
        </Button>
      </div>

      <form onSubmit={submitHandler}>
        <label>Add a lot</label>
        <input
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-100 border-gray-300"
        />
        <Button primary outline>
          Add it
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
