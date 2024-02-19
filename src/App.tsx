import React from "react";
import styles from "./App.module.css"
import UserProductData from "./components/UserProductData/UserProductData";
import { ICampaign } from "./models/ICampaign";
import Campaign from "./components/Campaign/Campaign";



interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props: React.PropsWithChildren<IAppProps>) => {
    const [campaigns, setCampaigns] = React.useState<ICampaign[]>([]);

    React.useEffect(() => {
        setCampaigns([
            {
                date: "August 2022",
                name: "CLASSIC SENGE OG SKABE",
                imgUrl: "./img1.avif"
            },
            {
                date: "Oktober 2022",
                name: "WALLY PUSLEBORDE",
                imgUrl: "./img2.avif"
            },
            {
                date: "December 2022",
                name: "ALLE TEKSTILER",
                imgUrl: "./img3.avif"
            },
        ])
    }, [])

    return (
        <div className={styles.appContainer}>
            <div className={styles.appContent}>
                <h1>VELKOMMEN BABYBOB A/S</h1>

                <UserProductData />


                <h3>Kampagner</h3>
                <div className={styles.campaignsContainer}>
                    {campaigns?.map((campaign) => {
                        return <Campaign campaign={campaign} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;