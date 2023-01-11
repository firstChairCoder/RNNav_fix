import { Navigation } from "react-native-navigation";

import App, { SettingsScreen, LoginScreen } from "./App";

Navigation.registerComponent("Home", () => App);
Navigation.registerComponent("Settings", () => SettingsScreen);
Navigation.registerComponent("Login", () => LoginScreen);

Navigation.setDefaultOptions({
	statusBar: {
		backgroundColor: "#4d089a",
	},
	topBar: {
		backButton: {
			color: "white",
		},
		background: {
			color: "#4d089a",
		},
		title: {
			color: "#FFF",
		},
	},
	bottomTab: {
		fontSize: 14,
		selectedFontSize: 16,
	},
});

const loginRoot = {
	root: {
		component: {
			name: "Login",
		},
	},
};

export const mainRoot = {
	root: {
		bottomTabs: {
			children: [
				{
					stack: {
						children: [
							{
								component: {
									name: "Home",
								},
							},
						],
					},
				},
				{
					stack: {
						children: [
							{
								component: {
									name: "Settings",
								},
							},
						],
					},
				},
			],
		},
	},
};

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot(loginRoot);
});
