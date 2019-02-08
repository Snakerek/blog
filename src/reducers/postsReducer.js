const initialState = {
	post: 123
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_POSTS':
			return { ...state, ...payload };

		default:
			return state;
	}
};
