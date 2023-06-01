import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <ul className={cls.links}>
        <li className={cls.linkItem}>
          <AppLink to="/">Main</AppLink>
        </li>
        <li className={cls.linkItem}>
         <AppLink to="/about">About</AppLink>
        </li>
      </ul>
    </nav>
  )
}