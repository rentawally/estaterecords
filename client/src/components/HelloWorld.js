import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppData from '../components/AppData';
import EstateRecordPlayer from '../components/EstateRecordPlayer';
import '../App.css';

const PosterPlate = require('../images/poster.plate.jpg');
const FileWally = require('../images/file.wally.jpg');
const Fridge = require('../images/fridge.left.jpg');

class HelloWorld extends React.Component {
  render() {
    return (
      <Grid fluid>
         <Row around="xs">
          <div className="top-container">
          <Col xs={6} md={3}>
          <NavbarBrand>
          <h4>Estate Records</h4><br />
          <img src={PosterPlate} />
          </NavbarBrand>
          
          </Col></div>
          <div className="top-box top-box-a">
          <Col>
            <h4>Music Player</h4>
            <EstateRecordPlayer />
            <img src={FileWally} />
          </Col><br /></div>
        <div className="top-box top-box-a">
          <Col>
          <h4>TB-A</h4>
          <p>MERN</p>
            <p>Redux</p>
            <p>Google Analytics</p>
            <p>Blog</p>
            <img src={Fridge} />
          </Col></div>
          <div className="top-box top-box-b">  
          <Col>
          <h4>TB-B</h4>
          <AppData />
          </Col></div>
        </Row> 
      </Grid>
    );
  }
}
// https://www.npmjs.com/package/react-flexbox-grid
export default HelloWorld;