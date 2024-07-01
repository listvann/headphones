/* eslint-disable react/jsx-key */
import { Review } from "../review/component"
import {useGetReviewsQuery} from "../../redux/service/api";

export const Reviews = ({headphoneId}) => {
    const {data: reviews, isFetching} = useGetReviewsQuery(headphoneId);

    if (isFetching) {
        return <div>Loading</div>;
    }
    
    if (!reviews?.length) {
        return null;
    }
    
    return (
        <ul>
            {reviews.map(review => (
                <li>
                    <Review review={review}/>
                </li>
            ))}
        </ul>
    );
};