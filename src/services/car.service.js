import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
}

export {
    carService
}
