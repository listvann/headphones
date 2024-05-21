/* eslint-disable react/no-unknown-property */ 
export const HeadphoneDetails = ({headphone}) => {
    if (!headphone) {
        return null;
    }

    const {brand, type, maxVolume} = headphone;

    return (
        <div>
            <div>
                <p>{brand}</p>
                <p>{type}</p>
                <p>{maxVolume}</p>
            </div>
        </div>
    );
};   