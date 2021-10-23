import classes from './style.module.css';

const UserData = (props) => {
    const { user } = props
    return (
        <div className={classes.userData}>
            {user.email}
        </div>
    );
};

export { UserData };