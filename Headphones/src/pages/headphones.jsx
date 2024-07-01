import {HeadphoneTabs} from "../components/headphone-tabs/component";
import {Outlet} from "react-router-dom";

export const HeadphonePage = () => {
    return (
        <div>
            <HeadphoneTabs/>
            <Outlet/>
        </div>
    );
};