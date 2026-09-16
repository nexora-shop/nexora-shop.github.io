import productData from "./generated/products.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  images: string[];
  affiliate: string;
};

export const products = productData as Product[];

export const categories = [
  ["Electronics","Smart Home","Mobile Accessories","Gadgets"],
  ["Computers & Accessories","Keyboards","Mice","Laptop Accessories"],
  ["Audio","Headphones & Earbuds","Speakers","Microphones"],
  ["Cameras","Action Cameras","Camera Accessories"],
  ["Fashion","Men","Women","Accessories"],
  ["Shoes","Sneakers","Casual Shoes","Sports Shoes"],
  ["Beauty","Skincare","Hair Care","Beauty Tools"],
  ["Home & Kitchen","Kitchen Appliances","Lighting","Storage"],
  ["Furniture & Decor","Home Decor","Office Furniture"],
  ["Sports & Fitness","Fitness Equipment","Outdoor Sports"],
  ["Gaming","PC Gaming","Console Accessories"],
  ["Books","Education","Lifestyle"],
  ["Toys & Kids","Learning Toys","Games"],
  ["Automotive","Car Accessories","Tools"],
  ["Pet Supplies","Pet Accessories","Pet Care"],
  ["Garden & Outdoor","Garden Tools","Outdoor Living"],
  ["Travel","Bags & Luggage","Travel Accessories"],
  ["Jewelry & Accessories","Watches","Fashion Jewelry"],
  ["Tools & DIY","Hand Tools","DIY Accessories"],
  ["Gifts & More","Gift Ideas","Seasonal Gifts"]
];
