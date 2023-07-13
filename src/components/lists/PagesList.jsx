import { PageCard } from "..";

export const PagesList = ({ pages }) => {
  return (
    <ul className="pages__list">
      {pages.map((page) => (
        <PageCard key={page.id} page={page} />
      ))}
    </ul>
  );
};
