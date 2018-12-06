import { GA_TRACKING_ID } from '../configs';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => window
  .gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action, category, label, value,
}) => window
  .gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });

export default {
  pageview,
  event,
};
