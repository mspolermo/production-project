import { Route, Routes } from "react-router";
import '././styles/index.scss';
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
    const {theme, toogleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>TOOGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>    
        </div>
    )
}

export default App;