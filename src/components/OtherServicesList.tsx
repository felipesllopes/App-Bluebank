import React from "react";
import { ScrollView } from "react-native";
import { OtherServices } from "./OtherServices";

export const OtherServicesList: React.FunctionComponent = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom: 10,
                paddingBottom: 10,
            }}
        >
            <OtherServices
                title="Negociar dívidas"
                description="Negocie suas dívidas e encontre opções de pagamento flexíveis."
                screen="Negociacao"
            />

            <OtherServices
                title="Precisa de ajuda?"
                description="Entre em contato conosco e tire as suas dúvidas."
                screen="Ajuda"
            />

            <OtherServices
                title="Contrato"
                description="Leia os termos de contrato aqui."
                screen="Contrato"
            />
        </ScrollView>
    );
};
