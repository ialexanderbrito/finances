import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const SendMoney = styled.Text`
  font-family: 'OpenSans_400Regular';
  color: ${colors.gray};
  margin-top: 2px;
`;

export const OperationContainer = styled(RectButton)`
  height: 100px;
  width: 90px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 10px;
`;

export const OperationIcon = styled.View`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: #0f2a53;
  border-radius: 20px;
`;
