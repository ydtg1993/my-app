import React from 'react';
import {GlobalStyle} from './style'
import { BrowserRouter, Route } from 'react-router-dom';
/*redux*/
import { Provider } from 'react-redux';
import store from './store';
/*router*/
import Home from './pages/home/';
import Menu from "./pages/menu/";
import Search from "./pages/search/";
import IBook from "./pages/ibook/";
import Me from "./pages/me/";
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <BrowserRouter>
                    <React.Fragment>
                        <Route exact path="/" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/ibook" component={IBook}/>
                        <Route path="/me" component={Me}/>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;