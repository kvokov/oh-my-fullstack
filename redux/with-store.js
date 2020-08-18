import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isImmutable, fromJS } from 'immutable';
import initializeStore from './initialize-store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  const immutableInitialState = isImmutable(initialState) ? initialState : fromJS(initialState);

  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(immutableInitialState);
  }

  // Create store if unavailable on the client and set it on the window object
  /* eslint-disable no-undef */
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(immutableInitialState);
  }
  return window[__NEXT_REDUX_STORE__];
  /* eslint-enable no-undef */
}

const withStore = (WrappedComponent) => {
  class WithRedux extends Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore; // eslint-disable-line no-param-reassign

      let appProps = {};
      if (typeof WrappedComponent.getInitialProps === 'function') {
        appProps = await WrappedComponent.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return (
        <WrappedComponent {...this.props} reduxStore={this.reduxStore} />
      );
    }
  }

  WithRedux.propTypes = {
    initialReduxState: PropTypes.shape().isRequired,
  };

  return WithRedux;
};

export default withStore;
