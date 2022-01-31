import { monsterActionTypes } from "./monster.type";
export const INTIAL_STATE ={
    searchField: '',
    monsters:[],
    cratemonsters:[]
   
}

export const searchReducer=(state=INTIAL_STATE,action)=>{
    switch (action.type) {
        case monsterActionTypes.SEARCH_MONSTER:
            return{
                // existing state with rest operator
                ...state,
                searchField:action.payload
            }
        default:
           return state
    }

}