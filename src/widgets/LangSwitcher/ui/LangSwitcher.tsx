import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
  className?: string
}

export function LangSwitcher ({ className }: LangSwitcherProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const onSwitchLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(console.error);
  };

  return (
    <Button
      type='button'
      className={classNames(cls.langswitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={onSwitchLanguage}
    >
      {t('lang')}
    </Button>
  );
}
