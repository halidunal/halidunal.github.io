import { ActionType, Action} from '../actions/modalActions'

export interface IModalState {
	open: string | boolean,
	title: string,
	data: any[] | boolean
}

const initialState: IModalState = {
	open: false,
	title: "",
	data: false
}

export default function modalReducer(state = initialState, action: Action): IModalState {
	switch(action.type){
		case ActionType.OPEN_MODAL: {
			return {
				...state,
				open: action.payload.open,
				title: action.payload.title,
				data: action.payload.data || false
			};
		}
        case ActionType.CLOSE_MODAL: {
			return {
				...state,
				open: false,
				title: "",
				data: false
			};
		}
		default: return state;
	}
}
