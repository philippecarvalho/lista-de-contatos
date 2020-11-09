import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Image } from 'react-native-elements'

const win = Dimensions.get('window')
const ratio = win.width / 128

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},
	title: {
		fontSize: 24,
		marginBottom: 5
	},
	details: {
		fontSize: 16,
		marginBottom: 5
	},
	avatar: {
		width: win.width,
		height: 128 * ratio
	},
	arrow: {
		color: '#000000'
	}
})

export default class ContactDetail extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { item } = this.props.route.params

		return (
			<View>
				<Image style={styles.avatar} source={{ uri: item.picture.large }} />

				<View style={styles.container}>
					<Text style={styles.title}>
						{item.name.first} {item.name.last}
					</Text>

					<Text style={styles.details}>Telefone: {item.phone}</Text>
					<Text style={styles.details}>Celular: {item.cell}</Text>
					<Text style={styles.details}>Email: {item.email}</Text>
					<Text style={styles.details}>
						Endereço: {item.location.street.name}
						{item.location.street.number}, {item.location.city}-
						{item.location.state}
					</Text>
				</View>
			</View>
		)
	}
}
