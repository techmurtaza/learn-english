const JsonArrayDisplay = ({ title, data, className }) => {
    if (!data) return null;
    const items = typeof data === 'string' ? JSON.parse(data) : data;
    return (
        <div className={className}>
            {title && <h5 className="font-medium text-flf-dark-light mb-1">{title}</h5>}
            {Array.isArray(items) ? (
                <ul className="list-disc pl-5">
                    {items.map((item, index) => (
                        <li key={index} className="text-flf-dark">{item}</li>
                    ))}
                </ul>
            ) : typeof items === 'object' ? (
                <div>
                    {Object.entries(items).map(([key, value], index) => (
                        <div key={index}>
                            <strong className="text-flf-dark-light">{key}:</strong>
                            {Array.isArray(value) ? (
                                <ul className="list-disc pl-5">
                                    {value.map((subItem, subIndex) => (
                                        <li key={subIndex} className="text-flf-dark">{subItem}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-flf-dark">{value}</p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-flf-dark">{items}</p>
            )}
        </div>
    );
};

export default JsonArrayDisplay;