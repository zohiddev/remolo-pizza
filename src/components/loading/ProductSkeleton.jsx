import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  imgSkeletonStyles,
  nameSkeletonStyles,
  priceSkeletonStyles,
  btnSkeletonStyles,
} from "../loading/skeletonStyles";

export const ProductSkeleton = () => {
  return (
    <div className="product-card">
      <SkeletonTheme
        baseColor="#c6c6c6"
        highlightColor="#e6e2e2"
        style={{ borderRadius: "16px", overflow: "hidden" }}
      >
        <Skeleton style={imgSkeletonStyles} />
        <Skeleton style={nameSkeletonStyles} />
        <Skeleton style={priceSkeletonStyles} />
        <Skeleton style={btnSkeletonStyles} />
      </SkeletonTheme>
    </div>
  );
};
