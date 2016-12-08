import React, {Component} from 'react';
import {Button, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import './App.css';
import {Layer, Rect, Stage} from 'react-konva';
import Tools from './Tools';
import AFN from './AFN';
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
        AppStore.on("change", () => {
            this.setState({appstore: AppStore.getAll()});
        });
    }

    render() {

        return (
            <div className="AppContainer">
                <Grid>

                    <Row className="show-grid">
                        <Tools/>
                        <AFN/>
                        <Col xs={12} md={4}>
                            <h1>AFD</h1>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}
