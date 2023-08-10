import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const linkStyles = `
  text-decoration: none;
  color: black;

  &:hover {
    color: #00BFFF;
  }
`;

const flexCenterStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.button`
  margin: 90px 16px 20px 32px;
  ${flexCenterStyles}
  width: 120px;
  padding: 10px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  color: #120083;
  font-size: 20px;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px #FAAD6F;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0 3px 4px #AEE6E2, 0 -3px 4px #ffffff;
    color: #00BFFF;
  }
`;

export const BackLink = styled(NavLink)`
  ${linkStyles};
`;

export const Container = styled.div`
  @media screen and (max-width: 767.99px) {
    display: block;
  }
  display: flex;
  margin: 0 20px;
  gap: 24px;
`;

export const Img = styled.img`
  @media screen and (max-width: 767.99px) {
    width: 250px;
  }
  border-radius: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SubTitle = styled.h2`
  margin-left: 20px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin-left: 20px;
  padding: 0;
`;

export const LinkInfo = styled(Link)`
  ${linkStyles};
  font-weight: 600;
  font-size: 18px;
`;

export const Hr = styled.hr`
  border-color: #A5A5A5;
`;
