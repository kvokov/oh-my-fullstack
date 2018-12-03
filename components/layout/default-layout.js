import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const styles = {
  logo: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#001529',
    textAlign: 'center',
    color: '#fff',
  },
};

const DefaultLayout = ({ children }) => (
  <Layout>
    <Header>
      <div style={styles.logo}>Oh My Code</div>
    </Header>
    <Content>
      {children}
    </Content>
    <Footer style={styles.footer}>
      Oh My Code &copy;
      {new Date().getFullYear()}
    </Footer>
  </Layout>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
