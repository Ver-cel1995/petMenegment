export type Poroda = 'cat' | 'dog' | 'parrot';

export type Pet = {
    id: string;
    name: string;
    type: Poroda
    age: number;
    photo: string;
    isFavorite: boolean;
    bread: string
    location: string
    description: string
};