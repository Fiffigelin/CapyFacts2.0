import { useCallback, useMemo, useState } from "react";
import { useFavoriteContext } from "../../../context/FavoriteContext";
import { randomId } from "../../../utilities/RandomIdGenerator";

export function useFavoriteCapy(id: string, image: string, fact: string) {
	const { createFavorite, deleteFavorite, favorites } = useFavoriteContext();
	const [alreadyFavorite, setAlreadyFavorite] = useState(false);

	const isFavorite = useMemo(() => {
		return favorites.some((fav) => fav.id === id);
	}, [favorites, id]);

	const handleFavoriteToggle = useCallback(() => {
		if (!isFavorite) {
			const duplicate = favorites.find(
				(fav) => fav.image === image && fav.fact === fact
			);
			if (duplicate) {
				setAlreadyFavorite(true);
				setTimeout(() => setAlreadyFavorite(false), 3000);
			} else {
				const duplicateId = favorites.find((fav) => fav.id === id);
				const safeId = duplicateId ? randomId() : id;
				createFavorite(safeId, image, fact);
			}
		} else {
			deleteFavorite(id);
		}
	}, [id, image, fact, isFavorite, favorites, createFavorite, deleteFavorite]);

	return { isFavorite, handleFavoriteToggle, alreadyFavorite };
}
