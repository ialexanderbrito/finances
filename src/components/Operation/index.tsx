import React from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  OperationContainer,
  OperationIcon,
  SendMoney,
} from './styles';

const Operation: React.FC = () => {
  return (
    <Container>
      <OperationContainer>
        <OperationIcon>
          <MaterialCommunityIcons
            name="credit-card-outline"
            color="#0063F5"
            size={24}
            style={{ alignSelf: 'center' }}
          />
        </OperationIcon>
        <SendMoney>Ver saldo</SendMoney>
      </OperationContainer>

      <OperationContainer>
        <OperationIcon>
          <MaterialCommunityIcons
            name="wallet"
            color="#0063F5"
            size={24}
            style={{ alignSelf: 'center' }}
          />
        </OperationIcon>
        <SendMoney>Sacar</SendMoney>
      </OperationContainer>

      <OperationContainer>
        <OperationIcon>
          <MaterialCommunityIcons
            name="bank-transfer-out"
            color="#0063F5"
            size={24}
            style={{ alignSelf: 'center' }}
          />
        </OperationIcon>
        <SendMoney>Transferir</SendMoney>
      </OperationContainer>

      <OperationContainer>
        <OperationIcon>
          <MaterialCommunityIcons
            name="bank-transfer-in"
            color="#0063F5"
            size={24}
            style={{ alignSelf: 'center' }}
          />
        </OperationIcon>
        <SendMoney>Receber</SendMoney>
      </OperationContainer>

      <OperationContainer>
        <OperationIcon>
          <MaterialCommunityIcons
            name="cellphone"
            color="#0063F5"
            size={24}
            style={{ alignSelf: 'center' }}
          />
        </OperationIcon>
        <SendMoney>Recarga</SendMoney>
      </OperationContainer>
    </Container>
  );
};

export default Operation;
