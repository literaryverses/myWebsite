import { useState, useEffect } from 'react';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  label: string;
  gotoPage: (page: number) => void;
};

function Pagination({
  totalPages,
  currentPage,
  label,
  gotoPage,
}: PaginationProps) {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <>
      <ul className="actions fit">
        <li>
          <button
            className={`button primary ${page === 0 ? 'disabled' : ''}`}
            onClick={() => gotoPage(page - 1)}
          >
            Previous
          </button>
        </li>
        <li>
          <button
            className={`button primary ${page === totalPages ? 'disabled' : ''}`}
            onClick={() => gotoPage(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
      <div className="col-12">
        <select
          className="demo-category"
          id="demo-category"
          value={currentPage}
          onChange={(e) => gotoPage(Number(e.target.value))}
        >
          <option value="">- {label} -</option>
          {Array.from({ length: totalPages + 1 }, (_, thisPage) => (
            <option value={thisPage} key={thisPage}>
              {/* {label} {thisPage} */}
              {label} {thisPage}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Pagination;
