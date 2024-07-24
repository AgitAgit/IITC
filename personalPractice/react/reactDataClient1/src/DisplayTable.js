
function DisplayTable({ data }) {
    const entries = [...data];
    const strEntries = [];
    const keys = Object.keys(entries[0]);

    for (let i = 0; i < entries.length; i++) {
        let values = Object.values(entries[i]);
        let text = [];
        for (let j = 0; j < keys.length; j++) {
            text.push(`${values[j]}`);
        }
        strEntries.push(text);
    }

    return (
        <div className="scrollable-list">
            <table className="text-client-table">
                <thead>
                    <tr>
                        {keys.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {strEntries.map((entry) => (
                        <tr>
                            {entry.map((text) => (
                                <th>{text}</th>
                            ))}

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayTable;