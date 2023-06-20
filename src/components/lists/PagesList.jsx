import { PageCard } from "../card/PageCard";

export const PagesList = ({ pages, activePage }) => {
  return (
    <ul className="pages__list">
      {pages.map((page) => (
        <PageCard key={page.id} page={page} activePage={activePage} />
      ))}
    </ul>
  );
};
