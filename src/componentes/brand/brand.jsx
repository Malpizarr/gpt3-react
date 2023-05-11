import React from 'react';
import './brand.css';
import {Google, Shopify, Dropbox, Slack, Atlassian} from './imports';

const Brand = () => {
    return (
        <div className={"gpt3__brand section__padding"}>
            <div>
                <img src={Google} alt={Google}/>
            </div>
            <div>
                <img src={Atlassian} alt={Atlassian}/>
            </div>
            <div>
                <img src={Shopify} alt={Google}/>
            </div>
            <div>
                <img src={Dropbox} alt={Google}/>
            </div>
            <div>
                <img src={Slack} alt={Google}/>
            </div>
        </div>
    )
}
export default Brand
