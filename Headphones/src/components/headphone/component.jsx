/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */ 
import { Codecs } from "../codecs/component";
import { HeadphoneDetails } from "../headphone-details/component";
import { Reviews } from "../reviews/component";

export const Headphone = ({headphone}) => {
    if (!headphone) {
        return null;
    }

    const {name, codecs, reviews} = headphone;

    return (
        <div>
            <h2>{name ? name : "NoName"}</h2> 
            <HeadphoneDetails headphone={headphone}/>

            {!!codecs?.length && (
            <div>
                <h3>Codecs</h3>
                <Codecs codecs={codecs}/>
            </div>
            )}

            <div>
                <h3>Reviews</h3>
                {reviews?.length ? <Reviews reviews={reviews}/> : "No reviews"}
            </div>
        </div>
    );
};   