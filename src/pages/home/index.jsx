import { Input, Icon, ProductCard } from "..";
import { categoriesData } from "../../data/categories";
import products from "../../data/products.json";

export const HomePage = () => {
  return (
    <main className="main home-page">
      <Input
        icon={
          <Icon>
            <img
              src="/src/assets/images/icons/search-icon.svg"
              alt="search icon"
            />
          </Icon>
        }
        placeholder="Busca algo de nuestro menu..."
        additionalClasses={["search"]}
      />
      <h1 className="home-page__title">Categorias</h1>
      <p className="home-page__description">Elige nuestras deliciosas pizzas</p>
      <div className="categories">
        {categoriesData.map((category) => (
          <div className={`category ${category.id === 1 ? "active" : ""}`}>
            <Icon>{category.icon}</Icon>
            <h4 className="name">{category.name}</h4>
          </div>
        ))}
      </div>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </main>
  );
};
