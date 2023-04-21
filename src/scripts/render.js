export function createCard (element) {
    let li = document.createElement('li');
    li.className = 'product__li'

    let img = document.createElement('img');
    img.className = 'product__img';
    img.src = element.img;

    let div1 = document.createElement('div');
    div1.className = 'product__div1';

    let product__band = document.createElement('p');
    product__band.className = 'product__band';
    product__band.innerHTML = element.band;

    let product__name = document.createElement('p');
    product__name.className = 'product__name';
    product__name.innerHTML = element.title;

    let product__date = document.createElement('p');
    product__date.className = 'product__date';
    product__date.innerHTML = element.year;

    let div2 = document.createElement('div');
    div2.className = 'product__div2';

    let product__price = document.createElement('p');
    product__price.className = 'product__price';
    product__price.innerHTML = `R$ ${element.price},00`;


    let button = document.createElement('button');
    button.className = 'product__button';
    button.innerHTML = 'Comprar';

    li.append(img, div1, product__name, div2);
    div1.append(product__band, product__date);
    div2.append(product__price, button);

    return li;
}

export function render (array) {
    const darkButton = document.querySelector('.symbol__container');
    const html = document.querySelector('html');
    const img = document.querySelector('.symbol__img');

    const modePreference = JSON.parse(localStorage.getItem('dark__mode'));

    if(modePreference) {
        img.src = './src/assets/img/sun.svg';
        html.classList.add('dark__mode');
    } else {
        img.src = './src/assets/img/moon.svg';
        html.classList.remove('dark__mode');
    }

    darkButton.addEventListener('click', ()=> {
        html.classList.toggle('dark__mode');
        if(html.classList.contains('dark__mode')) {
            img.src = './src/assets/img/sun.svg'
            localStorage.setItem('dark__mode', true)
        } else {
            img.src = './src/assets/img/moon.svg';
            localStorage.setItem('dark__mode', false)
        }
    })


    let productsContainer = document.querySelector('.cards__container');
    productsContainer.innerHTML = '';
    
    array.forEach(element => {
        let product = element;
        let card = createCard(product);
        productsContainer.append(card);
        
    });
}

export const filterRender = (array, option1, option2) => {
    const filterCategory = array.filter((product) => {
        if(option1==0){
            return true;
        }
        else if(option1==product.category){
            return true;
        }
        return false;
    })
    const filterPrice = filterCategory.filter((product) =>{
        if(product.price <= option2){
            return true;
        }
        return false;
    })
    render(filterPrice)
}

