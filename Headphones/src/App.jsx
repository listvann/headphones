import { Layout } from "./components/layout/component";
import { headphones } from "./constants/mock";
import { Headphone } from './components/headphone/component';
import { useState } from "react";
import { HeadphoneTabs } from "./components/headphone-tabs/component";

/* const getSavedCurrentHeadphoneIndex = () =>
  Number(localStorage.getItem("currentHeadphoneIndex")); */

export const App = () => {
  const [currentHeadphoneIndex, setCurrentHeadphoneIndex] = useState(0);
  const currentHeadphone = headphones[currentHeadphoneIndex];

  return (
    <Layout>
      <HeadphoneTabs
        headphones={headphones}
        currentIndex={currentHeadphoneIndex}
        onTabClick={setCurrentHeadphoneIndex} />
      {currentHeadphone && <Headphone headphone={currentHeadphone} />}
    </Layout>
  );
};
