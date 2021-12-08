import PropTypes from 'prop-types';

export default function TitleBookShelf(props) {
  const { title, icon } = props;
  return (
    <h2>
      <i className={icon} />
      <span>{title}</span>
    </h2>
  );
}

TitleBookShelf.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};
