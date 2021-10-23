import { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { User } from "..";
import { getUsers } from "../../services";
import { filteredData, replaceText, addUsersImg } from "../../utils"; 


const UsersWrapper = () => {
    const [ users, setUsers ] = useState({data: [], loading: false });
    const [ value, setValue ] = useState('');
    const { search } = useLocation();
    const history = useHistory();

    useEffect(() => {
        setUsers({...users, loading: true});
        getUsers('/users').then((response) => {
            const users = addUsersImg(response.data);
            setUsers({data: users, loading:false});
        });
    }, []);
 
    const filteredUsers = useMemo(() => {  
        const index = search.indexOf('=') + 1;
        const changedValue = replaceText(search.slice(index), '+', ' ');
        setValue(changedValue);
        return filteredData(users.data, value, 'users');
    }, [users, value]);
    
    const changeValue = (event) => {
        const value = replaceText(event.target.value, ' ', "+");
        history.replace({ search: `?value=${value}` });
        setValue(event.target.value);
    };
    
    return users.loading ? 
                <h1>loading</h1> :
                    <>
                        <input onChange={changeValue} value={value}/>
                        <div className='users'>
                            {filteredUsers.map(user => <User user={user} path={`user/${user.id}`} key={user.id}/>)}
                        </div> 
                    </>
};

export { UsersWrapper }; 