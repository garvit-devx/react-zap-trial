import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 4px 16px;
  margin: 6px;
  border: 1px solid #151515;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: #151515;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: white;
  color: #151515;
`;
