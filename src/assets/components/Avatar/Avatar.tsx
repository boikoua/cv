import React from 'react';
import styles from './Avatar.module.scss';

type Props = {
  title: string;
};

const Avatar: React.FC<Props> = ({ title }) => {
  return (
    <img
      className={styles.avatar}
      src={`./img/${title}.png`}
      alt="My avatar"
      data-aos="zoom-in"
    />
  );
};

export default Avatar;
