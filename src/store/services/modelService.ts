import { Dispatch } from "redux";
import { ActionType, Action} from '../actions/modalActions';

export const openModal = (open: string, title: string, data: any) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({type: ActionType.OPEN_MODAL, payload: {open, title, data}})
	}
}

export const closeModal = () => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({type: ActionType.CLOSE_MODAL})
	}
}
