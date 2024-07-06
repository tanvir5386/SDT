const DisplaySearchItem = () => {

    const input = document.getElementById("catch-input").value;

    const firstcontainer = document.getElementById("first-open");
    firstcontainer.innerHTML = '';

    console.log(input);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayProduct(data.meals);
        })
        .catch((err) => {
            Details(0);

            const second = document.getElementById("second-container");
            
            second.innerHTML="";

            const div = document.createElement("div");

            div.innerHTML=`
            <h1 class="h1-tag">NOT FOUND</h1>
            `;

            second.appendChild(div);

        })

    // console.log(input);
}

const displayProduct = (meals) => {
    const mealContainer = document.getElementById("meal-container");

    mealContainer.innerHTML="";

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement("div");

        div.classList.add("card1");

        div.innerHTML = `
        <img class="card-img" onclick="Details(${meal.idMeal})" src="${meal.strMealThumb}" alt="" />
        <h5 class=" mt-5 p-3">${meal.strMeal}</h5>
        `;
        mealContainer.appendChild(div);
    });
}

const Details = (mealId) => {


    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const firstcontainer = document.getElementById("first-open");

             firstcontainer.innerHTML = '';

            const div = document.createElement("div");

            div.classList.add("card");

            div.innerHTML = `
            <img src="${data.meals[0].strMealThumb}" class="card-img-top card-img2" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.meals[0].strMeal}</h5>
            <h6 class="mt-2"></h6>
            <ul id="ingredient-list"></ul>
            `;

            firstcontainer.appendChild(div);


             for (let i = 1; i <= 20; i++) {
                const ingredient = data.meals[0][`strIngredient${i}`];
                const measure = data.meals[0][`strMeasure${i}`];

                if (ingredient) {
                    const ingredientItem = document.createElement("li");
                    ingredientItem.textContent = `${ingredient} - ${measure}`;
                    document.getElementById("ingredient-list").appendChild(ingredientItem);
                } else {
                    break;
                }
            }

            firstcontainer.scrollIntoView({ behavior: "smooth", block: "start" });

        })
        .catch(error => {
            console.log("NO DETAILS");
        });
}

// DisplaySearchItem();
