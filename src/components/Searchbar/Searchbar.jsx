import PropTypes from 'prop-types';
import css from 'components/Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    let query = form.elements['query'].value;
    onSubmit(query);
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={css.searchBtn}>
          <span className={css.btnLabel}>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
