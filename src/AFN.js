import React, {Component} from 'react';
import {Button, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './App.css';
import {
	Layer,
	Rect,
	Stage,
	Text,
	Group,
	Circle,
	Arrow
} from 'react-konva';
import * as appactions from "./appactions";
import AppStore from './AppStore';

//class ************************************************************
export default class AFN extends Component {

	constructor() {
		super();
		this.state = {
			appstore: AppStore.getAll()
		};

	}

	createSommet(e) {
		appactions.createSommet(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
	}

	render() {
		let Sommet = this.state.appstore.Sommet;
		return (
			<Col xs={12} md={6} onClick={this.createSommet.bind(this)}>
				<div className="subContainer">
					<h2>AFN</h2>
					<Stage width={500} height={500}>
						<Layer>

							{this.state.appstore.Sommet.map(item => (
								<Group>
									<Circle key={item.id} y={item.y} x={item.x} radius={20} fill={'green'}/>
									<Text x={item.x - 5} y={item.y - 5} text={'C'} fontSize={18} fontFamily={'Calibri'} fill={'#fff'} width={100}/>

								</Group>

							))}

							{this.state.appstore.Arcs.map(item => (<Arrow x={0} y={0} points={[
								Sommet[item.Dep_Id - 1].x,
								Sommet[item.Dep_Id - 1].y,
								Sommet[item.Ari_Id - 1].x,
								Sommet[item.Ari_Id - 1].y
							]} pointerLength={5} pointerWidth={6} stroke={'black'} strokeWidth={3}/>))}

						</Layer>
					</Stage>
				</div>
			</Col>

		);
	}

}
