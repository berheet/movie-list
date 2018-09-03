import React, {Component} from 'react';
import SeriesList from '../SeriesList/SeriesList';

export default class Series extends Component{
    state = {
        series: []
      }
    
    onSeriesInputChange = e => {
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({series:json}))
          console.log(e)
          console.log(e.target.value)
    }
    render(){
        return(
            <div>
                The amount of series': {this.state.series.length}
                <div> <input type='text' onChange={this.onSeriesInputChange}/></div>
                <SeriesList list={this.state.series}/>
                </div>
        )
    }
}