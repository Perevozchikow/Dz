import React from "react";


import OneChannels from "../../img/Channels/1_channel.png";
import twoChannels from "../../img/Channels/2_x_2.png";
import RBKChannels from "../../img/Channels/green_cube.png";
import AmeChannels from "../../img/Channels/A.png";


const ChannelsArray = [
    {
        id: 1,
        headerName: "Первый канал",
        programs1: "13:00   Новости (с субтитрами)",
        programs2: "14:00   Давай поженимся",
        programs3: "15:00   Другие новости",
        namePng: OneChannels,
    },
    {
        id: 2,
        headerName: "2x2",
        programs1: "13:00   МУЛЬТ ТВ. Сезон 4, 7 серия",
        programs2: "14:00   ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
        programs3: "15:00   БУРДАШЕВ. Сезон 1, 20 серия",
        namePng: twoChannels,
    },
    {
        id: 3,
        headerName: "РБК",
        programs1: "13:00   ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
        programs2: "14:00   ДЕНЬ. Главные темы",
        programs3: "15:00   Главные новости",
        namePng: RBKChannels,
    },
    {
        id: 4,
        headerName: "AMEDIA PREMIUM",
        programs1: "13:00   Клиент всегда мёртв",
        programs2: "14:00   Голодные игры: Сойка-пересмешница. Часть I",
        programs3: "15:00   Секс в большом городе",
        namePng: AmeChannels,
    },
]

export default ChannelsArray