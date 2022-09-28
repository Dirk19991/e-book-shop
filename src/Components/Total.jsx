import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: 6 / 7;
  justify-self: center;
  padding-bottom: 1rem;
`;

const Cursive = styled.span`
  white-space: pre;
  font-family: "Permanent Marker", cursive;
`;

export const Total = ({ items, setItems }) => {
  const total = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <Wrapper>
      <Cursive>Total : </Cursive> {total} RUB
    </Wrapper>
  );
};
