//importation des différent packages necéssaire pour le bon fonctionnement del'application
import React, {
  Component
} from 'react';
import {
  Button,
  Grid,
  Row,
  Col,
  Clearfix,
  Table
} from 'react-bootstrap';
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
import './App.css';
import * as appactions from "./appactions";
import AppStore from './AppStore';

function getIndex(value, arr, prop) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1; //to handle the case where the value doesn't exist
}
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
      var j = 0;
      let SommetAFD = this.state.appstore.SommetAFD;
      let ArcsAFD = this.state.appstore.ArcsAFD;
      return (
          //col pour definir le colone dans le systeme grid de bootstrap
          <
          Col xs = {
            12
          }
          md = {
            4
          } > {
            /*le div avec la class subContainer c'est just pour entouré , isoller et fixer l'hauteur de chaque
             Component de l'application (tools,afn,afd)*/
          }
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
            <Stage width={500} height={500}>
                <Layer>
                  {
                    //on va parcourir les  sommet de notre base de données(appstore)
                    //et on va les afficher sous forme de cercle et text dans cette cercle
                    //qui représente les etats de notre automate
                  }
                       {
				this.state.appstore.SommetAFD.map(function(item){
                    if (item.ids===1 && item.finale===true) {
                        return (
						<Group >
                    <Path
							x = {
								item.x-90
							}
							y = {
								item.y-20
							}
							data = {
								"M 66.297296,10.77079 C 67.644022,9.2325738 67.158373,11.468776 65.935368,10.315295 61.764081,11.221088 61.17258,6.6969185 57.249562,2.5855258 54.667813,0.83821915 51.949494,1.374816 54.226192,2.830833 l 7.538743,7.955917 C 46.991968,9.1202148 21.951423,6.2459188 11.144647,16.660249 0.78553532,26.351651 -9.5772239,38.689939 -7.3188089,52.853443 c 1.3121372,3.557233 5.1594931,5.736537 3.5469054,3.023913 C -5.2668119,41.13775 4.074171,26.768338 16.331647,18.882186 26.358203,12.166207 51.245631,11.33198 62.552736,12.754631 c -2.966829,1.796597 -8.903253,4.354322 -11.826932,6.215404 -2.196537,1.830712 0.170086,3.544797 2.404891,1.3898 l 12.002383,-7.225142 z"
							}
							fill = {
								'black'
							}
							width={
								"16"
							}
							height={
								"16"
							}
							
							/>
                            <Circle
					
					y = {
						item.y
					}
					x = {
						item.x
					}
					radius = {
						20
					}
					fill = {
						'#4169E1'
					}
                    
					/>
                            
                      
                      <Circle
					
					y = {
						item.y
					}
					x = {
						item.x
					}
					radius = {
						30
					}
					stroke={
                    "black"
                    }
                    
					/>
                    
					
					
					<Text
					x = {
						item.x - 5
					}
					y = {
						item.y - 5
					}
					text = {
						item.dase
					}
					fontSize = {
						18
					}
					fontFamily = {
						'Calibri'
					}
					fill = {
						'#fff'
					}
					width = {
						100
					}
					/>
					</Group>);
                }
    else if(item.finale===true){
    
          return (
						<Group >
                            <Circle
					
					y = {
						item.y
					}
					x = {
						item.x
					}
					radius = {
						20
					}
					fill = {
						'#4169E1'
					}
                    
					/>
                            
                      
                      <Circle
					
					y = {
						item.y
					}
					x = {
						item.x
					}
					radius = {
						30
					}
					stroke={
                    "black"
                    }
                    
					/>
                    
					
					
					<Text
					x = {
						item.x - 5
					}
					y = {
						item.y - 5
					}
					text = {
						item.dase
					}
					fontSize = {
						18
					}
					fontFamily = {
						'Calibri'
					}
					fill = {
						'#fff'
					}
					width = {
						100
					}
					/>
					</Group>);
    
    
    }
    else if(item.ids===1) {
          return (
						<Group >
                    <Path
							x = {
								item.x-90
							}
							y = {
								item.y-20
							}
							data = {
								"M 66.297296,10.77079 C 67.644022,9.2325738 67.158373,11.468776 65.935368,10.315295 61.764081,11.221088 61.17258,6.6969185 57.249562,2.5855258 54.667813,0.83821915 51.949494,1.374816 54.226192,2.830833 l 7.538743,7.955917 C 46.991968,9.1202148 21.951423,6.2459188 11.144647,16.660249 0.78553532,26.351651 -9.5772239,38.689939 -7.3188089,52.853443 c 1.3121372,3.557233 5.1594931,5.736537 3.5469054,3.023913 C -5.2668119,41.13775 4.074171,26.768338 16.331647,18.882186 26.358203,12.166207 51.245631,11.33198 62.552736,12.754631 c -2.966829,1.796597 -8.903253,4.354322 -11.826932,6.215404 -2.196537,1.830712 0.170086,3.544797 2.404891,1.3898 l 12.002383,-7.225142 z"
							}
							fill = {
								'black'
							}
							width={
								"16"
							}
							height={
								"16"
							}
							
							/>
                            <Circle
					
					y = {
						item.y
					}
					x = {
						item.x
					}
					radius = {
						20
					}
					fill = {
						'#4169E1'
					}
                    
					/>
                            
                    
								
					<Text
					x = {
						item.x - 5
					}
					y = {
						item.y - 5
					}
					text = {
						item.dase
					}
					fontSize = {
						18
					}
					fontFamily = {
						'Calibri'
					}
					fill = {
						'#fff'
					}
					width = {
						100
					}
					/>
					</Group>);
    
    
    }
								
                    
return (
						<Group >
                  
                                
					<Circle
					key = {
						item.id
					}
					y = {
						item.y
					}
					x = {
						item.x
					}
					radius = {
						20
					}
					fill = {
						'#4169E1'
					}
					/>
					
					<Text
					x={
						item.x - 5
					}
					y={
						item.y - 5
					}
					text={
						item.dase
					}
					fontSize={
						18
					}
					fontFamily={
						'Calibri'
					}
					fill={
						'#fff'
					}
					width={
						100
					}
					/>
					</Group>);
				
			})
		}
                    {
                    //  une fois les sommet sont dessiné on va maintenat dessiner les arcs entre
                    // les différent sommets toutes en basant sur le tableau ArcsAFD situe dans appstore

                    }
                    {this.state.appstore.ArcsAFD.map(function(item) {
                      {
                        //cette variable rayon vient de resoudre le probleme que l'arc se part du
                        //centre de cercle mais on veut qu'il part du rayon de la cercle
                      }
                        const rayon = (SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].x <= SommetAFD[getIndex(item.Ari_Id,SommetAFD,'ids')].x)
                            ? 10
                            : -10;
                            {
                              // ici on effectue un test si l'arc est un self-arc ou non
                              // si il s'agit d'un self-arc on fait appel a des formes
                              // geomtriques different de celle de arc normale

                            }
                        if ((item.Dep_Id == item.Ari_Id)) {
                            return (
                                <Group>
                                    <Path x={SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].x - 20} y={SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].y - 55} data={'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z'} fill={'black'}/>
                                    <Text x={SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].x + 15} y={SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].y - 65} text={item.valeur} fontSize={25} fontFamily={'Calibri'} fill={'#4169E1'} width={100}/>
                                </Group>
                            );
                        }

                        return (
                            <Group>
                                <Arrow x={0} y={0} points={[
                                    SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].x + rayon,
                                    SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].y + rayon,
                                    SommetAFD[getIndex(item.Ari_Id,SommetAFD,'ids')].x - rayon,
                                    SommetAFD[getIndex(item.Ari_Id,SommetAFD,'ids')].y - rayon
                                ]} pointerLength={5} pointerWidth={3} stroke={'black'} strokeWidth={1}/>
                                <Text x={(SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].x + SommetAFD[getIndex(item.Ari_Id,SommetAFD,'ids')].x) / 2} y={(SommetAFD[getIndex(item.Dep_Id,SommetAFD,'ids')].y + SommetAFD[getIndex(item.Ari_Id,SommetAFD,'ids')].y) / 2} text={item.valeur} fontSize={15} fontFamily={'Calibri'} fill={'#4169E1'} width={100}/>
                            </Group>
                        );

                    })}
      
                </Layer>
            </Stage>
        </div> < /Col >)}}
