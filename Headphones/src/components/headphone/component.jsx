/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */ 
import { Codecs } from "../codecs/component";
import { Reviews } from "../reviews/component";

export const Headphone = ({headphone}) => {
    if (!headphone) {
        return null;
    }

    const {name, brand, type, maxVolume,codecs, reviews} = headphone;

    return (
        <div>
            <h2>{name ? name : "NoName"}</h2> 
            <div>
                <p>{brand}</p>
                <p>{type}</p>
                <p>{maxVolume}</p>
            </div>

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