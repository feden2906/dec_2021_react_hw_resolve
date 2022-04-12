import {useState} from "react";

import {CarForm, Cars} from "./components";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default App;
