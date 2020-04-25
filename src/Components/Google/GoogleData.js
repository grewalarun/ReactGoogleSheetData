import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import SearchResults from 'react-filter-search';
import Form from 'react-bootstrap/Form';




class GoogleData extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sheetdata : [],
            isLoading :true,
            value: ''
         }
    }
    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };
    componentDidMount() {
        const sheetID = '1A0ELERdzzr24yOkZ_c9QG4Ll45qA7ancPA2V2a9Zc9k';
        axios({
          method: "GET",
          url:
            'https://sheets.googleapis.com/v4/spreadsheets/'+sheetID,
          headers: {
            
          },
          params: {
              key: 'AIzaSyD4pOR9W_o3SL7CqMqVkQnpduIsMidQnfk',
              includeGridData: true
          }
        })
          .then((response) => {
              console.log(response)
            this.setState({
              sheetdata: response.data.sheets[0].data[0].rowData,
              isLoading: false,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
       

    render() { 
        const isLoading = this.state.isLoading;
        const value = this.state.value;
        const sheetdata = this.state.sheetdata.slice(1);
        return ( 
         
            <Container>
  <div className="heading1"><h1>Oscar Award Winner Movies</h1></div>

  <Form.Group>
    <Form.Control type="text" placeholder="Search" value={value} onChange={this.handleChange}/>
  </Form.Group>

  {!isLoading? 
  <SearchResults
  value={value}
  data={sheetdata}
  renderResults={results => (
            <Row>
           {   results.map((d,i)=>
            <Col lg="4">
                <Card className="my-3">
  <Card.Img variant="top" src={ d.values[2].formattedValue} />
  <Card.Body>
    <Card.Title><strong>{d.values[0].formattedValue}</strong> ({d.values[1].formattedValue})</Card.Title>

  </Card.Body>
</Card>
                
             </Col>
            )
           }
           </Row>
           )}
           />
            :<div className="loading">Loading Data From Google Sheet</div>}
  
        
           </Container>
                             
         );
    }
}
 
export default GoogleData;