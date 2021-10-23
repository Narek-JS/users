import { User } from "..";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getUser } from '../../services';
import { addUsersImg } from "../../utils"; 
import { UserData } from "..";

const UserWrapper = () => {
    const [ user, setUser ] = useState({data: {}, loading: false});
    const { id } = useParams();
    
    useEffect(() => {
        setUser({...user, loading: true});
        getUser(`/users/${id}`).then(response => {
            const users = addUsersImg(response.data, +id - 1);
            setUser({data: users, loading: false});
        });
    }, []);
    
    return  user.loading ? 
                <h1>loading</h1> :
                <div>
                    <User user={user.data} path={`/posts/${id}`}/>   
                    <UserData user={user.data}/>                 
                </div>
};

export { UserWrapper }; 