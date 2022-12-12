const aproximatePrice = (price) => {
    if ((price | 0) < price) {
        return (price | 0) + 1;
    } return price;
};

export default aproximatePrice;
