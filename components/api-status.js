import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { getData } from '../redux/actions';

const styles = {
  wrapper: {
    padding: 10,
  },
};

class ApiStatus extends PureComponent {
  static propTypes = {
    api: PropTypes.instanceOf(Map).isRequired,
    getData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getData(); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    const { api } = this.props;

    return (
      <div style={styles.wrapper}>
        <h3>Data from API</h3>
        {api.get('isLoading') && (<p>Loading...</p>)}
        {api.get('data') && (
          <div>
            <p>
              Name:&nbsp;
              {api.getIn(['data', 'name'])}
            </p>
            <p>
              Description:&nbsp;
              {api.getIn(['data', 'description'])}
            </p>
            <p>
              Version:&nbsp;
              {api.getIn(['data', 'version'])}
            </p>
          </div>
        )}
        {api.get('error') && (<p>{api.get('error')}</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  api: state.get('api'),
});

export default connect(mapStateToProps, { getData })(ApiStatus);
