import updataObject from '../Utility/Utility'

export function singInSuccess (state,action) {
     return updataObject(state, {
          token: action.token,
          localId: action.localId,
          error: false
     })
}
