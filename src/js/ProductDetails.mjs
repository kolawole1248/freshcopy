import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import {baseURL,convertToJson} from './ProductData.mjs'


function productDetailsTemplate(product) {
    return `<section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
         <img
          class="divider"
          src="${product.Images.PrimaryExtraLarge
          }"
          alt="Image of ${product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${product.FinalPrice}</p>

        <p class="product__color">${product.Colors[0].ColorName}</p>

        <p class="product__description">
          ${product.DescriptionHtmlSimple}
        </p>

        <div class="product-detail__add">
          <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
        </div>
        </section>`;
}

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
      }    

      async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
       const response =  await fetch(`${baseURL}product/${this.productId}`)
        const datazz = await convertToJson(response);
        this.product = datazz.Result;
      
        //await this.dataSource.findProductById(this.productId); 
        console.log(this.product,'&&&&&&&&&&&&&&&&&&&&&&&')
        this.renderProductDetails("main");
        // once we have the product details we can render out the HTML
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        document
          .getElementById("addToCart")
          .addEventListener("click", this.addProductToCart.bind(this));
      }
      
      addProductToCart() {
        const existingCart = getLocalStorage("addToCart") || []; // Retrieve existing items
        existingCart.push(this.product); // Append the new product
        setLocalStorage("addToCart", existingCart); // Save back to local storage
        notifyProductAddedtoCart()

    }

      renderProductDetails(selector) {

        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
          "afterBegin",
          productDetailsTemplate(this.product)
    
        );
    
      }
}


function notifyProductAddedtoCart(){
  Swal.fire({
    title: "Success!",
    text: "Product Added to Cart",
    icon: "success"
  });
}
