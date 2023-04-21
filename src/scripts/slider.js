export function findMaxValue (array){
    const sliderMaxValue = document.querySelector('.slider');
    let maxValue = 0;

    array.forEach(value => {
        if(value.price>maxValue){
            maxValue = value.price;

            sliderMaxValue.max = maxValue; 
        }
        return maxValue;
       
    });
 
}

/***************************************************************************************
*    Title: <How TO - Range Sliders>
*    Author: <W3Schools>
*    Date: <date>
*    Code version: <code version>
*    Availability: <https://www.w3schools.com/howto/howto_js_rangeslider.asp>
*
***************************************************************************************/

export function sliderOutput (){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; 


    slider.oninput = function() {
    output.innerHTML = this.value;
    }

    slider.addEventListener('mousemove', function(){
        var x = slider.value;
        var color = 'linear-gradient(90deg, var(--color-brand-1)' + x + '%, var(--color-grey-5)' + x + '%)';
        slider.style.background = color;
    })
}

