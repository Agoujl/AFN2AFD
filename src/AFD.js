//importation des différent packages necéssaire pour le bon fonctionnement del'application
import React, {Component} from 'react';
import {
    Button,
    Grid,
    Row,
    Col,
    Clearfix,
    Table
} from 'react-bootstrap';
import './App.css';
import * as appactions from "./appactions";
import AppStore from './AppStore';
//on utilise le mot export default par ce que la classe a pour utilisation extern
export default class AFD extends Component {
    constructor() {
        super();
        this.state = {
            appstore: AppStore.getAll()
        };
    }
//l'appel de fonction qui crée fait appele au creatAfd() qui situe dans appaction
//qui lance le traitement pour la mettre on place d'un automate finie detérminée.
    creatAfd() {
        appactions.creatAfd();
    }
    //c'est la partie d'affichage dans  chaque Component de react
    render() {
      //initialisation de variable j=0
      var j=0;
        return (
//col pour definir le colone dans le systeme grid de bootstrap
       < Col xs = {
            12
        }
        md = {
            4
        } >
{/*le div avec la class subContainer c'est just pour entouré , isoller et fixer l'hauteur de chaque
 Component de l'application (tools,afn,afd)*/}
        <div className="subContainer">
            <h2>
                AFD
            </h2>
      {
        //c'est un boutton au cas de click il lance la fonction de la classe creatAfd()
    }
            <Button onClick={this.creatAfd.bind(this)} bsStyle="primary">AFN-->AFD</Button>
            {
            /*ici on va dessiner un tableau qui va lister les valeurs des tableaux creé aprés le traitement*/
            }
            <Table>
              {
              /*thead c'est la partie l'entête de tableau*/
            }
                <thead>
                  {
                  /*constituer d'un seul ligne*/
                  }
                    <tr>
                      {
                        //la premiere case supposé d'etre vide mais pour le moment on
                        // remplace le vide par @
                      }
                        <th>@</th>
                        {/* pour les autres case de l'entête il s'agit des valeurs du vecteur uniq qui représente
                           les valeurs uniq des transistion*/
                        }
                        {this.state.appstore.uniq.map(item => (
                            <th>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                {
                  /*la partie corps du tableau (body)*/
                }
                <tbody>

                  {/*
                    il y a deux autres tableaux a l'aide d'eux on va dessiner le corps de notre
                    afd tableau;(AFDTr et AFDSt)
                    AFDSt: il s'agit d'un tableau contenant les nouveaux états
                   AFDTr: c'est presque le corps de l'afd, il s'agit d'un tableau à deux dimension
                   qui représente  les états a destination en deprtant d'un état donné (AFDSt) avec
                   les valeurs de vecteur uniq
                  voici un exemple illustre le resultats
                  ____________
                  | @ || r || t | table uniq(r,t);
                  | 1 || 2 || £ |
                  | 2 || £ || £ |
                  | £ || £ || £ |
                table AFDSt(1,2,£)
                table AFDTr(2,£;
                            £,£
                            £,£ )
                 le caracter £ signifier pour le moment epsilon*/
                 }

                 {/*
                 maintenat on va lister le tableau AFDTr et AFDSt
                  dans chaque ligne on affiche une valeur de AFDst puis les valeurs de une ligne de AFDTr
                 */}

                    {this.state.appstore.AFDTr.map(item => (

                        <tr>
                                  <th>
                                    {this.state.appstore.AFDSt[j++]}

                                  </th>


                            {
                              item.map(x => (
                                <td>{x}</td>
                            ))
                          }
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div> < /Col >)}}
