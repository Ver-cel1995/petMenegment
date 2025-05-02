import { useAppSelector } from "../../../common/hooks/useAppSelector.ts";
import { setPetsSelector } from "../../model/selectors.ts";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper.tsx";
import {Icon} from "../Icon/Icon.tsx";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {changeDescriptionAC, isFavoriteAC} from "../../pets/petsSlice.ts";
import {useState} from "react";

export const InfoPet = () => {
    const { id } = useParams();
    const pets = useAppSelector(setPetsSelector);
    const petItem = pets.find(p => p.id === id);
    const dispatch = useAppDispatch();

    const [chageInputText, setChageInputText] = useState(false)
    const [title, setTitle] = useState(petItem?.description)

    if (!petItem) return <p>Питомец не найден</p>;

    const handleToggleFavorite = () => {
        dispatch(isFavoriteAC({ id: petItem.id }));
    }

    const handleTitleChange = () => {
        if (title) {
            dispatch(changeDescriptionAC({id: petItem.id, title}))
            setChageInputText(false)
        }
    }

    return (
        <PetItemWrapper>
            <FlexWrapper gap="40px" alignItems="flex-start">
                <Photo src={petItem.photo} alt={petItem.name} />

                <PetInfo>
                    <FlexWrapper direction="column" gap="16px">
                        <FlexWrapper justify="space-between" alignItems="center">
                            <h2>{petItem.name}</h2>
                            <FavButton onClick={handleToggleFavorite}>
                                <Icon iconId={'like'}
                                      width={'30px'}
                                      height={'30px'}
                                      viewbox={'0 0 48 48'}
                                      fill={petItem.isFavorite ? 'red' : 'white'}
                                      stroke={petItem.isFavorite ? 'none' : 'grey'}
                                />
                            </FavButton>
                        </FlexWrapper>

                        <Divider />
                        <Attributes>
                            <dt>Type</dt>
                            <dd>{petItem.type}</dd>
                            <dt>Age</dt>
                            <dd>{petItem.age} yr</dd>
                            <dt>Location</dt>
                            <dd>{petItem.location}</dd>
                        </Attributes>
                        <Divider />
                        <div style={{ width: "100%" }}>
                            <FlexWrapper justify="space-between">
                                {chageInputText
                                    ?
                                    (
                                        <StyledTextarea onBlur={handleTitleChange}
                                                  autoFocus
                                                  onChange={(e) => setTitle(e.currentTarget.value)}
                                                  value={title}
                                        >

                                        </StyledTextarea>
                                    )
                                    : (
                                        <Description onDoubleClick={() => setChageInputText(true)}>
                                            {petItem.description}
                                        </Description>
                                    )
                                }
                                <Icon iconId={'editPen'} width={'38px'} height={'38px'} viewbox={'0 0 48 48'}/>
                            </FlexWrapper>
                        </div>
                    </FlexWrapper>
                </PetInfo>
            </FlexWrapper>
        </PetItemWrapper>
    );
};


const PetItemWrapper = styled.div`
    max-width: 1000px;
    margin: 40px auto;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Photo = styled.img`
    flex: 1;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
`;

const PetInfo = styled.div`
    flex: 1;
    min-width: 300px;
`;

const FavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0;
`;

const Attributes = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 12px;
  column-gap: 24px;
  margin: 0;

  dt {
    font-weight: 600;
  }
  dd {
    margin: 0;
  }
`;

const Description = styled.p`
  line-height: 1.6;
`;

const StyledTextarea = styled.textarea`
    width: 90%;
    min-height: 120px;
    padding: 8px 12px;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 6px; 
`

