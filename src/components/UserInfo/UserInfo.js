export const UserInfo = ({ user, setUserIdForPosts }) => {


  return (
      <div>
        <div>id: {user.id}</div>
        <div>name: {user.name}</div>
        <div>username: {user.username}</div>
        <div>email: {user.email}</div>
        <div>phone: {user.phone}</div>
        <div>website: {user.website}</div>
        <input type="button" value="show posts" onClick={() => setUserIdForPosts(user.id)}/>
      </div>
  );
}
