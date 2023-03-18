import { useContext, useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../productCard/productCard";
import { CategoriesContext } from "../../../contexts/categories.context";

import { CategoryConatainer, Title } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryConatainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryConatainer>
    </Fragment>
  );
};

export default Category;
