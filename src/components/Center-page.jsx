import styled from "styled-components";

export default ({ children, bgColor = "#ffffff" }) => {
  const Center = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${bgColor};
    padding: 32px;
    overflow-y: auto;
  `;
  return (
    <Center>
      {children}
    </Center>
  );
};
