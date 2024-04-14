/* eslint-disable react/jsx-key */
import { Codec } from "../codec/component"

export const Codecs = ({codecs}) => {
    return (
        <ul>
            {codecs.map ((codec) => (
                <li>
                     <Codec codec={codec} />
                </li>
            ))}
        </ul>
    );
};