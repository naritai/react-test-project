import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps { 
   className?: string; 
 }

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const onSwitchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      className={classNames(cls.langswitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={onSwitchLanguage}
    >
      {t('lang')}
    </Button>
  )
}