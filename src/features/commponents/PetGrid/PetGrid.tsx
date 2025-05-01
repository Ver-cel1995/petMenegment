import {Grid} from "../Grid/Grid.tsx";
import {PetCard} from "../PetCard/PetCard.tsx";
import {useAppSelector} from "../../../common/hooks/useAppSelector.ts";
import {setPetsSelector} from "../../model/selectors.ts";



export const PetGrid = () => {
    const pet = useAppSelector(setPetsSelector)

    return (


        <Grid padding='0 20px'>
            {pet.map(pet => (
                <PetCard
                    key={pet.id}
                    pet={pet}
                />
            ))}
        </Grid>
    );
};
