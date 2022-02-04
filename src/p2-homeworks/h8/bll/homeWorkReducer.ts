import { userType } from "../HW8"
type actionsType = {type:"sort", payload?: "up"|"down"} | {type:"check", payload:number}

export const homeWorkReducer = (state: Array<userType>, action: actionsType): Array<userType> => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => {
                if (a.name>b.name) return 1
                else if (a.name<b.name) return -1
                else return 0
            })
            return action.payload==="up" ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(e=>e.age>action.payload-1)
        }
        default: return state
    }
}