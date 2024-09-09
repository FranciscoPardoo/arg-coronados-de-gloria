/* eslint-disable react/no-unknown-property */

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import argentina from '../assets/arg-geo.json';



const Provincias = () => {
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    return (
    <div className='hidden lg:block'>
        <div className="grid items-center h-screen relative">
            <ComposableMap
                className="w-full h-full"
                viewBox="145 365 160 110"
                projection="geoMercator"
                onMouseMove={(e) => {
                    setTooltipPosition({
                    x: e.clientX + 10,
                    y: e.clientY + 10,
                    });
                }}
            >
                <Geographies geography={argentina}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                    <Geography
                        key={geo.rsmKey}
                        id={geo.id}
                        geography={geo}
                        onMouseEnter={() => {
                        setTooltipContent(geo.properties.name); 
                        }}
                        onMouseLeave={() => {
                        setTooltipContent('');
                        }}
                        style={{
                        default: {
                            stroke: "#0086C0",
                            outline: "none",
                        },
                        hover: {
                            fill: "#0086C0",
                            outline: "none",
                        },
                        pressed: {
                            fill: "#E42",
                            outline: "none",
                        },
                        }}
                    />
                    ))
                }
                </Geographies>
            </ComposableMap>
            {tooltipContent && (
                <div
                style={{
                    position: 'absolute',
                    top: tooltipPosition.y,
                    left: tooltipPosition.x,
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '3px',
                    pointerEvents: 'none',
                    fontSize: '16px',
                }}
                >
                    {tooltipContent}
                </div>
        )}
            </div>
        </div>
    );
};

export default Provincias;

