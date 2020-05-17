import React, { Component } from 'react';
import Banner from "./Banner"
import SearchForm  from "./SearchForm";
import Container from './Container';
import Col from "./Col"
import Row from "./Row"

class AppContainer extends Component {
    state = {  
        result: {},
        search: ""
    }
    render() { 
        return ( 
                <Container>
                    <Row>
                        <Col size="md-8">

                            <Banner>
        
                            </Banner>
        
                        </Col>

                        <Col>

                        <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        />

                        </Col>
                    </Row>
                </Container>
                );
            };
        };
 

export default AppContainer;
