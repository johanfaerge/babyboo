import React from "react";
import styles from "./Campaign.module.css"
import { ICampaign } from "../../models/ICampaign";



interface ICampaignProps {
    campaign: ICampaign;
}

const Campaign: React.FunctionComponent<ICampaignProps> = (props: React.PropsWithChildren<ICampaignProps>) => {


    return (
        <div className={styles.campaign}>
            <img className={styles.image} src={props.campaign.imgUrl}></img>
            <p>{props.campaign.date}</p>
            <div>
                <p>{props.campaign.name}</p>
                <div className={styles.campaignBtn}>
                    <p>Gå til kampagne</p>
                </div>
            </div>
        </div>
    );
}

export default Campaign;