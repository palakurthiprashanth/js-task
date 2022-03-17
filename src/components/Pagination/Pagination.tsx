import { ReactNode } from 'react';
import Button from '../Button';

type PaginationProps= {
  currentPage: number,
  totalPages: number,
  onButtonClick: (totalPages: number) => void,
  children: ReactNode
}

const blockname = 'pagination';

const Pagination = ({ children, currentPage, totalPages, onButtonClick }: PaginationProps) => (
  <div className={blockname}>
    <div className={`${blockname}__childrenElm`}>
      {children}
    </div>
    <div className={`${blockname}__buttons`} data-testid="paginationButtons">
      <Button
        className={`${blockname}__first`}
        onClick={() => onButtonClick(1)}
        label="First"
        showAsLink
        disabled={currentPage === 1}
      />
      <Button
        className={`${blockname}__previous`}
        onClick={() => onButtonClick(currentPage - 1)}
        label="Previous"
        showAsLink
        disabled={currentPage === 1}
      />
      <span>Page {currentPage} of {totalPages}</span>
      <Button
        className={`${blockname}__next`}
        onClick={() => onButtonClick(currentPage + 1)}
        label="Next"
        showAsLink
        disabled={currentPage === totalPages}
      />
      <Button
        className={`${blockname}__last`}
        onClick={() => onButtonClick(totalPages)}
        label="Last"
        showAsLink
        disabled={currentPage === totalPages}
      />
    </div>
  </div>
);


export default Pagination;
