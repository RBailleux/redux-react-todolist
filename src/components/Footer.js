import React from 'react'
import FilterButton from '../containers/FilterButton'

const Footer = () => (
  <p>
    Filtres :
    <FilterButton filter="SHOW_ALL">
      Tous
    </FilterButton>
    <FilterButton filter="SHOW_COMPLETED">
      Terminé
    </FilterButton>
    <FilterButton filter="SHOW_ACTIVE">
      A faire
    </FilterButton>
  </p>
)

export default Footer
