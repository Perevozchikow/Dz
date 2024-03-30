import React from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Tabs from "../../Component/Tabs/Tabs";
import Channels from "../../Component/Channels/Channels";
import ChannelsArray from "../../data/Local/Channels";




function TvPages() {
    return(
      <div className="container">
          <Header/>
          <main className="main_container">
              <Tabs/>
            <Channels ChannelsArray={ChannelsArray}/>
          </main>
          <Footer/>
      </div>
    )
}

export default TvPages