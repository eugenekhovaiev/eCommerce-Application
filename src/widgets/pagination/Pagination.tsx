interface PaginationProps {
  cardsPerPage: number;
  totalCards: number;
  paginate: (arg: number) => void;
  currentPage: number;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalCards / props.cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination__container">
      <ul className="pagination__list">
        {pageNumbers.map((number, index) => (
          <li className="pagination__list-item" key={number}>
            <button
              className={props.currentPage === index + 1 ? 'active' : 'pagination__list-item-link'}
              onClick={(): void => props.paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
