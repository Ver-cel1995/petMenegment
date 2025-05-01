import {useAppSelector} from "../../../common/hooks/useAppSelector.ts";
import {selectFavoritePets} from "../../model/selectFavoritePets.ts";
import {PetCard} from "../PetCard/PetCard.tsx";

export const FavoritesPage = () => {
    const favoritePets = useAppSelector(selectFavoritePets)

    return (
        <div>
            <h2>Избранные питомцы</h2>
            {favoritePets.length === 0 ? (
                <p>Нет избранных питомцев</p>
            ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
                        {favoritePets.map(pet => (
                            <PetCard key={pet.id} pet={pet} />
                        ))}
                    </div>
                )
            }
        </div>
    );
};