import { Link } from 'react-router-dom';

const Car = ({ car, car: { id, model, price } }) => {
  return (
      <div>
        {id} -- {model} -- {price}
        <Link to={id.toString()} state={car}>
          <button>Info</button>
        </Link>
      </div>
  );
};

export { Car };
