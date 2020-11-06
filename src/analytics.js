import { Analytics } from 'aws-amplify';

const ANALYTICS_ENABLED = process.env.REACT_APP_ANALYTICS_ENABLED;
const isEnabled = ANALYTICS_ENABLED?.toLowerCase?.() === 'true';
export function trackUsage() {
  if (!navigator?.doNotTrack && isEnabled) {
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
