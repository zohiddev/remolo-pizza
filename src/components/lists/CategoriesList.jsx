import { CategoryCard } from "../card/CategoryCard";

export const CategoriesList = ({ categoriesData, activeCategory, store }) => {
  return (
    <div className="categories__list">
      {categoriesData.map((category) => (
        <CategoryCard
          key={category.id}
          data={category}
          activeCategory={activeCategory}
          store={store}
        />
      ))}
    </div>
  );
};
