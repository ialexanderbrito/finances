import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View``;

export const SendMoney = styled.Text`
  font-family: 'OpenSans_400Regular';
  color: ${colors.gray};
  margin-bottom: 10px;
`;

export const AddUser = styled(RectButton)`
  height: 140px;
  width: 75px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-right: 0px;
`;

export const UserIcon = styled.Image`
  height: 50px;
  width: 50px;
  background-color: ${colors.bluedark};
  border-radius: 25px;
  margin-bottom: 5px;
  justify-content: center;
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
