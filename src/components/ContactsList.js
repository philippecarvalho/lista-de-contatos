import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import axios from 'axios'

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		marginVertical: 1
	},
	title: {
		fontSize: 20
	},
	subtitle: {
		fontSize: 16
	},
	avatar: {
		width: 60,
		height: 60
	},
	arrow: {
		color: '#000000'
	}
})

export default class ContactsList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			peoples: []
		}
	}

	componentDidMount() {
		axios.get('https://randomuser.me/api/?nat=br&results=10').then((response) => {
			const { results } = response.data
			this.setState({
				peoples: results
			})
		})
	}

	keyExtractor = (item, index) => index.toString()

	renderItem = ({ item }) => (
		<ListItem
			bottomDivider
			style={styles.item}
			onPress={() => {
				this.props.navigation.navigate('Detalhes', { item })
			}}
		>
			<Avatar rounded style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
			<ListItem.Content>
				<ListItem.Title style={styles.title}>{item.name.first}</ListItem.Title>
				<ListItem.Subtitle style={styles.subtitle}>{item.phone}</ListItem.Subtitle>
			</ListItem.Content>
			<ListItem.Chevron color="black" />
		</ListItem>
	)

	render() {
		return (
			<FlatList
				style={styles.container}
				data={this.state.peoples}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
			/>
		)
	}
}
