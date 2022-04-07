export const User = ({ user, setUser, setUserIdForPosts }) => {

  const click = () => {
    setUserIdForPosts(false);
    setUser(user);
  }

  return (
      <div>
        {user.name}
        <input type="button" value="show info" onClick={click}/>
      </div>
  );
}
