import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { useEffect } from 'react';
import AutoComplete from './AutoComplete';
import getWeatherData from '../services/weatherService'

function Inputs({ setQuery, units, setUnits }) {

    const [cityList, setCityList] = useState(
        () => {
            const data = JSON.parse(localStorage.getItem('autoCompleteList'));
            return data ? data : [];
        }
    );

    const [isShowAutocomplete, setIsShowAutocomplet] = useState(false);

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
    //пробував цей код замість того що вище, але тоді там помилки вискакують

    // const addCityToAutoComplete = async () => {
    //     if (city !== '' && !cityList.includes(city)) {
    //         try {
    //             const response = await getWeatherData('weather', { q: city });
    //             if (response.cod === 200) {
    //                 setCityList((currentData) => {
    //                     const newData = [...currentData, city];
    //                     localStorage.setItem('autoCompleteList', JSON.stringify(newData));
    //                     return newData;
    //                 });
    //             } else {
    //                 toast.error('Invalid city. Please try again.');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             toast.error('An error occurred. Please try again later.');
    //         }
    //     }
    // };


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
        // console.log(searchInput)

    }, []);

    const showAutoComplete = () => {
        setIsShowAutocomplet(true)
    }

    const selectAutocompleteHandler = (cityForAutocmplete) => {
        setCity(cityForAutocmplete)
        setQuery({ q: cityForAutocmplete })
    }

    const removeAutocompleteHandler = (cityToRemove) => {
        const updatedList = cityList.filter((item) => item !== cityToRemove);
        setCityList(updatedList);
        localStorage.setItem('autoCompleteList', JSON.stringify(updatedList));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4  items-center justify-center gap-4 relative'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    onKeyPress={handleKeyPress}
                    type="text"
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded'
                    placeholder='Search for city...'
                    ref={searchInput}
                    onFocus={showAutoComplete}
                    onBlur={() => { setTimeout(() => { setIsShowAutocomplet(false) }, 300) }}
                />

                {isShowAutocomplete ? (
                    <div className="absolute top-full left-0 bg-white w-[100%]">
                        <AutoComplete
                            autoCompleteList={cityList}
                            selectHandler={selectAutocompleteHandler}
                            removeHandler={removeAutocompleteHandler}
                        />
                    </div>
                ) : null}
            </div>

            <div className='flex flex-row items-center justify-center gap-4 relative px-2'>
                <UilSearch
                    size={20}
                    className="text-white cursor-pointer transition ease-in-out hover:scale-125"
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={20}
                    className="text-white cursor-pointer transition ease-in-out hover:scale-125"
                    onClick={handleLocationClick} />
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
