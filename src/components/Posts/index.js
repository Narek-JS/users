
import { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { getPosts } from "../../services";
import { filteredData, replaceText } from "../../utils";
import classes from "./style.module.css";

const Posts = () => {
    const [ posts, setPosts ] = useState({data: [], loading: false});
    const [ value, setValue ] = useState('');
    const { id } = useParams();
    const params = useParams();
    const { search } = useLocation();
    const history = useHistory();

    useEffect(() => {
        setPosts({...posts, loading: true});
        getPosts(`/posts`).then(response => {
            const filteredPosts = response.data.filter(post => post.userId === +id);
            setPosts({data: filteredPosts, loading: false});
        });
    }, []);

    const filteredPosts = useMemo(() => {
        const index = search.indexOf('=') + 1;
        const changedValue = replaceText(search.slice(index), '+', ' ');
        setValue(changedValue);
        return filteredData(posts.data, value, 'posts');
    }, [value, posts]);

    const changeValue = (event) => {
        const value = replaceText(event.target.value, ' ', '+');
        
        history.replace({ search: `?value=${value}` });
        setValue(event.target.value);
    };

    return  posts.loading ?
                <h1>loading</h1> : 
                <div className={classes.posts}>
                    <input onChange={changeValue} value={value}/>
                    {  
                        filteredPosts.map(post => {
                            return (
                                <div className={classes.post} key={post.id}>
                                    <h2 className={classes.title}>{post.title}</h2>
                                    <h4 className={classes.body}>{post.body}</h4>
                                </div>
                            );
                        })
                    }
                </div>
};

export { Posts }; 