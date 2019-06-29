/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: var(--color-light);

  form {
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    align-items: center;

    background-color: var(--color-primary);
    border-radius: var(--radius-medium);
    color: var(--color-white);

    img {
      width: 80px;

      background-color: var(--color-secondary);
      border-radius: 40px;
    }

    h3 {
      font-size: var(--size-big);
      padding: var(--spacing-small);
    }

    input {
      width: 220px;
      padding: var(--spacing-small);
      margin-bottom: var(--spacing-small);

      border: 1px solid transparent;
      border-radius: var(--radius-small);
      font-size: var(--size-small);

      transition: border-color 200ms linear;

      &:focus,
      &:hover {
        border: 1px solid var(--color-dark);
        outline: none;
      }
    }

    button {
      width: 100%;
      padding: var(--spacing-small);

      background-color: var(--color-secondary);
      color: var(--color-white);
      font-weight: bold;
      border-radius: var(--radius-small);
    }
  }
`;
