import {RootState} from "../../app/store.ts";

export const selectFavoritePets = (state: RootState) =>
    state.pets.pets.filter(pet => pet.isFavorite);
