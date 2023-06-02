import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export function PageError({ className }: PageErrorProps): JSX.Element {
  return (
    <div className={classNames(cls.pageerror, {}, [className])}>
      Something wen wrong...
    </div>
  );
}
