import { CategoryCard } from "../card/CategoryCard";

export const CategoriesList = ({ categories, activeCategory }) => {
  return (
    <div className="categories__list">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
};
