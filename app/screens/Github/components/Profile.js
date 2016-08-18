import React, {PropTypes} from 'react';
import Tooltip from 'react-tooltip';
import {getUserData} from '../util/github-api';
import ProfileStat from './ProfileStat';

export default React.createClass({
  propTypes: {
    user: PropTypes.string,
  },

  getDefaultProps() {
    return {
      user: null,
      getUserData,
    };
  },

  getInitialState() {
    return {
      user: {},
      orgs: [],
    };
  },

  getUser(props = this.props) {
    props.getUserData()
      .then(({user, orgs}) => {
        this.setState({user, orgs});
      });
  },

  componentWillMount() {
    this.getUser();
  },

  componentWillReceiveProps(props) {
    this.getUser(props);
  },

  render() {
    const user = this.state.user;
    return (
      <div id="profile-data">
        <section className="user border-bottom">
          <img src={user.avatar_url} className="img-rounded img-responsive" alt="User Avatar" />
          <h2>{user.name}</h2>
          <h5>{user.login}</h5>
        </section>
        <section className="stats border-bottom">
          <ProfileStat value={user.public_repos} label="repositories" />
        </section>
        <Tooltip effect="solid" />
      </div>
    );
  },
});
