import React,{Component} from 'react';
import '../App.css';
import useSrw from 'swr';
//import ReactMapGL, {Marker, flyToInterpolator} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken="pk.eyJ1IjoiYW1qaW1lbmV6diIsImEiOiJjazljOXBpZTMwMjFvM2hwM2l5ZmltZHk4In0.gWJxHBxwcnX-xEou6Oew7A"
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {

            lat: 6.241031,
            lng: -75.577698,
            width: '50vw',
            height: '50vh',
            zoom: 15,
        }

    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }
    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} />
            </div>

        );
    }
}

export default Map;
/*export default function Map(){



    const mapRef = useRef();
    return ( <ReactMapGL {...viewport} maxZoom={20} mapboxApiAccessToken="pk.eyJ1IjoiYW1qaW1lbmV6diIsImEiOiJjazljOXBpZTMwMjFvM2hwM2l5ZmltZHk4In0.gWJxHBxwcnX-xEou6Oew7A">
    {

    }
</ReactMapGL>)
}*/



