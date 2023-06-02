import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

export function NotFoundPage ({ className }: NotFoundPageProps): JSX.Element {
  return (
    <div className={classNames(cls.notfoundpage, {}, [className])}>
      {'Page not found :('}
    </div>
  );
}
