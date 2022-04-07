import { useState } from 'react';

import styles from './App.module.css';
import { Posts, UserInfo, Users } from './components';

export const App = () => {
  const [user, setUser] = useState(null);
  const [userIdForPosts, setUserIdForPosts] = useState(null);

  return (
      <div>
        <div className={styles.usersAndInfo}>
          <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
          {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
        </div>
        {userIdForPosts && <Posts userId={userIdForPosts}/>}
      </div>
  );
}
