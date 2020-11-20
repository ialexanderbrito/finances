import React from 'react';

import data from './data';

import { Container, AddUser, UserIcon, SendMoney, List } from './styles';

interface ItemProps {
  item: typeof data[0];
}

const UsersList: React.FC = () => {
  const UsersItem: React.FC<ItemProps> = ({ item }) => (
    <Container>
      <AddUser>
        <UserIcon source={{ uri: item.userImage }} />
        <SendMoney>{item.userName}</SendMoney>
      </AddUser>
    </Container>
  );

  return (
    <List>
      {data.map((item) => (
        <UsersItem key={item.key} item={item} />
      ))}
    </List>
  );
};

export default UsersList;
