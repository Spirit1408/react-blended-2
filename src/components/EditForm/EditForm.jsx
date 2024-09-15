import { FiSearch } from "react-icons/fi";
import style from "./EditForm.module.css";

export const EditForm = ({ onSubmit, value, onChange }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<button className={style.button} type="submit">
				<FiSearch size="16px" />
			</button>

			<input
				className={style.input}
				placeholder="What do you want to search?"
				name="search"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</form>
	);
};
