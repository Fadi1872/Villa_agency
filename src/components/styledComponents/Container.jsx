import styled from "styled-components";

const Container = styled.div`
  max-width: 1564px;
  padding-inline: 16px !important;
  margin-inline: auto;

  @media screen and (max-width: 1919px) {
    max-width: 1248px;
  }

  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
`;

export default Container
