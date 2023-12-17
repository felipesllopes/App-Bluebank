import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const Scroll = styled.ScrollView`
    width: 100%;
`;

export const ImgLogo = styled.Image`
    height: 110px;
    width: 110px;
    align-self: center;
    margin: 30px 0;
`;
