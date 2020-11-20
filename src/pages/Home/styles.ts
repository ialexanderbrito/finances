import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  padding-top: ${`${statusBarHeight}px`};
`;
export const Container = styled.View`
  padding-top: 25px;
  padding-horizontal: 14px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Welcome = styled.Text`
  font-size: 14px;
  color: ${colors.bluedark};
  font-family: 'OpenSans_700Bold';
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${colors.gray};
  font-family: 'OpenSans_700Bold';
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ProfileNotification = styled.View`
  height: 12px;
  width: 12px;
  background-color: ${colors.green};
  border-radius: 6px;
  position: absolute;
  border-width: 2px;
  border-color: ${colors.black};
`;

export const Card = styled.Image`
  width: 360px;
  height: 240px;
  border-radius: 10px;
`;

export const SendMoney = styled.Text`
  font-family: 'OpenSans_400Regular';
  color: ${colors.gray};
  margin-bottom: 10px;
`;

export const SendContainer = styled.View`
  flex-direction: row;
`;

export const Slider = styled.View`
  flex: 1;
`;

export const PanelContainer = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  border-radius: 24px;
  padding: 14px;
`;

export const PanelHandle = styled.View`
  height: 5px;
  width: 50px;
  background-color: ${colors.gray};
  border-radius: 6px;
  align-self: center;
  margin-top: 6px;
`;

export const TitlePanel = styled.Text`
  font-family: 'OpenSans_400Regular';
  color: ${colors.gray};
  margin-vertical: 16px;
`;

export const PanelSpace = styled.View`
  height: 500px;
  padding-bottom: 10px;
`;

export const PanelItemContainer = styled.View`
  border-width: 0.4px;
  border-color: ${colors.gray};
  padding: 14px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const PanelItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-color: ${colors.black};
  border-radius: 40px;
`;

export const NamePanel = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 14px;
  color: ${colors.black};
`;

export const TransactionPanel = styled.Text`
  font-family: 'OpenSans_400Regular';
  font-size: 10px;
  color: ${colors.gray};
`;

export const AmountPanel = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
  color: ${colors.black};
  margin-horizontal: 14px;
`;

export const PanelButton = styled.TouchableOpacity`
  padding: 14px;
  width: 200px;
  justify-content: center;
  background-color: ${colors.bluedark};
  border-radius: 10px;
`;

export const PanelButtonText = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
  color: ${colors.black};
`;
