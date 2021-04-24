'use strict';
class ProductList {
    constructor(container = '.products') {
            this.container = container;
            this._goods = []; //товары, данные
            this._allProducts = []; //массив экземпляров товаров на основе this._goods

            this._fetchGoods();
            this._render();
        }
        // суммарная стоимость всех товаров
    sum() {
        return this._goods.reduce((sum, { price }) => sum + price, 0);
    }

    _fetchGoods() {
        this._goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }
    _render() {
        const block = document.querySelector(this.container);

        for (const product of this._goods) {
            // console.log(new ProductItem(product).render());
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                     <img src="${this.img}" alt="Some img">
                     <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} \u20bd</p>
                        <button class="buy-btn">Купить</button>
                     </div>
                </div>`;
    }
}

const catalog = new ProductList();

//  const products = [
//     { id: 1, title: 'Notebook', price: 20000 },
//     { id: 2, title: 'Mouse', price: 1500 },
//     { id: 3, title: 'Keyboard', price: 5000 },
//     { id: 4, title: 'Gamepad', price: 4500 }
// ];

// const renderProduct = (title, price) => {
//     return `<div class='product-item'>
//         <h3>${title}</h3>
//         <p>${price}</p>
//         <button class ='by-btn'> Add to Cart </button>
//         </div>`;
// };
// const renderProducts = (list) => {
//     const productList = list.map((item) => {

//         return renderProduct(item.title, item.price);

//     });

//     document.querySelector('.products').innerHTML = productList.join('');

// }
// renderProducts(products);