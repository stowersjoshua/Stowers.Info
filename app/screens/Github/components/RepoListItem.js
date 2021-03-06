import React, {PropTypes} from 'react';
import moment from 'moment';

export default RepoListItem;

function RepoListItem({repo}) {
  const timeUpdated = moment(repo.pushed_at).fromNow();
  return (
    <li className="border-bottom">
      <div className="pull-right">
        <strong>{repo.language}</strong>
      </div>
      <h4><a href={repo.html_url}>{repo.name}</a></h4>
      <p>{repo.description}</p>
      <time>Updated {timeUpdated}</time>
    </li>
  );
}

RepoListItem.propTypes = {
  repo: PropTypes.object,
};

RepoListItem.defaultProps = {
  repo: {},
};
