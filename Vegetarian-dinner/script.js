const dishes =  [
{
    name: "Eggplant Parmesan",
    vegetarian: true
},
{
    name:"Spaghetti & Meatballs",
    vegetarian:false
},
{
    name: "Vegetable Soup",
    vegetarian: true
},
{
    name: "Falafel",
    vegetarian: true
},
];

function vegetarianDishes (menu) {
    const main = document.querySelector("#menu");
    const vegMenu = menu.filter (dish => dish.vegetarian === true);
    vegMenu.forEach(dish => {
        let meal = document.createElement("li");
        meal.textContent = dish.name;  
        main.appendChild(meal);
    }); 
}

vegetarianDishes(dishes);