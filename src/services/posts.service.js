import { axiosService } from './axios.service';
import { urls } from '../constants';

export const postsService = {
  getPostsByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}
