const InfoSection = ({ title, items }) => {
    return (
        <div>
            <h4 className="font-semibold text-flf-dark mb-2">{title}</h4>
            <div className="p-3 rounded-lg">
                {items.map(
                    (item, index) =>
                        item.value && (
                            <div key={index} className="mb-2">
                                <span className="font-medium text-flf-dark-light">
                                    {item.label}:{" "}
                                </span>
                                <span className="text-flf-dark">
                                    {item.value}
                                </span>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};
export default InfoSection;
