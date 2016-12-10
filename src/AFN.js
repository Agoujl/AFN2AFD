import React, {Component} from 'react';
import {Button, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './App.css';
import {
	Layer,
	Rect,
	Stage,
	Text,
	Path,
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
		if (this.state.appstore.enableCreation == true) {
			appactions.createSommet(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		}

	}

	render() {
		var style_AFN = (this.state.appstore.enableCreation)
			? "subContainer_AFN"
			: "subContainer";
		let Sommet = this.state.appstore.Sommet;
		return (
			<Col xs={12} md={6} onClick={this.createSommet.bind(this)}>
				<div className={style_AFN}>
					<h2>AFN</h2>
					<Stage width={500} height={500}>
						<Layer>

							{this.state.appstore.Sommet.map(item => (
								<Group>
									<Circle key={item.id} y={item.y} x={item.x} radius={20} fill={'green'}/>
									<Text x={item.x - 5} y={item.y - 5} text={item.id} fontSize={18} fontFamily={'Calibri'} fill={'#fff'} width={100}/>
								</Group>

							))}

							{this.state.appstore.Arcs.map(function (item) {
								const rayon = (Sommet[item.Dep_Id - 1].x <= Sommet[item.Ari_Id - 1].x)
									? 15
									: -15;

								if ((item.Dep_Id == item.Ari_Id)) {
									return (
										<Group>
											<Path x={Sommet[item.Dep_Id - 1].x - 20} y={Sommet[item.Dep_Id - 1].y - 55} data={'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z'} fill={'black'}/>
											<Text x={Sommet[item.Dep_Id - 1].x + 15} y={Sommet[item.Dep_Id - 1].y - 65} text={item.value} fontSize={25} fontFamily={'Calibri'} fill={'#fff'} width={100}/>

										</Group>
									);
								}
								return (
									<Group>
										<Arrow x={0} y={0} points={[
											Sommet[item.Dep_Id - 1].x + rayon,
											Sommet[item.Dep_Id - 1].y + rayon,
											Sommet[item.Ari_Id - 1].x - rayon,
											Sommet[item.Ari_Id - 1].y - rayon
										]} pointerLength={5} pointerWidth={6} stroke={'black'} strokeWidth={3}/>

										<Text x={(Sommet[item.Dep_Id - 1].x + Sommet[item.Ari_Id - 1].x) / 2} y={(Sommet[item.Dep_Id - 1].y + Sommet[item.Ari_Id - 1].y) / 2} text={item.value} fontSize={25} fontFamily={'Calibri'} fill={'#fff'} width={100}/>

									</Group>
								);
							})}

						</Layer>
					</Stage>
				</div>
			</Col>

		);
	}

}
