import PropTypes from 'prop-types';

const Filter = ({ handleChange, filter }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
