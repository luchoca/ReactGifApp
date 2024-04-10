import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "../src/components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={addCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
/// API KEY = k7VFFK98vkeu77Kls91NT18uOfSn7ujd
