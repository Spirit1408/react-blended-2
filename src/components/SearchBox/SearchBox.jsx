import s from './SearchBox.module.css';

export const SearchBox = ({ filter, handleChangeFilter }) => {
  return (
    <input
      className={s.input}
      type="text"
      placeholder="Search"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
};
