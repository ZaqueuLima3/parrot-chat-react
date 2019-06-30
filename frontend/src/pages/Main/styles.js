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
`;

export const Chat = styled.div`
  height: 95vh;
  width: 60%;
  display: flex;
  flex-direction: column;

  background-color: var(--color-white);

  @media (max-width: 650px) {
    height: 100%;
    width: 100%;
  }
`;

export const HeaderChat = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: var(--spacing-medium);

  background: var(--color-primary);
  border: 1px solid #b9b9b9;

  img {
    width: 60px;

    background-color: var(--color-secondary);
    border-radius: 30px;
  }
`;

export const ContentChat = styled.div`
  flex: 1;
  padding: var(--spacing-medium);
`;

export const FooterChat = styled.div`
  height: 80px;
  display: flex;
  align-items: center;

  background: var(--color-primary);
  border: 1px solid #b9b9b9;

  img {
    width: 60px;
    margin-left: var(--spacing-medium);

    background-color: var(--color-secondary);
    border-radius: 30px;

    @media (max-width: 650px) {
      display: none;
    }
  }

  form {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 0 var(--spacing-medium);

    input {
      width: 90%;
      margin-right: 20px;
      padding: var(--spacing-small);

      border-radius: var(--radius-medium);
      font-size: var(--size-medium);

      &:focus,
      &:hover {
        border: 1px solid var(--color-dark);
        outline: none;
      }
    }

    button {
      padding: 0 var(--spacing-small);

      background-color: var(--color-secondary);
      color: var(--color-white);
      font-weight: bold;
      border-radius: var(--radius-small);
      outline: none;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 2px 4px var(--color-base);
      }

      &:active {
        transform: translateY(-1px);
      }
    }
  }
`;
