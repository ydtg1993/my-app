import React from 'react';
import { GlobalStyle } from './style'
import { BrowserRouter, Route } from 'react-router-dom';
/*redux*/
import { Provider } from 'react-redux';
import store from './store';
/*router*/
import Home from './pages/hall/home/';
import Menu from "./pages/hall/menu/";
import Search from "./pages/hall/search/";
import IBook from "./pages/hall/ibook/";
import Me from "./pages/hall/me/";
import Comic from "./pages/comic";
import Chapter from "./pages/chapter";
import ImagePreloader from "./pages/component/ImagePreloader";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <ImagePreloader />
                <BrowserRouter>
                    <React.Fragment>
                        <Route exact path="/" component={Home}/>
                        <Route path="/menu" component={Menu}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/ibook" component={IBook}/>
                        <Route path="/me" component={Me}/>
                        <Route exact path="/comic/:comic_id" component={Comic}/>
                        <Route exact path="/comic/:comic_id/:chapter_id" component={Chapter}/>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;