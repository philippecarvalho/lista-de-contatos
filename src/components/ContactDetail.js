import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { Image } from 'react-native-elements'

const win = Dimensions.get('window')
const ratio = win.width / 128

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f9fd'
	},
	imageContainer: {
		alignItems: 'center',
		width: win.width,
		padding: 10
	},
	avatar: {
		width: 128,
		height: 128,
		borderRadius: 20,
		marginVertical: 10
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#111217'
	},

	detailsItem: {
		marginBottom: 5,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		borderBottomColor: '#e3e3e3',
		borderBottomWidth: 1
	},
	detailsTitle: {
		fontWeight: 'bold',
		color: '#4d5ce7',
		fontSize: 16,
		marginBottom: 2
	},
	details: {
		fontSize: 16,
		marginBottom: 5,
		color: '#111217'
	}
})

export default class ContactDetail extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { item } = this.props.route.params

		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="#4d5ce7" />
				<View style={styles.imageContainer}>
					<Image style={styles.avatar} source={{ uri: item.picture.large }} />
					<Text style={styles.title}>
						{item.name.first} {item.name.last}
					</Text>
				</View>

				<View style={styles.container}>
					<View style={styles.detailsItem}>
						<Text style={styles.detailsTitle}>Telefone</Text>
						<Text style={styles.details}>{item.phone}</Text>
					</View>

					<View style={styles.detailsItem}>
						<Text style={styles.detailsTitle}>Celular</Text>
						<Text style={styles.details}>Celular: {item.cell}</Text>
					</View>

					<View style={styles.detailsItem}>
						<Text style={styles.detailsTitle}>Email</Text>
						<Text style={styles.details}>Email: {item.email}</Text>
					</View>

					<View style={styles.detailsItem}>
						<Text style={styles.detailsTitle}>Endereço</Text>
						<Text style={styles.details}>
							{item.location.street.name}
							{item.location.street.number}, {item.location.city}-
							{item.location.state}
						</Text>
					</View>
				</View>
			</View>
		)
	}
}
