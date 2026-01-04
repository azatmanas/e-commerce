import PropTypes from "prop-types";

export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS: "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED: "category/FETCH_CATEGORIES_FAILED",
};

export const CategoryItemProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

export const CategoryProp = PropTypes.shape({
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(CategoryItemProp).isRequired,
});
