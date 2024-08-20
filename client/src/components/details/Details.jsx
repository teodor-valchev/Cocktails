import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Text, Title, SimpleGrid, TextInput, Image } from "@mantine/core";

import classes from "./Details.module.css";
import * as cocktailService from "../../coctails_API/cocktailsService";

const Details = () => {
    const { id } = useParams("id");

    const [cocktail, setCocktail] = useState({});
    const [ingridients, setIngridients] = useState([]);

    useEffect(() => {
        cocktailService.getOne(id).then((res) => {
            const drink = res.drinks[0];
            const ingridientsData = Object.entries(drink)
                .filter(
                    ([key, value]) =>
                        key.startsWith("strIngredient") && value !== null
                )
                .map(([key, value]) => value);

            setIngridients(ingridientsData);
            setCocktail(drink);
        });
    }, [id]);

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <div>
                    <Title className={classes.title}>{cocktail.strDrink}</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        {cocktail.strGlass}
                    </Text>
                    <div>
                        <Image
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                            className={classes.img}
                        ></Image>
                    </div>
                    <div>
                        <h4>Category</h4>
                        <p className={classes.tags}>{cocktail.strCategory}</p>
                    </div>
                    <div>
                        <h4>Glass</h4>
                        <p className={classes.tags}>{cocktail.strGlass}</p>
                    </div>
                </div>

                <div className={classes.form}>
                    <h3>Ingridients</h3>
                    {ingridients.map((x) => (
                        <TextInput
                            p="10px"
                            value={x}
                            classNames={{
                                input: classes.input,
                                label: classes.inputLabel,
                            }}
                        />
                    ))}

                    <h3>Instructions</h3>
                    <span>
                        {cocktail.strInstructions || cocktail.strInstructionsIT}
                    </span>
                </div>
            </SimpleGrid>
        </div>
    );
};

export default Details;
