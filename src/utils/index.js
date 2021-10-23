import { images } from "../consts";

const filteredData = (data, value, type) => {
    switch(type){
        case 'users':
            return data
                .filter(user => user.name.includes(value) ||
                    user.username.includes(value));
        case 'posts':
            return data
                .filter(post => post.title.includes(value) ||
                    post.body.includes(value));
    };  
};

function replaceText(text, oldText, newText){
    let value = text;
    for(let i = 0; i < text.split(oldText).length - 1; i++){
        value = value.replace(oldText, newText);
    };
    return value;
};

const addUsersImg = (users, index=null) => {
    if(index===null){
        return users.map((user, index) => {
            return {
                ...user,
                img: images[index]
            };
        });
    }else{
        return {
            ...users,
            img:images[index]
        };
    };
};


export { filteredData, replaceText, addUsersImg };