import { Button } from '../Button/Button';

export const UserDetails = ({ user }) => {
  const { id, name, username, email, phone, website, address } = user;
  return (
      <div>
        <div>id: {id}</div>
        <div>name: {name}</div>
        <div>username: {username}</div>
        <div>email: {email}</div>
        <div>phone: {phone}</div>
        <div>website: {website}</div>
        <div>street: {address.street}</div>
        <div>suite: {address.suite}</div>
        <div>city: {address.city}</div>
        <div>zipcode: {address.zipcode}</div>
        <Button to={'posts'}>get posts</Button>
        <hr/>
      </div>
  );
}
