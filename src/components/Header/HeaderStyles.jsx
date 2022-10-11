import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  padding-top: 2rem;
  margin-top: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
export const Div2 = styled.ul`
  display: flex;
  li {
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    margin: 0 1rem;
    position: relative;
    transition: 0.2s all ease-in;
    &:hover a:after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      background-image: linear-gradient(90deg, #00f0ff 0.94%, #3360ff 101.89%);
      /* background-color: red; */
      height: 2px;
      width: 100%;
    }
    &:hover {
      font-weight: 600;
      font-size: 1.8rem;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
export const Div3 = styled.div`
  display: flex;
  align-items: center;
  div select {
    color: #fff;
    outline: none;
    background: none;
    border: none;
  }
  .btn-project {
    font-weight: 600;
    color: ${(props) => props.theme.colors.background1};
    padding: 1rem 2rem;
    border-radius: 8px;
    border: none;
    margin: 0 1rem;
    transition: 0.3s all ease-in;
    &:hover {
      background: ${(props) => props.theme.colors.button};
      color: #fff;
    }
  }
  .btn-mode {
    background: none;
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 1rem;
    color: #fff;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 28px;
  font-weight: 300;
  span {
    font-weight: 800;
  }
`;
