import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import ContactsList from './src/components/ContactsList'
import ContactDetail from './src/components/ContactDetail'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function MyStack() {
	return (
		<Stack.Navigator initialRouteName="Contatos">
			<Stack.Screen name="Contatos" component={ContactsList} />
			<Stack.Screen
				name="Detalhes"
				options={({ route }) => ({ title: route.params.item.name.first })}
				component={ContactDetail}
			/>
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})
