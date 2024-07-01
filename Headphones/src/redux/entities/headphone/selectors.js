export const selectHeadphoneModule = (state) => state.headphone;

export const selectHeadphoneIds = (state) => selectHeadphoneModule(state).ids;
export const selectHeadphoneById = (state, id) =>
    selectHeadphoneModule(state).entities[id];

export const selectHeadphoneReviewsIds = (state, id) =>
    selectHeadphoneById(state, id)?.reviews;