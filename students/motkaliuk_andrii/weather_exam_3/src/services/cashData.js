const timeOffset = 3600 * 1000;

const isTimeout = (time) => {
    console.log(time)
    console.log(Date.now())
    console.log(timeOffset)
    return (Date.now() - time) < timeOffset;
}

const cashData = (key, data) => {

    if (!data) {
        const localStorageData = JSON.parse(localStorage.getItem(key));
        return localStorageData && localStorageData.data && isTimeout(localStorageData.time) ? localStorageData.data : null;
    };

    localStorage.setItem(key, JSON.stringify({ data, time: Date.now() }));
}

export default cashData;
