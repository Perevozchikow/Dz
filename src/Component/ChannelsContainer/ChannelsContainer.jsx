import React from "react";
import "./ChannelsContainer.css";


const ChannelsContainer = (props) => {
    return(
        <div className="channels_item" id={props.id}>
            <div className="img_channels">
                <img src={props.nameImg} alt=""/>
            </div>
            <div className="channels_info_text">
                <h3 className="title_channel">{props.headerName}</h3>
                <p className="channels_text channels_text_active"><span>{props.programs1}</span></p>
                <p className="channels_text"><span>{props.programs2}</span></p>
                <p className="channels_text"><span>{props.programs3}</span></p>
            </div>
        </div>
    )
}

export default ChannelsContainer