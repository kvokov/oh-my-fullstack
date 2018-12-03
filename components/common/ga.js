import React, { Fragment } from 'react';
import { GA_TRACKING_ID } from '../../configs';

const GA = () => (
  <Fragment>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <script
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: `window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', '${GA_TRACKING_ID}');`,
      }}
    />
  </Fragment>
);

export default GA;
