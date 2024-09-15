import { getPhotos } from "apiService/photos";
import { Button, EditForm, Loader, PhotosGallery } from "components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Photos = () => {
	const [photos, setPhotos] = useState([]);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [totalResults, setTotalResults] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		if (!searchTerm) {
			return;
		}

		const fetchPhotos = async () => {
			setLoading(true);
			try {
				const data = await getPhotos(searchTerm, page);
				setPhotos((prev) => [...prev, ...data.photos]);
				setTotalResults(data.total_results);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchPhotos();
	}, [searchTerm, page]);

	const handleSearch = () => {
		setPhotos([]);
		setPage(1);
		setSearchTerm(query);
	};

	const handleLoadMore = () => {
		setPage((prev) => prev + 1);
	};

	return (
		<>
			<EditForm value={query} onSubmit={handleSearch} onChange={setQuery} />
			{loading && <Loader />}
			<PhotosGallery photos={photos} />
			{photos.length > 0 && photos.length < totalResults && (
				<Button onClick={handleLoadMore}>Load more</Button>
			)}
		</>
	);
};
