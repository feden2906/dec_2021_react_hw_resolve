import {Button} from "../Button/Button";
import {Link, useNavigate} from "react-router-dom";
import css from "../Button/Button.module.css";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, title} = post;
    return (
        <div>
            {/*{id} -- {title} <Button to={`${id}`} state={post}>get Details</Button>*/}
            {/*{id} -- {title} <button onClick={()=>navigate(id.toString(), {replace:true})}>go to users</button>*/}
            <Link to={id.toString()} state={post} >
                <button className={css.button}>{children}</button>
            </Link>
        </div>
    );
};

export {Post};
