import {MenuItem} from '../interfaces/interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'disc-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Infinite Scroll Navigation',
    icon: 'arrow-down-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Modal',
    icon: 'albums-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-circle-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Slides Screen',
    icon: 'phone-portrait-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Switches',
    icon: 'toggle',
    component: 'SwitchScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Theme App Setting',
    icon: 'contrast-outline',
    component: 'ThemeAppScreen',
  },
];
