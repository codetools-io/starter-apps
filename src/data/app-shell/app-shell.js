import * as users from '../users';
import accounting from 'accounting';
import moment from 'moment';
import { Cart, ChatOption, Notification } from 'grommet-icons';
export * from './nav';
export * from './site';
export * from './theme';

const currentDate = new Date();

const { PUBLIC_URL } = process.env;

export const user = users?.user1;

export const notifications = [
  {
    id: 'notification-1',
    categoryId: 'task',
    title: 'Groceries',
    description: 'pick up some milk',
    link: '',
  },
  {
    id: 'notification-2',
    categoryId: 'chat',
    title: `${users?.user4?.firstName} ${users?.user4?.lastName}`,
    description: 'Hey! How are you?',
    image: users?.user4?.profile,
    metadata: moment(1598102365284).fromNow(),
    link: '',
  },
  {
    id: 'notification-3',
    categoryId: 'chart',
    title: 'Coffee (3)',
    description: `${accounting.formatMoney(10.99 * 3)}`,
    image: `${PUBLIC_URL}/placeholder/img/food/coffee-1200xauto.jpg`,
    link: '',
  },
];

export const categories = [
  { id: 'task', name: 'Task', icon: Notification },
  { id: 'chat', name: 'Chat', icon: ChatOption },
  { id: 'chart', name: 'Cart', icon: Cart },
];

export const site = {
  name: 'Placeholder Company',
  copyrightYear: currentDate.getFullYear(),
  logo: `${PUBLIC_URL}/placeholder/img/logos/logo-white.png`,
  logoSmall: `${PUBLIC_URL}/placeholder/img/logos/picmark-white.png`,
};
