import { css } from 'styled-components';

export default css`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 1170px;
  @media (max-width: 1170px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1920px) {
    max-width: 1400px;
  }
`;
