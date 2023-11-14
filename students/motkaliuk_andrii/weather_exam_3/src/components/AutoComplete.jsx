function AutoComplete({ autoCompleteList, selectHeandler }) {
    return (
        <ul>
            {autoCompleteList.map(
                (autoCompleteItem) => {
                    return <li onClick={() => { selectHeandler(autoCompleteItem) }}>{autoCompleteItem}</li>
                }
            )}
        </ul>
    );
}

export default AutoComplete;
