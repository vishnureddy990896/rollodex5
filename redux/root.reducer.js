import { combineReducers } from "redux";
import { searchReducer } from "./monsters/monster.reducer";




 const rootReducer = combineReducers({
     search: searchReducer
 })

 export default rootReducer