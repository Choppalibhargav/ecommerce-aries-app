import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Nike shoes",
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/585f399c-2ae5-4e12-9a4e-df531c0de400/air-jordan-1-retro-high-og-shoe-PLe8kL.png" ,
    price: 2400,
    category: "shoes",
    rating: 4,
    inStock:true,
  },
  {
    _id: uuid(),
    name: "Nike shoes",
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c11250b-1fc6-4727-9ea9-4aa63964ccae/kyrie-infinity-ep-basketball-shoes-QJ01t9.png" ,
    price: 2400,
    category: "shoes",
    rating: 5,
    inStock:true,
  },
  {
    _id: uuid(),
    name: "puma shoes",
    image:"https://media.gettyimages.com/photos/view-of-a-puma-display-during-the-2019-bet-experience-kicksperience-picture-id1157495172?s=612x612" ,
    price: 2400,
    category: "boots",
    rating: 4,
    inStock:true,
  },
  {
    _id: uuid(),
    name: "Puma shoes",
    image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/376185/03/sv01/fnd/IND/fmt/png" ,
    price: 2400,
    category: "boots",
    rating: 4,
    inStock:true,
  },{
    _id: uuid(),
    name: "Nike shoes",
    image:"https://brand.assets.reebok.com/f_auto,q_auto,fl_lossy/capi/reebok_enUS/comfyshoes-mobile_274-636858.jpg" ,
    price: 2400,
    category: "sneakers",
    rating: 3,
    inStock:true,
  },{
    _id: uuid(),
    name: "Nike shoes",
    image:"https://footwearnews.com/wp-content/uploads/2021/04/reebok-club-memt-mens-shoes-1.jpg" ,
    price: 2400,
    category: "sneakers",
    rating: 5,
    inStock:true,
  },
];
