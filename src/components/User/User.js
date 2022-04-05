import './User.css';

export const User = ({ user }) => {
  return (
      <div className={user.id % 2 ? 'red' : 'green'}>
        <span>{user.username}</span>
        <span>{user.email}</span>
        <span>{user.name}</span>
        <hr/>
      </div>
  );
}
