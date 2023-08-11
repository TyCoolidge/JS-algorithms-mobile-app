import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "twrnc";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Javascript Algorithms" }}
				/>
				<Stack.Screen name="Flash Cards" component={FlashCardScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const HomeScreen = ({ navigation }: { navigation: any }) => {
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Button
				title="Go Profile"
				onPress={() => navigation.navigate("Flash Cards", { name: "Tyler" })}
			/>
		</View>
	);
};
const FlashCardScreen = ({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) => {
	return (
		<View style={styles.container}>
			<Text style={tw`text-red-500 text-lg`}>
				These are {route.params.name}'s flash cards
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
