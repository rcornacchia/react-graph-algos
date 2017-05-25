export const argumentsReducer = (state = { 
    forArgs: [],
    againstArgs: [],
}, action) => {
    switch (action.type) {
        case 'LOAD_ARGUMENTS':
            const { forArgs, againstArgs } = action.args;
            return {
                forArgs,
                againstArgs
            }
        case 'VOTE':
            
        default:
            return state;
    }
}

export default argumentsReducer;