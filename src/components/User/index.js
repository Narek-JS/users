import { Link } from "react-router-dom";
import classes from './style.module.css';

const User = (props) => {
    const { user, path } = props;
    return ( 
        <div className={classes.user}>
            <img className={classes.userImg} src={user.img} />
            <h2 className={classes.name}>{user.name}</h2>
            <h2 className={classes.username}>{user.username}</h2>
            <Link to={path}>
                <button className={classes.button}>see user</button>
            </Link>
        </div>
    );
};

export { User }; 
