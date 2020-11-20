import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, AddUser, AddUserIcon, SendMoney } from './styles';

const Add: React.FC = () => {
  return (
    <Container>
      <AddUser>
        <AddUserIcon>
          <MaterialIcons
            name="add"
            color="#FFF"
            size={28}
            style={{ alignSelf: 'center' }}
          />
        </AddUserIcon>
        <SendMoney>Add usuário</SendMoney>
      </AddUser>
    </Container>
  );
};

export default Add;
