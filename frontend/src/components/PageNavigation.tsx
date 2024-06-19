import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { Dispatch, SetStateAction } from "react";

interface PageNavigationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  lastPage: number;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  page,
  setPage,
  lastPage,
}) => {
  const handleFirstPage = () => setPage(1);
  const handlePreviousPage = () => setPage(page > 1 ? page - 1 : 1);
  const handleNextPage = () => setPage(page + 1);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= page; i++) {
      pageNumbers.push(
        <a
          key={i}
          href="#"
          onClick={() => setPage(i)}
          className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
            i === page
              ? "border-primary text-textPrimary"
              : "border-transparent text-textSecondary hover:border-secondary hover:text-textPrimary"
          }`}
        >
          {i}
        </a>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      {page > 1 && (
        <div className="-mt-px flex w-0 flex-1 gap-5">
          <a
            href="#"
            onClick={handleFirstPage}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            First
          </a>
          {page > 2 && (
            <a
              href="#"
              onClick={handlePreviousPage}
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          )}
        </div>
      )}
      <div className="hidden md:-mt-px md:flex">{renderPageNumbers()}</div>
      {(!lastPage || page < lastPage) && (
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a
            href="#"
            onClick={handleNextPage}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </div>
      )}
    </nav>
  );
};

export default PageNavigation;
