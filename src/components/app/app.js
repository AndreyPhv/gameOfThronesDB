import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            hide: false,
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick = ({hide}) => {

        this.setState({            
            hide : !this.state.hide,
        })
    }

    
    render() {
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            { !this.state.hide ? <RandomChar/> : null }                            
                            <Button 
                                onClick={this.onClick}                                
                                outline color="success" 
                                size="lg" block>
                                Button
                            </Button>{' '}
                            <br></br>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};