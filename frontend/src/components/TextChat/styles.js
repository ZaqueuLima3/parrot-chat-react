/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: var(--spacing-small);
  align-items: center;
  justify-content: ${props => (props.isParrot ? 'flex-start' : 'flex-end')};

  img {
    width: 30px;
    margin: 0 var(--spacing-small);

    background-color: var(--color-secondary);
    border-radius: 15px;
  }

  p {
    max-width: 350px;
    padding: var(--spacing-small);

    background-color: var(--color-light);
    border-radius: var(--radius-small);
    font-size: var(--size-medium);
    font-weight: 400;
    color: var(--color-base);

    @media (max-width: 650px) {
      max-width: 180px;
    }
  }
`;
