import { axiosService } from './axios.service';
import { urls } from '../constants';

export const usersService = {
   getAll: () => axiosService.get(urls.users)
}
