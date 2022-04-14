import { Button } from '../Button/Button';

export const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id}, {name} <Button state={user} to={id.toString()}>show info</Button>
        </div>
    );
}
