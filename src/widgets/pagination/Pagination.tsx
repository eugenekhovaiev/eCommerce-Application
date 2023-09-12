interface PaginationProps {
  cardsPerPage: number;
  totalCards: number;
  paginate: (arg: number) => void;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalCards / props.cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination__container">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li className="pagination__list-item" key={number}>
            <a className="pagination__list-item-link" href="##" onClick={(): void => props.paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
