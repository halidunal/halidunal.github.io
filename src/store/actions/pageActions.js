export const ActionType = {
	CHOOSE_LANGUAGE: "CHOOSE_LANGUAGE",
}

export const chooseLanguage  = (language) => ({
	type: ActionType.CHOOSE_LANGUAGE,
	payload: language
})