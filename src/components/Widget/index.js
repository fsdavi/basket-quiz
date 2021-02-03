import styled, { css } from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

  .quizes {
    display: inline-block;
  }

  .questoes {
    display: inline-block;
    width: 100%;  
  }

  .button-confirm {
    border-radius: 8px !important;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }

  a{
    align-self: flex-end;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    color: #FFF !important;

    &:hover {
      opacity: 0.7;
    }
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  input {
    height: 40px;
    outline: none;
    border-radius: 4px 0px 0px 4px;
    border:none;
    padding-left: 5px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.green};

    ${props => props.disabled && css`
      border: 1px solid #637E91;
    `};
    color: #fff;

    ::placeholder {
      color: #FFF;
    }
  }

  button {
    height: 40px;
    border-radius: 0px 4px 4px 0px;
    background: ${({ theme }) => theme.colors.green};
    color: #FFF;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

    ${props => props.disabled && css`
      background: #637E91;
    `};
}
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }

  input {
    ${(selected) => selected && css`
      background: ${({ theme }) => theme.colors.green};
    `};
  }
`;

export default Widget;
