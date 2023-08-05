import React, { Suspense, lazy, useEffect } from 'react';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ImagePreloader from './pages/component/ImagePreloader';
import NoFound from "./pages/404";

const Home = lazy(() => import('./pages/hall/home/'));
const Menu = lazy(() => import('./pages/hall/menu/'));
const Search = lazy(() => import('./pages/hall/search/'));
const IBook = lazy(() => import('./pages/hall/ibook/'));
const Me = lazy(() => import('./pages/hall/me/'));
const Comic = lazy(() => import('./pages/comic'));
const Chapter = lazy(() => import('./pages/chapter'));

const App = () => {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') {
            const preventGestureStart = (e) => {
                e.preventDefault();
            };

            const preventContextMenu = (e) => {
                e.preventDefault();
            };

            const preventF12KeyPress = (e) => {
                if (e.keyCode === 123 || ((e.ctrlKey || e.metaKey) && e.key === 's')) {
                    e.preventDefault();
                }
            };

            document.addEventListener('gesturestart', preventGestureStart);
            document.addEventListener('contextmenu', preventContextMenu);
            document.addEventListener('keydown', preventF12KeyPress);

            return () => {
                document.removeEventListener('gesturestart', preventGestureStart);
                document.removeEventListener('contextmenu', preventContextMenu);
                document.removeEventListener('keydown', preventF12KeyPress);
            };
        }
    }, []);

    return (
        <Provider store={store}>
            <GlobalStyle />
            <ImagePreloader />
            <BrowserRouter>
                <React.Fragment>
                    <Suspense fallback={<div style={{display:'flex',justifyContent:'center'}}>...LOADING...</div>}>
                        <Route exact path="/" component={Home} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/search" component={Search} />
                        <Route path="/ibook" component={IBook} />
                        <Route path="/me" component={Me} />
                        <Route exact path="/comic/:comic_id" component={Comic} />
                        <Route exact path="/comic/:comic_id/:chapter_id" component={Chapter} />
                        <Route component={NoFound} />
                    </Suspense>
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
