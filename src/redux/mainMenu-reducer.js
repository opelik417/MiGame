const START_GAME = "START_GAME";

const initialState = {
    gameOne: {
        gameStarted: false,
        text: 'gameOne'
    },
}

const mainMenuReducer = (state = initialState, action) =>{
    if(action.type === START_GAME){
        return{
            ...state,
            gameStarted: true,
        }
    }
    return state;
}


export const gameStarted = () =>({type: START_GAME});
export default mainMenuReducer;