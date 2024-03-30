import React from "react";
import "./Channels.css";
import ChannelsContainer from "../ChannelsContainer/ChannelsContainer";



const Channels = ({ChannelsArray}) => {
    return(
        <div className="channels">
            {ChannelsArray.map(el => {
                return(
                    <ChannelsContainer
                    id={el.id}
                    headerName={el.headerName}
                    programs1={el.programs1}
                    programs2={el.programs2}
                    programs3={el.programs3}
                    nameImg={el.namePng}
                    />
                )
            })}
        </div>
    )
}

export default Channels