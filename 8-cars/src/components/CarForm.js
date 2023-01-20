import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  const dispatch = useDispatch();
  const costRef = useRef();
  const nameRef = useRef();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    //
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    //
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !cost) return;
    dispatch(addCar({ name, cost }));
    nameRef.current.blur();
    costRef.current.blur();
    // dispatch(changeName(''));
    // dispatch(changeCost(0));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input is-expanded"
              id="name"
              value={name}
              onChange={handleNameChange}
              ref={nameRef}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="cost">
              Cost
            </label>
            <input
              className="input is-expanded"
              id="cost"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
              ref={costRef}
            />
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
