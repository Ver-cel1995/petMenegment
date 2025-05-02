import {Pet, Poroda} from "../model/type.ts";
import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import dog from '../../../public/dog.jpg'
import cat from '../../../public/cat.png'


export type PetsState = {
    pets: Pet[];
};

const initialState: PetsState = {
    pets: [
        {
            id: nanoid(),
            name: 'Mens',
            type: 'dog',
            age: 2,
            bread: '',
            isFavorite: false,
            location: 'kushevskay',
            photo: dog,
            description: 'Lorem'
        },
        {
            id: nanoid(),
            name: 'Lusy',
            type: 'cat',
            age: 5,
            bread: '',
            isFavorite: false,
            location: 'Bataysk',
            photo: cat,
            description: 'Lorem'
        }
    ],
}

export const petSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
        isFavoriteAC: (state, action: PayloadAction<{id: string}>) => {
            const pet = state.pets.find((pet) => pet.id === action.payload.id)
            if (pet) {
                pet.isFavorite = !pet.isFavorite
            }
        },
        changeDescriptionAC: (state, action: PayloadAction<{id: string, title: string}>) => {
            const pet = state.pets.find((pet) => pet.id === action.payload.id)
            if (pet) {
                pet.description = action.payload.title
            }
        },
        addPetAC: (state, action: PayloadAction<{name: string, type: Poroda, age: number, bread: string, photo: string}>) => {
            const newPet = {
                id: nanoid(),
                isFavorite: false,
                location: 'Bataysk',
                description: 'Lorem',
                ...action.payload,
            };
            debugger
            state.pets.push(newPet);
        }
    }
})

export const {isFavoriteAC, changeDescriptionAC, addPetAC} = petSlice.actions;
export const petReducer = petSlice.reducer;