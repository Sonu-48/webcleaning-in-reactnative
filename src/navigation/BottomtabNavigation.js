import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screen/Home';
import BookingForm from '../component/BookingForm';
import MyBooking from '../screen/MyBooking';
import MyOrderPage from '../screen/MyOrderPage';

const Tab = createBottomTabNavigator();
const BottomtabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarHideOnKeyboard={true}
      screenOptions={() => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#25435F',
        tabBarLabelStyle:{
          fontSize:13
        },
        tabBarStyle: {
          backgroundColor: '#f0f0f7',
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 80,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" color="#25435F" size={30} />,
        }}
      />
      <Tab.Screen
        name="MyOrderPage"
        component={MyOrderPage}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="shopping-bag" color="#25435F" size={30} />,
        }}
      />
       <Tab.Screen
        name="Bookingform"
        component={BookingForm}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icons name="form" color="#25435F" size={30} />,
        }}
      />
       <Tab.Screen
        name="MyBooking"
        component={MyBooking}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="today-sharp" color="#25435F" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomtabNavigation;
