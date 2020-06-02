let initialState = {
    categoryList:[
        {displayName:'Gacci', name:'gacci_jewelery', description:'You got the bling at an affordable price!'},
        {displayName:'Noke', name:'Noke_shoes',description:'Are they fake or not? You will never know'}
    ],
    activeCategory:'',
    };
  
  export default (state = initialState, action) => {
    let { type, payload } = action;
  
    switch(type){
      case 'ACTIVE CATEGORY': 
        let categoryList = state.categoryList;
        let activeCategory = payload;
        return { activeCategory, categoryList };
      case 'RESET':
        console.log('reset');
        return initialState;
      default:
        return state;
    }
  }
  
  export const activeCategory = (name) => {
    return {
      type: 'ACTIVE CATEGORY',
      payload: name,
    }
  }
  
  export const reset = () => {
    return {
      type: 'RESET'
    }
  }