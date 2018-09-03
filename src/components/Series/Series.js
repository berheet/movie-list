import React, {Component} from 'react';
import SeriesList from '../SeriesList/SeriesList';
import Loader from '../Loader/Loader';

export default class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isLoading: false
      }
    
    onSeriesInputChange = e => {
        this.setState({
            seriesName: e.target.value, isLoading: true
        })
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({series:json, isLoading:false}))
          console.log(e)
          console.log(e.target.value)
    }
    render(){
        const {series, seriesName, isLoading} = this.state;
        return(
            <div>
                <div> <input value = {seriesName} type='text' onChange={this.onSeriesInputChange}/></div>
                {!isLoading && series.length === 0 && seriesName.trim() === '' &&
                <p>Please enter a title name </p>
            
            }
            {!isLoading && series.length === 0 && seriesName.trim()  !== '' && <p>No series has been found by this name</p>}
            {isLoading && <p><Loader/></p>}
                <SeriesList list={this.state.series}/>
                </div>
        )
    }
}