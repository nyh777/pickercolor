var redux =  require('redux');

const oldState = {
    color: "red",
    size : 12,
    colors: ["red","green","blue","grey"]
}
const reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case 'colorpicker':
            return {...state,color:action.color};
        case 'SizeSettingSub':
            return {...state,size:state.size-2<=8?8:state.size-2}
        case 'SizeSettingAdd':
            return {...state,size:state.size+2>=20?20:state.size+2}
        case 'Reset':
            return {...state,color:'red',size:12}
        default:
            return state;
    }
}

var store1 = redux.createStore(reducer1)
store1.subscribe((  ) => {
    console.log(store1.getState());
    
})
export default store1;