import { NbMenuItem } from '@nebular/theme';
export const MENU_ITEMS: NbMenuItem[] = [
    { title: 'Все файлы', icon: 'folder-outline',     link: '/pages/files/allfiles', },
    { title: 'Документы', icon: 'file-outline',       link: '/pages/files/documents', },
    { title: 'Архивы',    icon: 'archive-outline',    link:  '/pages/files/archives', },
    { title: 'Фото',      icon: 'image-outline',      link: '/pages/dashboard', },
    { title: 'Видео',     icon: 'video-outline',      link: '/pages/dashboard', },
    { title: 'Аудио',     icon: 'headphones-outline', link: '/pages/dashboard', },
    { title: 'Недавние',  icon: 'clock-outline',      link: '/pages/dashboard', },
    { title: 'Важные',    icon: 'star-outline',       link: '/pages/dashboard', },
    { title: 'Удалённое', icon: 'trash-2-outline',    link: '/pages/dashboard', }];
