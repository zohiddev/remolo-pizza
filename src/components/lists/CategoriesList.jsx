import { CategoryCard } from "../card/CategoryCard";

export const CategoriesList = ({ categoriesData, activeCategory }) => {
  return (
    <div className="categories__list">
      {categoriesData.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          icon={category.icon}
          name={category.name}
          activeCategory={activeCategory}
        />
      ))}
    </div>
  );
};
