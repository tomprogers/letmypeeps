/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
	AppRegistry,
	Component,
	Navigator,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	Router,
	Route,
	Schema
} from 'react-native-router-flux';


class ApplicationRoutes extends Component {
	render() {
		return (
			<Router hideNavBar={true}>
				<Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
				<Route name="main" component={mainscreen} title="main" />
				<Route name="other" component={otherscreen} title="other" initial={true} />
			</Router>
		);
	}
};


class letmypeeps extends Component {
	render() {
		return <ApplicationRoutes />
	}
}

class mainscreen extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					TOM RULES
					Cmd+D or shake for dev menu
				</Text>
			</View>
		);
	}
	
}

class otherscreen extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					other screen
				</Text>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('letmypeeps', () => letmypeeps);
