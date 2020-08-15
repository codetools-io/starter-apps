import { action } from 'easy-peasy';

const app = {
  notifications: [],
  addNotification: action((state, notification) => {
    state.notifications.push(notification);
  }),
  dismissNotification: action((state, notification) => {
    state.notifications.filter(
      (_notification) => _notification.id !== notification.id
    );
  }),
};

export default app;
