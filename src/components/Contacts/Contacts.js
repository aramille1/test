import React, { useState, useRef } from "react";
import {
    YMaps,
    Map,
    Placemark,
    GeolocationControl,
    Clusterer,
} from "react-yandex-maps";

import Header from '../Header/Header'
// import { AiFillGift } from "react-icons/ai";
import './contacts.scss'

const mapState = {
    center: [43.247179, 76.925628],
    zoom: 13
};




export default function Contacts() {
    const [cluster, setCluster] = useState(null);
    const objectManager = useRef(null);


    return (
        <div className="App">
            <Header />
            <YMaps>
                <Map
                    width='100%'
                    height={500}
                    defaultState={mapState}
                    instanceRef={ref => {
                        if (ref) {
                            ref.events.add("click", e => {
                                ref.balloon.close();
                            });
                        }
                    }}
                >
                    <GeolocationControl />
                    <Clusterer
                        modules={["clusterer.addon.balloon"]}
                        options={{}}
                        instanceRef={ref => {
                            if (ref) {
                                setCluster(ref);
                            }
                        }}
                    >
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[43.264165, 76.929910]}
                            properties={{
                                balloonContentHeader: "«Mega Park Алматы».",
                                balloonContent: "Maqataev kóshesi, 127/1 Almaty, Kazakhstan"
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: 'https://icon-library.com/images/purchase-icon-png/purchase-icon-png-8.jpg',
                                iconImageSize: [40, 42],
                                iconImageOffset: [-5, -38]
                            }}
                        />
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            geometry={[43.230582, 76.945995]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: 'https://banner2.cleanpng.com/20190613/rae/kisspng-drawing-pin-clip-art-portable-network-graphics-tra-mailing-address-pinboard-logo-765x72-png-cl-5d02e20503e761.661264191560470021016.jpg',
                                iconImageSize: [40, 42],
                                iconImageOffset: [-5, -38]
                            }}
                        />
                    </Clusterer>
                </Map>
            </YMaps>
        </div>
    )
}

