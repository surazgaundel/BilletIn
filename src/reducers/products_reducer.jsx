


const products_reducer=(state,action)=>{
    switch(action.type){
        case 'OPEN_SIDEBAR':
                return {...state,isSidebarOpen:true};
        case 'CLOSE_SIDEBAR':
                return {...state,isSidebarOpen:false};
        case 'TOGGLE_SIDEBAR':
                return {...state,isSidebarOpen:!state.isSidebarOpen};
        default:
            return state;
    }

}

export default products_reducer;