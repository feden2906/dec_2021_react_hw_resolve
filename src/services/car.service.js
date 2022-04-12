import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars), // get завжди витягуємо інформацію з сервера
    getById: (id) => axiosService.get(urls.cars + '/' + id),
    create: (car) => axiosService.post(urls.cars, car), // post ми записуємо інформацію на сервер
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`) //delete для видалення
}

export {
    carService
}
// CRUD
// Create
// Read
// Update
// Delete
