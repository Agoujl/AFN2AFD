import React, {Component} from 'react';
import {Button, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
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
			input: null,
			color_sommet: "white"
		};
	}

	createArc() {
		if ((this.state.selected_1 != null) && (this.state.selected_2 != null) && (this.state.input != null)) {
			appactions.createArc(this.state.selected_1, this.state.selected_2, this.state.input);
		}
		this.setState({selected_1: null, selected_2: null, input: null});
	}

	enableCreation() {
		if (this.state.appstore.enableCreation == false) {
			appactions.enableCreation();

		}
	}
	render() {
		this.state.color_sommet = (this.state.appstore.enableCreation)
			? 'black'
			: 'green';
		return (
			<Col xs={12} md={2}>
				<div className="subContainer">
					<h2>Tools</h2>

					<Stage width={50} height={50}>
						<Layer>
							<Group onClick={this.enableCreation.bind(this)}>
								<Circle y={20} x={30} radius={20} fill={this.state.color_sommet}/>
								<Text x={25} y={15} text={'S'} fontSize={18} fontFamily={'Calibri'} fill={'#fff'} width={100}/>
							</Group>
						</Layer>
					</Stage>
					<input type="checkbox" id="checkbox" name="test" value="false"/>
					<label for="checkbox">dernier sommet</label>
					<h4 className="title">Creation d'arc</h4>
					<Col xs={12} md={7}>
						<select onChange={e => this.setState({
							selected_1: e.target.value || null
						})} value={this.state.selected_1 || ''}>
							<option value="">choose</option>
							{this.state.appstore.Sommet.map(item => <option value={item.id}>{item.id}</option>)}
						</select>
						<select onChange={e => this.setState({
							selected_2: e.target.value || null
						})} value={this.state.selected_2 || ''}>
							<option value="">choose</option>
							{this.state.appstore.Sommet.map(item => <option value={item.id}>{item.id}</option>)}
						</select>
						<input type="text" maxLength='1' className='input' onChange={e => this.setState({
							input: e.target.value || null
						})} value={this.state.input || ''}/>
						<Button bsStyle="primary" value='Reset' onClick={this.createArc.bind(this)}>
							create Arc
						</Button>
					</Col>
				</div>
			</Col>
		)
	}
}
