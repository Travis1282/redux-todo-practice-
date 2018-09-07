import React from 'react'
import FilterLink from '../containers/FilterLink'
import { setVisibilityFilter } from '../actions'
import { VisibilityFilters } from '../actions'

const Header = ({onChangeSelect, value}) => (
  <div>
    <select 
      defaultValue = 'Active'  
      onChange= {(e) => onChangeSelect(e.target.value)}
    >
      Show:
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </select>
  </div>
)

const mapStateToProps = state => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onChangeSelect: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
  }


// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// })


export default Header