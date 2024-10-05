import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
<<<<<<< HEAD
=======
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
>>>>>>> dc5b7eefa8be1ea26a4a8b918af22645e14464c6

const tentData = new ProductData("tents");
const element = document.querySelector(".product-list");
const list = new ProductListing("tents", tentData, element);

<<<<<<< HEAD
list.init();
=======
list.init();
>>>>>>> dc5b7eefa8be1ea26a4a8b918af22645e14464c6
