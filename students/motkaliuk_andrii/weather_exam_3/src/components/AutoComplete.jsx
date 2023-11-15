function AutoComplete({ autoCompleteList, selectHeandler }) {
    return (
        <ul>
            {autoCompleteList.map(
                (autoCompleteItem) => {
                    return <li className="p-2 cursor-pointer hover:bg-blue-300 border-b" key={autoCompleteItem} onClick={() => { selectHeandler(autoCompleteItem) }}>{autoCompleteItem}</li>
                }
            )}
        </ul>
    );
}

export default AutoComplete;
