import React from 'react';
import { connect } from 'react-redux';
import { activeCategory, reset } from '../../store/categories.js';
// import './categories.scss';

const CategoriesView = props => {
  
  return (
    <section>
      <ul>
        {props.categories.categoryList.map((categoryObj, ind, arr) => {
          return <li 
          key={ind} 
          onClick={() => props.activeCategory(categoryObj.name)} 
          className={categoryObj.name === props.categories.activeCategory ? 'active' : 'notActive' }>
          {categoryObj.displayName}
          </li>
        })}
      </ul>
      <button onClick={() => props.reset()}>Reset</button>
    </section>
  )
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps ={ activeCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView);