let initialState = {

    productList:[
      {category: 'noke_shoes', displayName: 'Skate time', description: 'They will make you turn into tony hawk', price: 43.70, inventoryCount: 12,},
      {category: 'noke_shoes', displayName: 'Air moxxes', description: 'You can jump! but not like michael', price: 35.60, inventoryCount: 28,},
      {category: 'gacci_jewelry', displayName: 'Gold Rain', description: 'Make it rain!', price: 70.30, inventoryCount: 14,},
      {category: 'gacci_jewelry', displayName: 'Ice Ice Baby', description: 'even vanilla ice would wear this', price: 80.40, inventoryCount: 17,},
      {category: 'gacci_jewelry', displayName: 'Fake News', description: 'not at all real', price: 1.00, inventoryCount: 74,}
    ],
  };
  
  export default (state = initialState, action) => {
    let { type, payload } = action;
  
    switch(type){
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }