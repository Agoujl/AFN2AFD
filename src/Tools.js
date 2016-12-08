import React, {Component} from 'react';
import {Button, Col, ControlLabel, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {
	Layer,
	Arrow,
	Circle,
	Stage,
	Text,
	Group
} from 'react-konva';
import * as appactions from "./appactions";
import './App.css';
import AppStore from './AppStore';

//voici Tools*****************************************

export default class Tools extends Component {
	constructor() {
		super();
		this.state = {
			appstore: AppStore.getAll(),
			selected_1: null,
			selected_2: null,
			input: null
		};
	}

	createArc() {
		if ((this.state.selected_1 != null) && (this.state.selected_2 != null) && (this.state.input != null)) {
			appactions.createArc(this.state.selected_1, this.state.selected_2, this.state.input);
		}
		this.setState({selected_1: null, selected_2: null, input: null});
	}

	createSommet() {
		appactions.createSommet(34, 23);
	}
	render() {

		return (
			<Col xs={12} md={2}>
				<div className="subContainer">
					<h2>Tools</h2>

					<Stage width={50} height={50}>
						<Layer>
							<Group onClick={this.createSommet.bind(this)}>
								<Circle y={20} x={30} radius={20} fill={'black'}/>
								<Text x={25} y={15} text={'C'} fontSize={18} fontFamily={'Calibri'} fill={'#fff'} width={100}/>
							</Group>
						</Layer>
					</Stage>
					<Stage width={50} height={50}>
						<Layer>
							<Arrow x={0} y={0} points={[0, 20, 40, 20]} pointerLength={7} pointerWidth={6} stroke={'blue'} strokeWidth={5}/>
						</Layer>
					</Stage>
					<ControlLabel>Select sommet de depart</ControlLabel>
					<select onChange={e => this.setState({
						selected_1: e.target.value || null
					})} value={this.state.selected || ''}>
						<option value="">choose</option>
						{this.state.appstore.Sommet.map(item => <option value={item.id}>{item.id}</option>)}
					</select>

					<ControlLabel>Select sommet d'arriver</ControlLabel>
					<select onChange={e => this.setState({
						selected_2: e.target.value || null
					})} value={this.state.selected || ''}>
						<option value="">choose</option>
						{this.state.appstore.Sommet.map(item => <option value={item.id}>{item.id}</option>)}
					</select>
					<input type="text" maxLength='1' onChange={e => this.setState({
						input: e.target.value || null
					})} value={this.state.input || ''}/>
					<Button bsStyle="primary" value='Reset' onClick={this.createArc.bind(this)}>
						create Arc
					</Button>

				</div>
			</Col>
		)
	}
}
