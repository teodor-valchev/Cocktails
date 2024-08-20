import { useEffect, useState } from "react";

import * as cocktailsService from "../../coctails_API/cocktailsService.js";
import Item from "../item/Item.jsx";

const Catalog = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        cocktailsService.getAll().then((res) => setCocktails(res.drinks));
    }, []);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cocktails</h1>
            <div>
                {cocktails.map((cocktail) => (
                    <Item key={cocktail.idDrink} {...cocktail} />
                ))}
            </div>
        </>
    );
};

export default Catalog;
