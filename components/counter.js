import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import { increment, decrement } from '../redux/actions/counter';

const styles = {
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
};

class Counter extends PureComponent {
  static propTypes = {
    counterValue: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render() {
    const { counterValue, increment: handleIncrement, decrement: handleDecrement } = this.props;

    return (
      <Card title="Counter">
        <div style={styles.buttons}>
          <Button.Group size="large">
            <Button type="default" onClick={handleIncrement}>
              <Icon type="plus" />
              Increment
            </Button>
            <Button type="default" onClick={handleDecrement}>
              <Icon type="minus" />
              Decrement
            </Button>
          </Button.Group>
        </div>
        <Input addonBefore="Current Value:" defaultValue="0" size="large" value={counterValue} disabled />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  counterValue: state.getIn(['counter', 'count']),
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
