/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { MaterialIcons } from '@expo/vector-icons';

import Add from '../../components/Add';
import Users from '../../components/Users';
import Operation from '../../components/Operation';

import data from '../../components/Users/data';

import {
  Wrapper,
  Container,
  TopBar,
  Welcome,
  Name,
  Profile,
  ProfileNotification,
  Card,
  SendMoney,
  SendContainer,
  Slider,
  PanelContainer,
  PanelHandle,
  TitlePanel,
  PanelSpace,
  PanelItemContainer,
  PanelItem,
  Avatar,
  NamePanel,
  TransactionPanel,
  AmountPanel,
  PanelButton,
  PanelButtonText,
} from './styles';

const Home: React.FC = () => {
  const { width, height } = Dimensions.get('window');
  const carouselRef = useRef(null);

  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 65,
  });
  const _draggedValue = new Animated.Value(180);
  const ModalRef = useRef(null);

  const Images = [
    {
      image: require('../../assets/card2.png'),
    },
    {
      image: require('../../assets/card1.png'),
    },
    {
      image: require('../../assets/card3.png'),
    },
    {
      image: require('../../assets/card4.png'),
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Card source={item.image} />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <View>
            <Welcome>Bem-vindo, de volta</Welcome>
            <Name>Alexander</Name>
          </View>

          <View>
            <Profile
              source={{ uri: 'https://www.github.com/ialexanderbrito.png' }}
            />
            <ProfileNotification />
          </View>
        </TopBar>

        <View>
          <Carousel
            layout="default"
            ref={carouselRef}
            data={Images}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{ overflow: 'visible', marginVertical: 30 }}
            contentContainerCustomStyle={{ paddingTop: 10 }}
          />
        </View>

        <View>
          <SendMoney>Enviar dinheiro</SendMoney>
          <SendContainer>
            <Add />
            <Users />
          </SendContainer>
          <SendMoney>Operações</SendMoney>
          <Operation />
        </View>
      </Container>

      <Slider>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}
        >
          <PanelContainer>
            <PanelHandle />
            <View>
              <TitlePanel>Transações recentes</TitlePanel>
            </View>

            <PanelSpace>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                  return (
                    <PanelItemContainer>
                      <PanelItem>
                        <View style={{ marginRight: 10 }}>
                          <Avatar source={{ uri: item.userImage }} />
                        </View>
                        <View>
                          <NamePanel>{item.userName}</NamePanel>
                          <TransactionPanel>
                            {item.transactionDate}
                          </TransactionPanel>
                        </View>
                      </PanelItem>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <AmountPanel>{item.amount}</AmountPanel>
                        {item.credit ? (
                          <MaterialIcons
                            name="arrow-drop-up"
                            size={22}
                            color="green"
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-drop-down"
                            size={22}
                            color="red"
                          />
                        )}
                      </View>
                    </PanelItemContainer>
                  );
                }}
              />
            </PanelSpace>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <PanelButton>
                <PanelButtonText>Ver tudo</PanelButtonText>
              </PanelButton>
            </View>
          </PanelContainer>
        </SlidingUpPanel>
      </Slider>
    </Wrapper>
  );
};

export default Home;
