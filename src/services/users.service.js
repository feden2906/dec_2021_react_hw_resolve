import { constants } from '../constsnts';

export const usersService = {
  getAllUsers: () => fetch(constants.apiUrl + 'users').then(value => value.json())
}
