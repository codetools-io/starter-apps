import { Analytics } from 'aws-amplify';
export function trackUsage() {
  if (!navigator?.doNotTrack) {
    Analytics.autoTrack('session', {
      // REQUIRED, turn on/off the auto tracking
      enable: true,
    });

    Analytics.autoTrack('pageView', {
      enable: true,
      type: 'SPA',
    });
  }
}
