import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button primary outline onClick={increment}>
        increment
      </Button>
    </div>
  );
}

export default CounterPage;
