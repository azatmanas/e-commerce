import Category from "../category/category";

import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
