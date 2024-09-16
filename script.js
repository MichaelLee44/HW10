/*
Michael Kellems
Date
CIT 215
Prof. Kane
*/

const fullmeal = document.querySelector('.fullMeal');
const priceinfo = document.querySelector('.priceInfo')
const calorieinfo = document.querySelector('.calorieInfo')

const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },

    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
    },

    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },

    total_cost : 25.0,
    senior_discount: .10,

    prettyPrint : function(){
       return(
        `
        Starter: <br></br>
        -------------------------- <br> </br>
        Fruit: ${thanksgivingMeal.starter.fruit} <br> </br>
        Wine: ${thanksgivingMeal.starter.wine} <br> </br>
        Calories: ${thanksgivingMeal.starter.calories} <br> </br>
        -------------------------- <br> </br>
        Entree: <br></br>
        -------------------------- <br> </br>
        Meat: ${thanksgivingMeal.entree.meat} <br> </br>
        Alt: ${thanksgivingMeal.entree.alt} <br> </br>
        Veggies: ${thanksgivingMeal.entree.vegetables.potatoes}, ${thanksgivingMeal.entree.vegetables.greens}, ${thanksgivingMeal.entree.vegetables.salad}<br> </br>
        Sides: ${thanksgivingMeal.entree.sides.bread}, ${thanksgivingMeal.entree.sides.pasta} <br> </br>
        Calories: ${thanksgivingMeal.entree.calories} <br> <br>
        -------------------------- <br> </br>
        Desert: <br></br>
        -------------------------- <br> </br>
        Iceacream: ${thanksgivingMeal.dessert.ice_cream} <br> </br>
        Cake: ${thanksgivingMeal.dessert.cake} <br> </br>
        Calories: ${thanksgivingMeal.dessert.calories} <br> </br>
        -------------------------- <br> </br>
        `
       );
    },
    totalPrice(isSenior) {
        if(isSenior) {
            return (this.total_cost - (this.total_cost*.1))
        } else if (!isSenior) {
            return (this.total_cost)
        }
    },
    totalCalories: function() {
       return this.starter.calories + this.entree.calories + this.dessert.calories
    },
    caloriesFrom: function(indicator) {
      switch(indicator) {
        case "starter":
            return this.starter.calories
            break;
        case "entree":
            return this.entree.calories
            break;
        case "dessert":
            return this.dessert.calories
            break;
      }  
    } 
};

fullmeal.innerHTML = thanksgivingMeal.prettyPrint()
priceinfo.innerHTML = `Seniors get a 10% discout, <br> </br>Final price:  $${thanksgivingMeal.totalPrice(true)} <br> </br>`;
calorieinfo.innerHTML = `Total calories ${thanksgivingMeal.totalCalories()} <br> </br> Calories from dessert ${thanksgivingMeal.caloriesFrom("dessert")}`