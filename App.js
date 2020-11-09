import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import ContactsList from './src/components/ContactsList'
import ContactDetail from './src/components/ContactDetail'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyStack() {
	return (
		<Stack.Navigator
			initialRouteName="Contatos"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#4d5ce7'
				},
				headerTintColor: '#fff'
			}}
		>
			<Stack.Screen name="Contatos" component={ContactsList} />
			<Stack.Screen
				name="Detalhes"
				options={({ route }) => ({
					title: route.params.item.name.first
				})}
				component={ContactDetail}
			/>
		</Stack.Navigator>
	)
}

function Sobre() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Aluno: Philippe Carvalho - 2051</Text>
		</View>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="light-content" backgroundColor="#202429" />
			<Tab.Navigator
				tabBarOptions={{
					activeTintColor: '#4d5ce7',
					labelStyle: {
						fontSize: 16,
						padding: 15
					}
				}}
			>
				<Tab.Screen name="Home" options={{ title: 'Contatos' }} component={MyStack} />
				<Tab.Screen name="Sobre" component={Sobre} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})
