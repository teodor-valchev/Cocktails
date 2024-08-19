const URL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

export const getAll = async () => {
    const data = await fetch(URL);

    const result = await data.json();

    return result;
};
