import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/lib/layout';
import DefaultHeader from './default-header';
import DefaultFooter from './default-footer';

const { Content } = Layout;

const DefaultLayout = ({ children }) => (
  <Layout>
    <DefaultHeader />
    <Content>
      {children}
    </Content>
    <DefaultFooter />
  </Layout>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
