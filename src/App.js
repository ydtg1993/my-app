import React, {Suspense, lazy, useEffect} from 'react';
import {GlobalStyle} from './style';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import ImagePreloader from './pages/component/ImagePreloader';
import NoFound from "./pages/Err";

const Home = lazy(() => import('./pages/hall/home/'));
const Menu = lazy(() => import('./pages/hall/menu/'));
const Search = lazy(() => import('./pages/hall/search/'));
const IBook = lazy(() => import('./pages/hall/ibook/'));
const Me = lazy(() => import('./pages/hall/me/'));
const Comic = lazy(() => import('./pages/comic'));
const Chapter = lazy(() => import('./pages/chapter'));

const App = () => {
    useEffect(() => {
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
    }, []);

    return (
        <Provider store={store}>
            <GlobalStyle/>
            <ImagePreloader/>
            <Router>
                <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center'}}>...LOADING...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/menu" component={Menu}/>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/ibook" component={IBook}/>
                        <Route exact path="/me" component={Me}/>
                        <Route exact path="/comic/:comic_id" component={Comic}/>
                        <Route exact path="/comic/:comic_id/:chapter_id" component={Chapter}/>
                        <Route path="*" render={(props) => <NoFound title="404 Not Found" message="The page you are looking for does not exist." />} />
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
};

export default App;
