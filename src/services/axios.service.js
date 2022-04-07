import axios from 'axios';

import baseURL from '../constants/links';

export const axiosService = axios.create({ baseURL });
