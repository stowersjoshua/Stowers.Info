import React, {PropTypes} from 'react';
import InfoListItem from './InfoListItem';

export default React.createClass({
  render() {
    return (
      <ul className="list-group info-list">
        <InfoListItem icon="male" value="Joshua Stowers" />
        <InfoListItem icon="briefcase" value="Software Engineer" />
        <InfoListItem icon="phone" value="(210) 846 - 3998" />
        <InfoListItem icon="envelope" value="Stowers.Joshua@gmail.com" />
      </ul>
    );
  },
});
