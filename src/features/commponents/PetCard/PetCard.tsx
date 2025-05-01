import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Pet} from "../../model/type.ts";
import {Icon} from "../Icon/Icon.tsx";

type Props = {
    pet: Pet
}

export const PetCard = ({pet}: Props) => {

    return (

        <>
            <Card>
                    <Link to={`/pet/${pet.id}`}>
                        <Image src={pet.photo} alt={pet.name}/>
                    </Link>
                    <FavButton>
                        <Icon iconId={'like'}
                              width={'30px'}
                              height={'30px'}
                              viewbox={'0 0 48 48'}
                              fill={pet.isFavorite ? 'red' : 'black'}
                        />
                    </FavButton>
                    <Body>
                        <Name>Имя: {pet.name}</Name>
                        <Info>Тип: {pet.type}</Info>
                        <Info>Город: {pet.location}</Info>
                    </Body>
            </Card>
        </>
    );
};

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
    max-width: 250px;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 16px;
`;

export const Name = styled.h3`
  margin: 0 0 8px;
  font-size: 1.125rem;
`;

export const Info = styled.p`
  margin: 4px 0;
  font-size: 0.875rem;
  color: #555;
`;

export const FavButton = styled.button`
  position: absolute;
    bottom: 60px;
  right: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
