import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { carActions } from '../../redux';

export const CarDetail = ({ car, car: { id, model, price, year } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteById = async () => {
    await dispatch(carActions.deleteById({ id }));
    navigate('/cars');
  }

  return (
      <div>
        <p><b>id:</b>{id}</p>
        <p><b>model:</b>{model}</p>
        <p><b>price:</b>{price}</p>
        <p><b>year:</b>{year}</p>
        <button onClick={deleteById}>delete</button>
        <button onClick={() => dispatch(carActions.setCarForUpdate({ car }))}>update</button>
      </div>
  );
}
