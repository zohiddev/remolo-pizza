import { PageCard } from "../card/PageCard";

export const PagesList = ({ pagesData, activePage }) => {
  return (
    <ul className="pages__list">
      {pagesData.map((page) => (
        <PageCard
          key={page.id}
          id={page.id}
          icon={page.icon}
          name={page.name}
          url={page.url}
          activePage={activePage}
        />
      ))}
    </ul>
  );
};
