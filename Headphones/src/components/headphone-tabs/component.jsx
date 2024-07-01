import {useGetHeadphonesQuery} from "../../redux/service/api";
import {HeadphoneTab} from "../headphone-tab/component";

import styles from ".styles.module.css";

export const HeadphoneTabs = () => {
    const {data: headphones, isLoading} = useGetHeadphonesQuery();

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!headphones) {
        return null;
    }

    return (
        <div className={styles.root}>
            {headphones.map((headphone) => (
                // eslint-disable-next-line react/jsx-key
                <HeadphoneTab headphone={headphone} className={styles.tab}/>
            ))}
        </div>
    );
};