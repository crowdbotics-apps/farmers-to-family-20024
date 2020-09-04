import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps97373Navigator from '../features/Maps97373/navigator';
import Add-Item97372Navigator from '../features/Add-Item97372/navigator';
import Maps97368Navigator from '../features/Maps97368/navigator';
import UserProfile97364Navigator from '../features/UserProfile97364/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps97373: { screen: Maps97373Navigator },
Add-Item97372: { screen: Add-Item97372Navigator },
Maps97368: { screen: Maps97368Navigator },
UserProfile97364: { screen: UserProfile97364Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
