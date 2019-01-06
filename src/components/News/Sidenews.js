import React, {Component} from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';


class Sidenews extends Component{

    constructor(props){
        super(props);

        
        this.state = {
          sidenews: [],
          error: false,
        };
    }

    componentDidMount(){

        const url=`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d0b86fb00d44476badf654a8fa60add5`;
        
        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error)=> {
                this.setState({
                    error: true,
                })
            });
       
        }
    renderItems(){
        if(!this.state.error){
        return this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item} />
        
        ));
        
     }
        else{
            return <Error/>
            
            }
    }
    render(){
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}


export default Sidenews;