import styled from 'styled-components';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {addPetAC} from "../../pets/petsSlice.ts";
import {Poroda} from "../../model/type.ts";
import {Navigate} from 'react-router-dom';
import {useEffect} from "react";

type Inputs = {
    name: string,
    type: Poroda,
    bread: string,
    age: number,
    photo: FileList,
}

export const AddPet = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, watch } = useForm<Inputs>()

    const photo = watch("photo");
    const imageUrl = photo && photo.length > 0 ? URL.createObjectURL(photo[0]) : null;

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const file = data.photo[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result as string;
            dispatch(addPetAC({
                name: data.name,
                age: +data.age,
                bread: data.bread,
                type: data.type,
                photo: base64
            }));
        };

        useEffect(() => {
            <Navigate to={'/'}/>
        }, [onSubmit])

        if (file) reader.readAsDataURL(file);
    }

    return (
        <Wrapper>
            <Form as={'form'} onSubmit={handleSubmit(onSubmit)}>
                <Title>Добавить питомца</Title>

                <Label>Имя</Label>
                <Input placeholder="Имя" {...register("name", {
                    required: "Имя обязательно",
                    minLength: { value: 2, message: "Минимум 2 символа" }
                })} />

                <Label>Тип</Label>
                <Select {...register("type", { required: "Тип обязателен" })}>
                    <option value="">Выбери тип</option>
                    <option value="dog">Собака</option>
                    <option value="cat">Кошка</option>
                </Select>

                <Label>Возраст</Label>
                <Input placeholder="Возраст" type="number" {...register("age", {
                    required: "Возраст обязателен",
                    min: { value: 0, message: "Минимум 0" },
                    max: { value: 30, message: "Максимум 30" }
                })} />

                <Label>Порода</Label>
                <Input placeholder="Порода" {...register("bread", {
                    required: "Порода обязательна",
                    minLength: { value: 3, message: "Минимум 3 символа" }
                })} />

                <Label>Фото питомца</Label>
                <FileInput type="file" accept="image/*" {...register("photo", { required: "Фото обязательно" })}/>
                {imageUrl && <Preview src={imageUrl} alt="Preview" />}


                    <Button type='submit'>Добавить</Button>

            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;
    background-color: #f5f5f5;
`;

const Form = styled.div`
    background-color: #fff;
    padding: 40px;
    width: 400px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
    margin-bottom: 24px;
    text-align: center;
    color: #333;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 6px;
    color: #555;
    font-size: 14px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: white;
    color: #333;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
  font-size: 14px;
`;

const Preview = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  object-fit: cover;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
