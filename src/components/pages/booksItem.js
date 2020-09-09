import React, {Component} from 'react';
import CharDetails, {Field} from '../charDetails';
import gotService from '../../services/gotService';


export default class BooksItem extends Component {
    gotService = new  gotService();


    render() {
        return(
            <CharDetails 
                    charId={this.props.bookId}
                    getDataAbout={this.gotService.getBook}>
                <Field field='authors' label='Authors'/>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='country' label='Country'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )
    }
}