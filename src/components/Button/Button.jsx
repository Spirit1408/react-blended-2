import style from "./Button.module.css";

export const Button = ({ children, onClick }) => {
	return (
		<button type="button" className={style.button} onClick={onClick}>
			{children}
		</button>
	);
};
