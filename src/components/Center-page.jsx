import styled from "styled-components";

export default ({ children, bgColor = "#ffffff" }) => {
  const Center = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${bgColor};
  `;
  return (
    <Center>
      {children}
    </Center>
  );
};
