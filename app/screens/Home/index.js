import React from 'react';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <div id="about-page">

        <div className="jumbotron">
          <h1>Joshua Stowers Ben</h1>
          <p className="lead">Full stack Rails enthusiast with nearly 4 years of development experience seeking out a new team with new challenges</p>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="well">
              <h4>Resume</h4>
              <p>I don't like resumes. They can't truly demonstrate your proficiencies and potential. In this industry, experience doesn't mean much - which is nice - it's given me a chance to catch up with the blokes that have been at this longer.</p>
              <a className="pull-right" target="_blank" href="/assets/documents/Joshua Stowers Resume.pdf">Open</a>
              <div className="clearfix" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="well">
              <h4>StrengthsFinder</h4>
              <p>The Clifton StrengthsFinder assessment is widely used by Silicon Valley giants such as <a target="_blank" href="http://blog.rackspace.com/whats-in-the-rackspace-secret-sauce/">Rackspace</a> and <a target="_blank" href="http://www.forbes.com/sites/ashoka/2014/04/15/how-to-hire-like-google-and-facebook-evaluating-candidates-beyond-their-technical-ability/#1db7f24b4f15">Facebook</a> to identify the strengths of their employees. Skim through my assessment to learn a bit more about me.</p>
              <a className="pull-right" target="_blank" href="/assets/documents/StrengthsFinder.pdf">Open</a>
              <div className="clearfix" />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="well">
              <h4>About Me</h4>
              <p>The satisfaction felt when users interact with my work and come away with a pleasant experience, or when support requests disappear as my efforts streamline a product is a leading motivator for me in my work. Too many developers allow themselves to become zombies, drudging on day to day on a task which they have no interest in. This attitude always reflects in the final product. <strong>I am not a zombie.</strong> My accomplishments are my trophies, and I take pride in my enthusiasm and energy with my work.</p>
              <p>Unlike my zombified peers, I am never satisfied with my current skill set. I am not one to spend each evening playing video games. Intentionally or not I will always find myself experimenting with new tools like MongoDB and Jenkins. Conveniently, this constant compulsion frequently brings innovation to the workplace. Together, my passion for top quality results and OCD tendency to learn new skills puts me a step above the competition.</p>
            </div>
          </div>
        </div>

      </div>
    );
  },
});
