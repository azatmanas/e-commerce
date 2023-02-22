import "./category.scss";
const Category = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
