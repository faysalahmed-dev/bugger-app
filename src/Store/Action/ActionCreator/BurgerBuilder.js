import * as ActionType from '../ActionType';
import axios from '../../../axios/http'

export const addIngredient = ingredient => ({
     type: ActionType.ADD_INGREDIENT,
     ingredient
})
export const removeIngredient = ingredient => ({
     type: ActionType.REMOVE_INGREDIENT,
     ingredient
})

const ingredients = ingredients => {
     return {
          type: ActionType.FATCH_INGREDIENT,
          ingredients
     }
}
export const fatchIngredients = () => {
     return dispatch => {
          axios.get('/ingredients.json')
               .then((data) => { 
                    dispatch(ingredients(data.data))
               })
               .catch(() => {
                    dispatch(fatchFaild())
               })
     } 
}

export const fatchFaild = () => {
     return {
          type: ActionType.FATCH_FAILD,
     }
}