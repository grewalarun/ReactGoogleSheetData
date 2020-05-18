import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            year: '',
            poster: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({
            movie: event.target.formMovieName.value,
            year: event.target.formMovieYear.value,
            poster: event.target.formPoster.value
        });


        axios({
            method: "Post",
            url:
              //'https://sheets.googleapis.com/v4/spreadsheets/1A0ELERdzzr24yOkZ_c9QG4Ll45qA7ancPA2V2a9Zc9k'
              'https://sheets.googleapis.com/v4/spreadsheets/1A0ELERdzzr24yOkZ_c9QG4Ll45qA7ancPA2V2a9Zc9k/values/A1:append?',
              headers: { 'Content-Type': 'application/json' },
             
            params: {
                // spreadsheetId: '1A0ELERdzzr24yOkZ_c9QG4Ll45qA7ancPA2V2a9Zc9k',
                // range: 'Sheet1',
                // apiKey: 'AIzaSyD4pOR9W_o3SL7CqMqVkQnpduIsMidQnfk',
                valueInputOption:'USER_ENTERED',
                responseDateTimeRenderOption:'FORMATTED_STRING',
                includeValuesInResponse:'true',
                responseValueRenderOption:'FORMATTED_VALUE',
                insertDataOption:'INSERT_ROWS',
                alt:'json',
                access_token:'ya29.a0Ae4lvC3LDWYPihU60gVX7SixTyZHpOvV_rxb3TRRlNmC7qFJtlsJQSLg_vLKlWlHyRDB9YYyRV8HGhSOfdOF4lpAdqxbITpy50--X-ujB_J3UlH9C8MuOgqBYhssKTmQ6ewoiXwkJ_J9PSiqGu30x_JoaHjOwZZUAAc',
                // // access_token: "ya29.a0Ae4lvC2ttBHhmTMmzF8EWtYwRCekuH8QTN2oneWjZAB7x5wO-FnKj6u8LMisxaVuiiXr24BGSuW3zUqnaTvvmDScBNNE3vkjOR8AyN489DsNAO04uS1zj_uczNba6xldWeHR40-1bH5knjdkiPRA9yXJyYRq1rP_WY692L_3xlE",
                // values: [
                //     "BBB",
                //     2020,
                //     "url or link"
                //   ]
                
            },
            data: { majorDimension: "ROWS", range: "A1", values: [[event.target.formMovieName.value,event.target.formMovieYear.value,event.target.formPoster.value]] }
            
          })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
              console.log(error);
            });

        event.preventDefault();
      }

    render() { 
        return ( 

<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formMovieName">
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="text" placeholder="Movie Name" required/>
  </Form.Group>

  <Form.Group controlId="formMovieYear">
    <Form.Label>Release Year</Form.Label>
    <Form.Control type="text" placeholder="Release Year" required/>
  </Form.Group>

  <Form.Group controlId="formPoster">
    <Form.Label>Poster URL</Form.Label>
    <Form.Control type="text" placeholder="Poster Url" required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

         );
    }
}
 
export default AddNew;