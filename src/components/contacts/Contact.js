import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContentInfo: false,
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: 'DELETE_CONTACT', payload: id
      })
    }
    catch (e) {
      dispatch({
        type: 'DELETE_CONTACT', payload: id
      })
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContentInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({ showContentInfo: !this.state.showContentInfo })
                  }
                  className="fa fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fa fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i className="fa fa-pencil" style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem'
                  }
                  }></i>
                </Link>
              </h4>
              {showContentInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.prototypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
