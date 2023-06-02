import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import './styles/index.scss';

export function App (): JSX.Element {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() * 1 > 0.5) {
      throw new Error('Hello!');
    }
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main className="main-content">
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}
