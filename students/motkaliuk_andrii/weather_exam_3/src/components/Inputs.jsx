import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { useEffect } from 'react';
import AutoComplete from './AutoComplete';

function Inputs({ setQuery, units, setUnits }) {

    const [cityList, setCityList] = useState(
        () => {
            const data = JSON.parse(localStorage.getItem('autoCompleteList'));
            return data ? data : [];
        }
    );

    const [isShowAutocomplet, setIsShowAutocomplet] = useState(false);

    const searchInput = useRef();

    const [city, setCity] = useState('');

    const updateCityListCache = (newCity) => {
        if (!cityList.includes(newCity)) {
            setCityList([...cityList, newCity]);
        }
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    const addCityToAutoComplete = () => {
        if (!cityList.includes(city)) {
            setCityList(
                (currentData) => {
                    const newData = [
                        ...currentData,
                        city
                    ];
                    localStorage.setItem('autoCompleteList', JSON.stringify(newData));
                    return newData;
                }
            )
        }
    }

    const handleSearchClick = () => {
        if (city !== '') {
            setQuery({ q: city });
            addCityToAutoComplete();
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info('Fetching user location')
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success('Location fetched!')
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    useEffect(() => {
        console.log(searchInput)

    }, []);

    const showAutoComplete = () => {
        setIsShowAutocomplet(true)
    }

    const selectAutocompleteHeandler = (cityForAutocmplete) => {
        setCity(cityForAutocmplete)
        setQuery({ q: cityForAutocmplete })
    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center gap-4 relative'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                    placeholder='Search for city...'
                    ref={searchInput}
                    onFocus={showAutoComplete}
                    onBlur={() => { setTimeout(() => { setIsShowAutocomplet(false) }, 300) }}


                />
                <UilSearch
                    size={25}
                    className="text-white cursor-pointer transition ease-in-out hover:scale-125"
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-in-out hover:scale-125"
                    onClick={handleLocationClick} />

                {isShowAutocomplet ?
                    <div className="absolute top-full left-0 bg-white w-[81%] ">
                        <AutoComplete autoCompleteList={cityList} selectHeandler={selectAutocompleteHeandler} />
                    </div> : null}
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button
                    name='metric'
                    className='text-xl text-white font-light transition ease-in-out hover:scale-125'
                    onClick={handleUnitsChange}
                >°C
                </button>
                <p className='text-xl text-white mx-1'>|</p>
                <button
                    name='imperial'
                    className='text-xl text-white font-light transition ease-in-out hover:scale-125'
                    onClick={handleUnitsChange}
                >°F
                </button>

            </div>


        </div>
    )
}

export default Inputs
