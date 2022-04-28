import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { carActions } from "../../redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CarForm = () => {
  const { formErrors, carForUpdate } = useSelector(state => state.cars);
  const { reset, register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (carForUpdate) {
      const { model, price, year } = carForUpdate;
      setValue('model', model);
      setValue('price', price);
      setValue('year', year);
    }
  }, [carForUpdate]);

  const submit = async (newCar) => {
    if (carForUpdate) {
      await dispatch(carActions.updateById({ id: carForUpdate.id, car: newCar }));
    } else {
      await dispatch(carActions.createAsync({ car: newCar }));
    }
    navigate('/cars');
    reset();
  }

  return (
      <form onSubmit={handleSubmit(submit)}>
        <div><label>model: <input type="text" {...register('model')}/></label></div>
        {formErrors.model && <span>{formErrors.model[0]}</span>}
        <div><label>price: <input type="text" {...register('price')}/></label></div>
        {formErrors.price && <span>{formErrors.price[0]}</span>}
        <div><label>year: <input type="text" {...register('year')}/></label></div>
        {formErrors.year && <span>{formErrors.year[0]}</span>}
        <button>Save</button>
      </form>
  );
};

export { CarForm };
