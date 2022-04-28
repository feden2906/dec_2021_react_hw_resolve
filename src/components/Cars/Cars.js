import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {useEffect} from "react";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars,status} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])

    return (
        <div>
            {status&&<h1>{status}</h1>}
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
