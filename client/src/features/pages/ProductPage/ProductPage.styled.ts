import styled from 'styled-components';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export const Products = styled.div``;

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FavoriteDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 85px;
  border-radius: 16px;
  margin: -10px 0;
  padding: 5px;
  :hover {
    background-color: #d3d3d3;
  }
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const Filter = styled.input`
  width: 420px;
  height: 40px;
  border-radius: 8px;
  padding: 8px 8px 8px 36px;
  font-size: medium;
  background-color: #3131311f;
  border: none;
  left: 0px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  height: 20px;
  left: 8px;
  top: 10px;
`;

export const ContactInfo = styled.div`
  display: flex;
  padding: 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  gap: 6px;
`;

export const EmailLink = styled.a`
  color: #070f29;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const EmailText = styled.span`
  color: rgba(0, 0, 0, 0.3);
  line-height: 24px;
`;

export const ButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  margin-top: 32px;
  background-color: rgba(0, 0, 0, 0.04);
  overflow: auto;
  border-radius: 12px !important;

  .btn-check:checked + .btn,
  .btn.active,
  .btn.show,
  .btn:first-child:active,
  :not(.btn-check) + .btn:active {
    background-color: #f84e54;
  }

  .btn:hover {
    color: rgba(0, 0, 0, 0.6);
    background: none;
  }

  label.btn.btn-primary {
    border-radius: 12px !important;
  }
`;

export const SectionButton = styled(ToggleButton)`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.6);
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    padding: 16px 24px;
    font-size: 16px;
  }
`;

export const Headers = styled.div`
  position: relative;
  padding: 0 32px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;
