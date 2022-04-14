import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userService } from '../../services';
import { UserDetails } from '../../components/UserDetails/UserDetails';
import { Loading } from '../../components';

export const SinglUserPage = () => {
  const { state } = useLocation();
  const [user, setUser] = useState(state);
  const { userId } = useParams();

  useEffect(() => {
    if (!state) {
      userService.getById(userId).then(({ data }) => setUser(data))
    } else {
      setUser(state)
    }
  }, [userId, state])
  return (
      <div>
        <div>
          {
            user
                ? <UserDetails user={user}/>
                : <Loading/>
          }
        </div>
        <Outlet/>
      </div>
  );
}
