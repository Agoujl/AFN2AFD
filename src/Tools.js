//importation des différent packages necéssaire pour le bon fonctionnement del'application
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

/**************
ensemble des outils qui permet au utilisateur
  de dresser dans la page le figure qui represente l'automate à determinisé
	************************/

export default class Tools extends Component {
	constructor() {
		super();
		this.state = {
			appstore: AppStore.getAll(),
			selected_1: null,// variable qui va contenir le sommet de depart choisi parmi l'ensemble des sommet
			selected_2: null,// variable qui va contenir le sommet d'arriver choisi parmi l'ensemble des sommet
			input: null,// variable qui contient la valeur de l'arc
			color_sommet: "white"
		};
	}
//fonction de creation de l'arc qui fait appele comme toujours de fonctions de appactions
//si toutes les champs sont rempli apres le traitement elle rendre de nouveau vide
	createArc() {
		if ((this.state.selected_1 != null) && (this.state.selected_2 != null) && (this.state.input != null)) {
			appactions.createArc(this.state.selected_1, this.state.selected_2, this.state.input);
		}
		this.setState({selected_1: null, selected_2: null, input: null});
	}
//une fonction qui autorise la creation des sommets
	enableCreation() {
		if (this.state.appstore.enableCreation == false) {
			appactions.enableCreation();

		}
	}
	render() {
		// si la creation des sommets est autorisé le couleur de boutton est en vert si non il est en noir
		this.state.color_sommet = (this.state.appstore.enableCreation)
			? 'green'
			: 'black';
		return (

			<Col xs={12} md={2}>
				{/*le div avec la class subContainer c'est just pour entouré ,
				isoller et fixer l'hauteur de chaque
				 Component de l'application (tools,afn,afd)*/}
				<div className="subContainer">
					<h2>Tools</h2>
{/*
	ici on just dessine un cercle  avec un lettre s dedant*/}
					<Stage width={50} height={50}>
						<Layer>
							<Group onClick={this.enableCreation.bind(this)}>
								<Circle y={20} x={30} radius={20} fill={this.state.color_sommet}/>
								<Text x={25} y={15} text={'S'} fontSize={18} fontFamily={'Calibri'} fill={'#fff'} width={100}/>
							</Group>
						</Layer>
					</Stage>
					{/*
						ce input c'est pour qu'on marque ulterierement les sommet qui represente les etats finaux*/}

					<input type="checkbox" id="checkbox" name="test" value="false"/>
	<label for="checkbox">dernier sommet</label>
	{/************************  la creation de l'arc***********************/}
					<h4 className="title">Creation d'arc</h4>
					<Col xs={12} md={7}>
						{/********pour créer un arc il nous faut 3 elements
							(sommet de dpart,	sommet d'arriver,valeur de l'arc) c'est ça qu'on va demander au
							 utilisateur de les remplir
							 **************/}
							 {/***le premier est le deuxieme select fonctionne de la même maniére
								 les options de chaqunes sont les ids des sommet des crées dans appstore
								 ****/}
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
						{/*** ce input text represente la valeur de l'arc***/}
						<input type="text" maxLength='1' className='input' onChange={e => this.setState({
							input: e.target.value || null
						})} value={this.state.input || ''}/>
						{/**cet button est pour la création de l'arc à partir des valeurs deja entre par l'utilisateur**/}
						<Button bsStyle="primary" value='Reset' onClick={this.createArc.bind(this)}>
							create Arc
						</Button>
					</Col>
				</div>
			</Col>
		)
	}
}
