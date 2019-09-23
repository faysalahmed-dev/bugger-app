import * as actionType from '../../Action/ActionType';
import updataObject from '../Utility/Utility'
import { addIngredients, removeIngredients, fatchIng} from './BurgerBuilderHelper'

const initialState = {
     ingredients:null,
     price: 3.1,
     error: false
}

const burgerBuilderReducer = (state = initialState, action) => {
     // eslint-disable-next-line default-case
     switch (action.type) {
          case actionType.ADD_INGREDIENT:
              return addIngredients(state, action)
          case actionType.REMOVE_INGREDIENT:
               return removeIngredients(state, action)
          case actionType.FATCH_INGREDIENT:
              return fatchIng(state, action)
          case actionType.FATCH_FAILD : 
               return updataObject(state, {error: true})
     }
     return state;
}
export default burgerBuilderReducer;