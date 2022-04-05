import './App.css';
import { Comments, Posts, Users } from './components';

export const App = () => {
  return (
      <div>
        <div className={'users_posts'}>
          <Users/>
          <Posts/>
        </div>
        <Comments/>
      </div>
  );
}
