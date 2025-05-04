const SectionHeader = (props) => {
    const { name } = props;
    return (
        <>
            <h2 className="text-center fs-1 fw-bold" style={{ paddingTop: "6rem"}}>{name}</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <i className="fas fa-star" />
                </div>
                <div className="divider-custom-line"></div>
            </div>
        </>
    );
};

export default SectionHeader;
