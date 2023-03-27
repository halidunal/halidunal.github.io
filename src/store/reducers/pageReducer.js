import { ActionType } from '../actions/pageActions'

const initialState = {
    language: "tr",
}

export default function pageReducer(state = initialState, action){   
	switch(action.type){
		case ActionType.CHOOSE_LANGUAGE: {
			return {
                ...state,
				language: action.payload,
			};
		}
		default: return state;
	}
}