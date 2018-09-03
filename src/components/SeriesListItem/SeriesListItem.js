import React from 'react';

const SeriesListItem = ({series}) => (
    <li key={series.show.id}>{series.show.name}</li>
)

export default SeriesListItem;