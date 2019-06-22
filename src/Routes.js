import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import MyProfile from "./components/profile/MyProfile";

MainNavigator = createStackNavigator({
    MyProfile: {
        screen: MyProfile,
        navigationOptions: {
            header: null
        }
    },
    initialRouteName: "MyProfile"
});


const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;