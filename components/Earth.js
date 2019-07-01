import React from 'react';
import {asset, View} from 'react-360';
import Entity from 'Entity'; // also a part of react-360 but imported separately
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
export default class Earth extends React.Component {
	render() {
		return(
			<View>
				<AmbientLight intensity={1.0} color={'#fff'}/>
				<AmbientLight intensity={1.0} color={'#fff'}
				style={{
					transform: [
						{translate: [0, 0, 20]}
					]
				}}
				/>
				<Entity source={{
					gltf2: asset('earth_ball.gltf')
				}}
				style={{
					transform: [
						{scale: 0.03},
						// {rotateY: 120},
						// {rotateX: -30}
					]
				}}
				/>
			</View>
		);
	}
}