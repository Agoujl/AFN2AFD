//importation des différent packages necéssaire pour le bon fonctionnement del'application
import React, {
  Component
} from 'react';
import {
  Button,
  Grid,
  Row,
  Col,
  Clearfix
} from 'react-bootstrap';
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
    //un appel des elements de appstore qui contient les données de notre petite application il s'agit
    //"(d'une base de données )"
    this.state = {
      appstore: AppStore.getAll()
    };
  }
  createSommet(e) {
    if (this.state.appstore.enableCreation == true) {
      appactions.createSommet(e.nativeEvent.offsetX, e.nativeEvent.offsetY, this.state.appstore.TEST_FINALE);
    }
  }
  render() {
    var style_AFN = (this.state.appstore.enableCreation) ?
      "subContainer_AFN" // background:rose;
      :
      "subContainer"; // background:default;
    let Sommet = this.state.appstore.Sommet; // une variable qui contient array des sommets
    return (
      <Col
			xs = {
				12
			}
			md = {
				6
			}
			onClick = {
				this.createSommet.bind(this)
			} >
			<div
				 className = {
				style_AFN
			}
			>
			<h2 > AFN < /h2>
			<Stage
				   width = {
				500
			}
					height = {
				500
			}
			>
			<Layer >
				
            {
				this.state.appstore.Sommet.map(function(item){
                    if (item.id===1 && item.finale===true) {
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
						item.id
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
						item.id
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
    else if(item.id===1) {
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
						item.id
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
						item.id
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
				this.state.appstore.Arcs.map(function(item) {
					
					const rayon=(Sommet[item.Dep_Id - 1].x <= Sommet[item.Ari_Id - 1].x) ?
						15 :
						-15;
						
					if ((item.Dep_Id === item.Ari_Id)) {
						return ( 
							<Group>
							<Path
							x={
								Sommet[item.Dep_Id - 1].x - 20
							}
							y={
								Sommet[item.Dep_Id - 1].y - 55
							}
							data={
								'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z'
							}
							fill = {
								'black'
							}
							/>
							<Text
							x={
								Sommet[item.Dep_Id - 1].x + 15
							}
							y={
								Sommet[item.Dep_Id - 1].y - 65
							}
							text={
								item.value
							}
							fontSize={
								25
							}
							fontFamily={
								'Calibri'
							}
							fill={
								'#4169E1'
							}
							width={
								100
							}
							/>
							</Group>
						);
					}
					return (
					<Group >
						<Arrow
						x={
							0
						}
						y={
							0
						}
						points = {
							[
								Sommet[item.Dep_Id - 1].x + rayon,
								Sommet[item.Dep_Id - 1].y + rayon,
								Sommet[item.Ari_Id - 1].x - rayon,
								Sommet[item.Ari_Id - 1].y - rayon
							]
						}
                        tension={
                        3
                        }
						pointerLength = {
							5
						}
						pointerWidth = {
							6
						}
						stroke = {
							'black'
						}
						strokeWidth = {
							3
						}
						/>
						<Text
						x = {
							(Sommet[item.Dep_Id - 1].x + Sommet[item.Ari_Id - 1].x) / 2
						}
						y = {
							(Sommet[item.Dep_Id - 1].y + Sommet[item.Ari_Id - 1].y) / 2
						}
						text = {
							item.value
						}
						fontSize = {
							25
						}
						fontFamily = {
							'Calibri'
						}
						fill = {
							'#4169E1'
						}
						width = {
							100
						}
						/>
						</Group>
					);

				})
			}
			</Layer>
			</Stage>
			</div>
			</Col>
    );
  }
}
