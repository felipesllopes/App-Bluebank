import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ServiceCardList } from "../../components/ServiceCardList";
import { AuthContext } from "../../contexts/auth";
import { IScreenNavigation } from "../../interface";
import {
    BankName,
    Body,
    BoxFloat,
    BoxLogo,
    ButtonCaret,
    Container,
    HorizontalBar,
    Logo,
    ShowBalance,
    TextBalance,
    Transactions,
    Welcome,
} from "./styles";
import { SendButton } from "../../components/SendButton";

export const Home: React.FunctionComponent = () => {
    const { user, logOut } = useContext(AuthContext);
    const [visibleBalance, setVisibleBalance] = useState(false);
    const [balance, setBalance] = useState<number>(0);
    const { navigate } = useNavigation<IScreenNavigation>();

    useEffect(() => {
        firestore()
            .collection("users")
            .doc(user.uid)
            .onSnapshot(async value => {
                setBalance(await value.data().balance);
            });
    }, []);

    const handlevisibleBalance = () => {
        setVisibleBalance(current => (current === true ? false : true));
    };

    return (
        <Container>
            <BoxLogo>
                <Logo
                    source={require("../../assets/logo-bb.png")}
                    resizeMode="contain"
                />
                <BankName>Blue Bank</BankName>
            </BoxLogo>

            <BoxFloat style={{ elevation: 10 }}>
                <Welcome>Olá, {user && user.name}!</Welcome>
                <HorizontalBar />
                <ShowBalance>
                    <TextBalance>Saldo disponível</TextBalance>
                    <ButtonCaret
                        onPress={handlevisibleBalance}
                        name={visibleBalance ? "caret-up" : "caret-down"}
                    />
                </ShowBalance>

                <View style={{ display: visibleBalance ? "flex" : "none" }}>
                    <TextBalance>
                        R$
                        {balance.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                        })}
                    </TextBalance>
                    <Transactions onPress={() => navigate("Transactions")}>
                        Transações
                    </Transactions>
                </View>
            </BoxFloat>

            <Body>
                <ServiceCardList />
            </Body>

            <SendButton onPress={logOut} title="Sair" />
        </Container>
    );
};
