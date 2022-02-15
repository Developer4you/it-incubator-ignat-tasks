enum ACTIONS_TYPES {SWITCH_LOADING = 'ACTIONS_TYPES/SWITCH_LOADING'}

type LoadingStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false,
}

type SwitchLoadingActionCreationType = {
    type: ACTIONS_TYPES.SWITCH_LOADING
}

export const loadingReducer = (state = initState,
                               action: SwitchLoadingActionCreationType): LoadingStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPES.SWITCH_LOADING: {
            return state.isLoading?{isLoading:false}:{isLoading:true}
        }
        default: return state
    }
}

export const switchLoadingAC = (): SwitchLoadingActionCreationType => ({type: ACTIONS_TYPES.SWITCH_LOADING}) // fix any