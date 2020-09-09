import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BookPage, HousePage, BooksItem} from '../pages';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';


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
            <Router>
                <div className='app'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                { this.state.showRandomChar ? <RandomChar /> : null }                            
                                <Button 
                                    onClick={this.onClick}                                
                                    outline color="success" 
                                    size="lg" block>
                                    Toggle Random Character
                                </Button>{' '}
                                <br></br>
                            </Col>
                        </Row>

                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>
                            }
                        }/>

                    </Container>
                </div>
            </Router>

        );
    }
};