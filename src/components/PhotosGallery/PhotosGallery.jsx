import { Grid, PhotosGalleryItem } from "..";
import css from "./PhotosGallery.module.css";

export const PhotosGallery = ({ photos }) => {
	return (
		<div className={css.gallery}>
			<Grid>
				{photos.map((photo) => (
					<PhotosGalleryItem key={photo.id} photo={photo} />
				))}
			</Grid>
		</div>
	);
};
