import React, {Component} from 'react';
import './SeriesList.css'
import SeriesListItem from '../SeriesListItem/SeriesListItem';

const SeriesList = props => (
            <div>
                <ul className='series-list'>
                {props.list.map(series => (
                 <SeriesListItem series={series} key={series.show.id} />))}
                </ul>
                </div>
)

export default SeriesList;