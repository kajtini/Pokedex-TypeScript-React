import { Pagination } from "../types";

type PaginationProgressProps = {
  pagination: Pagination;
};

function PaginationProgress({ pagination }: PaginationProgressProps) {
  return (
    <p className="text-2xl">
      {pagination.currentPageNumber}/{pagination.allPages}
    </p>
  );
}

export default PaginationProgress;
