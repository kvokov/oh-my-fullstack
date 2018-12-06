import React from 'react';
import Layout from 'antd/lib/layout';

const { Footer } = Layout;

const styles = {
  footer: {
    backgroundColor: '#001529',
    textAlign: 'center',
    color: '#fff',
  },
};

const DefaultFooter = () => (
  <Footer style={styles.footer}>
    Oh My Code &copy;
    {new Date().getFullYear()}
  </Footer>
);

export default DefaultFooter;
