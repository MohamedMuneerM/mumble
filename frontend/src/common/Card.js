import React from 'react';
import classNames from 'classnames';

<<<<<<< HEAD
const Card = ({ cardStyle = '', className, children, ...others }) => {
=======
const Card = ({ cardStyle = '', className = '', children, ...others }) => {
  const cardClass = `${className && className + ' '}card ${
    cardStyle === 'dark' && 'card--dark'
  }`;

>>>>>>> 65fc61a... :art: update feed ui styles
  return (
    <div
      className={classNames(className, 'card', {
        'card--dark': cardStyle === 'dark',
      })}
      {...others}
    >
      <div className="card__body">{children}</div>
    </div>
  );
};

export default Card;
