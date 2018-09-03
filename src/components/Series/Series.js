import React, {Component} from 'react';
import SeriesList from '../SeriesList/SeriesList';

export default class Series extends Component{
    state = {
        series: []
      }
    
      componentDidMount(){
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        .then((response) => response.json())
        .then(json => this.setState({series:json}))
      }
    render(){
        return(
            <div>
                The amount of series': {this.state.series.length}
                <SeriesList list={this.state.series}/>
                </div>
        )
    }
}