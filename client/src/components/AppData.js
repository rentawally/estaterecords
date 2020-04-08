import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import '../App.css';



class AppData extends Component {

    componentDidMount() {
        this.props.getItems();
    }


    render() {
        const { items } = this.props.item;  
        return(
            <div className="appdata">
            
          <Container>
           <ListGroup>
                {items.map(({ name }) => (
                   
                     <ListGroupItem className="wrapper">
                         {name}
                     </ListGroupItem>
                   
                ))}
            
           </ListGroup>
         
    
          </Container>  
</div>

           
          
        );
    }

}

AppData.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems })(AppData);