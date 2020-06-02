import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../../store/categories.js';


const ProductsView = props => {
  console.log('prods', props.products.productList);
  console.log('activeCat',props.categories.activeCategory);
  return (
    <section>
      <ul>
        {props.products.productList.filter((prod,ind, arr) => {
          if(prod.category === props.categories.activeCategory ||
            props.categories.activeCategory === ''){
            return prod;
          }
        }).map((item,index,array)=>{
          return <li key={index}>Get {item.displayName} for only ${item.price}</li>
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories
})

const mapDispatchToProps = { reset };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);