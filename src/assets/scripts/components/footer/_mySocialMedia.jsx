import PropTypes from 'prop-types';

export default function MySocialMedia(props) {
  const { href, icon } = props;
  return (
    <a href={href}>
      <i className={icon} />
    </a>
  );
}

MySocialMedia.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
};
