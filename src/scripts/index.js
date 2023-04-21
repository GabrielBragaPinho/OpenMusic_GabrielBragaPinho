import {products} from "./productsData.js";
import {findMaxValue, sliderOutput} from "./slider.js";
import {render, createCard, filterRender} from "./render.js";

const handleFilters = (array)=> {
    const buttons = document.querySelectorAll('.filters__button');
    const sliderMaxValue = document.querySelector('.slider');
    let option1 = 0;
    let option2 = 89;
    
    buttons.forEach((button) => {
        button.addEventListener('click', ()=>{
            option1 = button.id; 
            console.log(option1)  
             filterRender(array, option1, option2)      
        })
        
    })

    sliderMaxValue.addEventListener('change', ()=>{
        option2 = sliderMaxValue.value;
        filterRender(array, option1, option2)
        
    })

}

handleFilters(products)
render(products)
sliderOutput()
findMaxValue(products)