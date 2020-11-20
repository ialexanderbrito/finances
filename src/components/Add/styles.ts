import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SendMoney = styled.Text`
  font-family: 'OpenSans_400Regular';
  color: ${colors.gray};
  margin-bottom: 10px;
`;

export const AddUser = styled(RectButton)`
  height: 100px;
  width: 90px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark};
  border-radius: 10px;
  margin-right: 14px;
`;

export const AddUserIcon = styled.View`
  height: 50px;
  width: 50px;
  background-color: ${colors.bluedark};
  border-radius: 25px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const UserIcon = styled.Image`
  height: 50px;
  width: 50px;
  background-color: ${colors.bluedark};
  border-radius: 25px;
  margin-bottom: 10px;
  justify-content: center;
`;
