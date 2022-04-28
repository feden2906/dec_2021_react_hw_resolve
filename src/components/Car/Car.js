const Car = ({car: {id, model, price, year}}) => {
    return (
        <div>
            {id} -- {model} -- {price} -- {year}
        </div>
    );
};

export {Car};
