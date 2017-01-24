import React, {Component} from 'react';
import {Button, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './App.css';
import {Layer, Rect, Stage} from 'react-konva';
import Tools from './Tools';
import AFN from './AFN';
import AFD from './AFD';
import * as appactions from "./appactions";
import AppStore from './AppStore';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            appstore: AppStore.getAll()
        };
    }
    componentWillMount() {
      /*permet le mise à jour de appstore en cas de changement de AppStore*/
        AppStore.on("change", () => {
            this.setState({appstore: AppStore.getAll()});
        });
    }
    render() {
        return ( < div className = "AppContainer" >
      {  /*on utilise le systeme de grid de bootstrap*/}
        < Grid>
        {/*le premier et le seul ligne  dans le systeme grid*/}
         < Row className = "show-grid" >
{         //on fait appele au Component tools contenant les outils neccéssaire pour dessiner l'automate finie non detérminé
}
         < Tools / >
{  /*on fait appele au Component AFN qui représente la partie l'automate finie non detérminé donnée par l'utilisateur
*/}         < AFN / >

         {/*on fait appele ici au resultat de la detérminisation de l'automate finie aprés qui elle même fait appele au fonction
         de traitement situé dans appactions.*/}
         < AFD / >
          < /Row>
          < /Grid >
          < /div>
        );
    }

}
