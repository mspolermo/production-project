import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserAuthData, getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const authData = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    if (!authData) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        {inited && <AppRouter />}
                    </div>
                </Suspense>
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('app_redesigned ', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
