import { Navigation } from "react-native-navigation";

import App, { SettingsScreen } from "./App";



Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent("Settings", () => SettingsScreen)

Navigation.setDefaultOptions({
	statusBar: {
		backgroundColor: "#4d089a"
	},
	topBar: {
		backButton: {
			color: "white"
		},
		background: {
			color: "#4d089a"
		},
		title: {
			color: "#FFF"
		}
	}
})

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});