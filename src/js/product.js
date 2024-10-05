<<<<<<< HEAD
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

=======
import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

>>>>>>> dc5b7eefa8be1ea26a4a8b918af22645e14464c6
const dataSource = new ProductData("tents");
const productId = getParam("product");

const details = new ProductDetails(productId, dataSource);
details.init();
<<<<<<< HEAD
console.log(productId);
console.log(dataSource.findProductById(productId));

// add to cart button event handler
async function addToCartHandler(e) {
    const product = await dataSource.findProductById(e.target.dataset.id);
    details.addProductToCart(product);
}

// add listener to Add to Cart button
document
    .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
=======

// console.log(productId);
// console.log(dataSource.findProductById(productId));

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   details.addProductToCart(product);
// }

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
>>>>>>> dc5b7eefa8be1ea26a4a8b918af22645e14464c6
