import React from 'react';
import InfoList from './components/InfoList';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  
  render() {
    return (
      <div id="contact-page">
        <div className="jumbotron">
          <div className="row">

            <div className="col-sm-4">
              <img id="profile-image" className="img-circle" src="/assets/images/profile-image.jpg" alt="Profile Image" />
            </div>

            <div className="col-sm-8">
              <InfoList />
            </div>

          </div>
        </div>
      </div>
    );
  },
});
