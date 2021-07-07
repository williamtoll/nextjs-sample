import React from 'react';
import styled from 'styled-components';

const PaginationStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`;

const ItemsPerPage = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  padding: 1.2rem 3rem 1.2rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 6px;
  background-size: 1rem;
  appearance: none;
`;

const Label = styled.span`
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const PaginationOptions = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButtons = styled.div`
  display: flex;
`;

const PaginationButton = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin: 0 0.8rem;
  background-color: ${({ theme }) => theme.colors.lighterGrey};
  border: 0;
  border-radius: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

type Props = {
  pageSize: number;
  setPageSize: (n: number) => void;
  pageIndex: number;
  pageOptions?: number[];
  maxPages?: number;
  previousPage: () => void;
  canPreviousPage: boolean;
  nextPage: () => void;
  canNextPage: boolean;
};

export const Pagination: React.FC<Props> = ({
  pageSize,
  setPageSize,
  pageIndex,
  pageOptions,
  maxPages,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
}) => {
  return (
    <PaginationStyled>
      <ItemsPerPage>
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Select>
        <Label>Items per page</Label>
      </ItemsPerPage>

      <PaginationOptions>
        {pageOptions?.length === 0 || maxPages === 0 ? (
          <Label>Page 1 of 1</Label>
        ) : (
          <Label>
            Page {pageIndex + 1} of {pageOptions?.length || maxPages}
          </Label>
        )}

        <PaginationButtons>
          <PaginationButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {/* <Icons.ChevronLeft style={{ color: '#4c33f' }} /> */}
          </PaginationButton>
          <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
            {/* <Icons.ChevronRight style={{ color: '#4c33f' }} /> */}
          </PaginationButton>
        </PaginationButtons>
      </PaginationOptions>
    </PaginationStyled>
  );
};
