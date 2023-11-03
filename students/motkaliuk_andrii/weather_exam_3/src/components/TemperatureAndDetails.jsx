import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTemperaturePlus,
    UilTemperatureMinus,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons';

function TemperatureAndDetails() {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Cloudy orfdfdf</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img
                    src="https://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className='w-20' />
                <p className='text-5xl'>34°</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className="mr-1" />
                        Real feel:
                        <span className='font-medium ml-1'>30°</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Himidity:
                        <span className='font-medium ml-1'>67%</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className='font-medium ml-1'>11 km/h</span>
                    </div>

                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
                <UilSun />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>06:45 AM</span>
                </p>

                <p className='font-light'>|</p>

                <UilSunset />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>08:35 PM</span>
                </p>

                <p className='font-light'>|</p>

                <UilTemperaturePlus />
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>35°</span>
                </p>

                <p className='font-light'>|</p>

                <UilTemperatureMinus />
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>13°</span>
                </p>
            </div>

        </div>
    )
}

export default TemperatureAndDetails
