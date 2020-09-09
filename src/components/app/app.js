import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService';


export default class App extends Component {
    gotService = new  gotService();

    state = {
            showRandomChar: true,
            error: false,
        }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    
    onClick = () => {
        this.setState({            
            showRandomChar : !this.state.showRandomChar,
        })
    }



    
    render() {
        
        if (this.state.error) {
            return <ErrorMessage/>            
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            { this.state.showRandomChar ? <RandomChar/> : null }                            
                            <Button 
                                onClick={this.onClick}                                
                                outline color="success" 
                                size="lg" block>
                                Button
                            </Button>{' '}
                            <br></br>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected} 
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => item.name}/>
                            {/* renderItem={(item) => (<><span>{item.name}</span><button>Click me</button></>)}/> */}
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected} 
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};