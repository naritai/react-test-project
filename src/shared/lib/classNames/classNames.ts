type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]) {
  const classes = [
    cls,
    ...additional,
    ...Object.entries(mods).filter(([, isActive]) => isActive).map(([clazz]) => clazz)
  ];

  return classes.join(' ');
}