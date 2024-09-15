import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

export const Loader = () => {
	return (
		<div className={styles.backdrop}>
			<ClipLoader size={50} color="orange" />
		</div>
	);
};
