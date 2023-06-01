import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink } from "shared/lib/classNames/ui/AppLink";

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