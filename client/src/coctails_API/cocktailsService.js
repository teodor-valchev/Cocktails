const URL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

const Single_Cocktaile_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php";

export const getAll = async () => {
    try {
        const data = await fetch(URL);

        const result = await data.json();

        return result;
    } catch (error) {
        alert("Something went wrong...");
    }
};

export const getOne = async (id) => {
    try {
        const data = await fetch(`${Single_Cocktaile_URL}i=${id}`);

        const result = await data.json();

        return result;
    } catch (error) {
        alert("Something went wrong...");
    }
};
