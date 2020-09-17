import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Главная страница',
    icon: 'grid-outline',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'Пользователи',
    icon: 'person-outline',
    link: '/pages/users/default',
  },
  {
    title: 'Инфографика',
    icon: 'bar-chart-outline',
    group: true,
  },
  {
    title: 'Взаимодействие',
    icon: 'people-outline',
    group: true,
  },
  {
    title: 'Файлы',
    icon: 'folder-outline',
    link: '/pages/files',
  },
  {
    title: 'Активность',
    icon: 'activity-outline',
    group: true,
  },
  {
    title: 'USB носители',
    icon: 'hard-drive-outline',
    group: true,
  },
  {
    title: 'Приложения',
    icon: 'layers-outline',
    group: true,
  },
  {
    title: 'Утечки и угрозы',
    icon: 'shield-off-outline',
    group: true,
  },
  {
    title: 'Система и сеть',
    icon: 'globe-outline',
    group: true,
  },
  {
    title: 'Календарь',
    icon: 'calendar-outline',
    group: true,
  },
  // Нужно вниз последний блок с настройками
  // {
  //   title: ' ',
  //   icon: ' ',
  //   group: true,
  // },
  {
    title: 'Настройки',
    icon: 'settings-2-outline',
    group: true,
  },
];
