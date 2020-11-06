import { Analytics, Auth } from 'aws-amplify';

const ANALYTICS_ENABLED = process.env.REACT_APP_ANALYTICS_ENABLED;

export const isEnabled =
  !navigator?.doNotTrack && ANALYTICS_ENABLED?.toLowerCase?.() === 'true';

const mapObj = (f) => (obj) =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: f(obj[key]) }), {});
const toArrayOfStrings = (value) => [`${value}`];
const mapToArrayOfStrings = mapObj(toArrayOfStrings);
export function trackUsage() {
  if (isEnabled) {
    Analytics.autoTrack('session', {
      // REQUIRED, turn on/off the auto tracking
      enable: true,
    });

    Analytics.autoTrack('pageView', {
      enable: true,
      type: 'SPA',
      getUrl: () => {
        // the default function
        return window.location.origin + window.location.pathname;
      },
    });
  }
}

export async function trackUserId() {
  try {
    if (isEnabled) {
      const { attributes } = await Auth.currentAuthenticatedUser();
      const { identities, ...attributesRest } = attributes;
      const userAttributes = mapToArrayOfStrings(attributesRest);

      Analytics.updateEndpoint({
        address: attributes.email,
        channelType: 'EMAIL',
        optOut: 'NONE',
        userId: attributes.sub,
        userAttributes,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
