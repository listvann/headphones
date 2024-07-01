import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneReviewsIds } from "../../headphone/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsByProductId = createAsyncThunk(
    "reviews/getReviewsByProductId",
    async (productId) => {
        const response = await fetch(
            'http://localhost:3001/api/reviews?productId=${productId}'
        );

        return response.json();
    },
    {
        condition: (productId, {getState}) => {
            const state = getState();
            const productReviewId = selectHeadphoneReviewsIds(state, productId);
            const reviewIds = selectReviewIds(state);

            return productReviewId.some((id) => !reviewIds.includes(id));
        },
    }
);