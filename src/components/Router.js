import { BrowserRouter, Switch, Route } from "react-router-dom"
import { UserWrapper, UsersWrapper, Posts } from ".";

const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={UsersWrapper}/>
                <Route path='/user/:id' exact component={UserWrapper}/>
                <Route path='/posts/:id' exact component={Posts}/>
            </Switch>
        </BrowserRouter>
    );
};

export { Routers };