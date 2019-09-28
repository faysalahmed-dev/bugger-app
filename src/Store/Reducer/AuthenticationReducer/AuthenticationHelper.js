import updataObject from '../Utility/Utility'

export function logout (state){
     return updataObject (state,{
          token: null,
          localId: null,
          error: false
     })
}

export function singInSuccess (state,action) {
     return updataObject(state, {
          token: action.token,
          localId: action.localId,
          error: false
     })
}

export function authRedirect (state,action) {
     return updataObject(state, {
          toPath: action.to
     })
}