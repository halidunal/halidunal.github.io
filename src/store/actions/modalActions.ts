export enum ActionType {
	OPEN_MODAL = "OPEN_MODAL",
	CLOSE_MODAL = "CLOSE_MODAL"
}

interface OpenModal {
	type: ActionType.OPEN_MODAL,
	payload: any
}

interface CloseModal {
	type: ActionType.CLOSE_MODAL,
}

export type Action
 = OpenModal | CloseModal
