/* eslint-disable react/jsx-key */
export const Headphone = ({headphone}) => {
        <div>
            <div>{headphone.name}</div> 
            <div>
                <h3>Codecs</h3>
                <ul>
                    {headphone.codecs.map(codec => (
                        <li>{codec}</li>
                    ))}
                </ul>
            </div>
        </div>
};  