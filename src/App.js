import React from 'react';
import {GlobalStyle} from './style'
import { BrowserRouter, Route } from 'react-router-dom';
/*redux*/
import { Provider } from 'react-redux';
import store from './store';
/*router*/
import Home from './pages/home/';
import Menu from "./pages/menu/";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <BrowserRouter>
                    <React.Fragment>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/menu" component={Menu}/>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;