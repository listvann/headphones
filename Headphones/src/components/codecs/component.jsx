import {useGetCodecsQuery} from "../../redux/service/api";
import { Codec } from "../codec/component"

export const Codecs = ({headphoneId}) => {
   const {data: codecs, isFetching} = useGetCodecsQuery(headphoneId);

   if (isFetching) {
    return <div>Loading</div>
   }

   if (!codecs.length) {
    return null;
   }
   
    return (
        <ul>
            {codecs.map ((codec) => (
                // eslint-disable-next-line react/jsx-key
                <li>
                     <Codec codec={codec} />
                </li>
            ))}
        </ul>
    );
};