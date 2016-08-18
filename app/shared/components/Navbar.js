import React from 'react';

export default React.createClass({

  render() {
    return (
      <nav>
        <ul className="nav nav-pills pull-right">
          <li role="presentation"><a href="/">About</a></li>
          <li role="presentation"><a href="/github">Github</a></li>
          <li role="presentation"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  },

});
