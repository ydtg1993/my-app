import React, { Suspense, lazy, useEffect } from 'react';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ImagePreloader from './pages/component/ImagePreloader';
import LoadingAnimation from "./pages/component/loading";

const Home = lazy(() => import('./pages/hall/home/'));
const Menu = lazy(() => import('./pages/hall/menu/'));
const Search = lazy(() => import('./pages/hall/search/'));
const IBook = lazy(() => import('./pages/hall/ibook/'));
const Me = lazy(() => import('./pages/hall/me/'));
const Comic = lazy(() => import('./pages/comic'));
const Chapter = lazy(() => import('./pages/chapter'));

const App = () => {
    useEffect(() => {

    }, []);

    return (
        <Provider store={store}>
            <GlobalStyle />
            <ImagePreloader />
            <BrowserRouter>
                <React.Fragment>
                    <Suspense fallback={LoadingAnimation}>
                        <Route exact path="/" component={Home} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/search" component={Search} />
                        <Route path="/ibook" component={IBook} />
                        <Route path="/me" component={Me} />
                        <Route exact path="/comic/:comic_id" component={Comic} />
                        <Route exact path="/comic/:comic_id/:chapter_id" component={Chapter} />
                    </Suspense>
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
