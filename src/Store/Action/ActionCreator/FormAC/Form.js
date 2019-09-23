import * as actionType from '../../ActionType';

export const handleCancle = (history) => ({
	type: actionType.CANCLE_BUTTON,
	goBack: history.goBack()
});
