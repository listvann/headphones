/* eslint-disable react/no-unknown-property */ 
export const HeadphoneDetails = ({headphone}) => {
    if (!headphone) {
        return null;
    }

    const {brand, type, maxVolume} = headphone;

    return (
        <ul>
            <li>{brand}</li>
            <li>{type}</li>
            <li>{maxVolume}</li>
        </ul>
    );
};   