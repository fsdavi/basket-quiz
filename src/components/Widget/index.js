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
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
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
    height: 30px;
    outline: none;
    border-radius: 4px 0px 0px 4px;
    border:none;
    padding-left: 5px;
  }

  button {
    height: 30px;
    border-radius: 0px 4px 4px 0px;
    background: ${({ theme }) => theme.colors.green};
    color: #FFF;
    border: none;
    outline: none;
  }
`;

export default Widget;
