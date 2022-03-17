import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { carById, favouriteCars } from "../../app/store";

import { getCarDetailsById } from "../../views/carDetails/carById.slice";
import { updateFavouriteCar, checkIfCarExistInFavourite } from "../../views/carDetails/favouriteCars.slice";

import Banner from "../../components/Banner";
import Button from "../../components/Button";
import SomethingWentWrong from "../somethingWentWrong/SomethingWentWrong";


const CarDetails= (): JSX.Element => {
    const blockname = 'car-details-container';
    let { carStockNumber } = useParams();
    const dispatch= useAppDispatch();
    const { car, isLoading, isError: carIdError }= useAppSelector(carById);
    const { isCarExistInFavourite }= useAppSelector(favouriteCars);
    const { stockNumber, manufacturerName, modelName, color, mileage, fuelType } = car;
    let description= "This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions."
    let mileageNumber = `${mileage.number} KM - `;
    const onFavoriteClick= () => {
        if (!isCarExistInFavourite) {
            carStockNumber && dispatch(updateFavouriteCar({
                carId:+carStockNumber, 
                type: 'save'
            }));
        }else {
            carStockNumber && dispatch(updateFavouriteCar({
                carId:+carStockNumber, 
                type: 'remove'
            }));
        }
    };
    
    useEffect(() => {
        if (carStockNumber) {
            dispatch(getCarDetailsById(+carStockNumber));
            dispatch(checkIfCarExistInFavourite({
                carId: +carStockNumber
            }));
        }
    },[carStockNumber, dispatch]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (carIdError) {
        return <SomethingWentWrong/>
    }
    return (
        <div className={blockname} data-testid="car-title">
        <Banner
        data-testid="car-title"
        />
        <div className={`${blockname}__car-info-container`} data-testid="carDetailsContainer">
                <div className={`${blockname}__car-info-main`}>
                    <h1 className={`${blockname}__car-title`} data-testid="car-title">
                    <span>{manufacturerName}</span>{' '} <span>{modelName}</span></h1>
                    <h3 className={`${blockname}__car-additional-info`}>
                    Stock # <span>{stockNumber}</span> - <span>{mileageNumber}</span><span>{fuelType}</span> - <span>{color}</span>
                    </h3>
                    <p className={`${blockname}__car-description`}>{description}</p>
                </div>

                <div className={`${blockname}__car-actions-container`}>
                    <div className={`${blockname}__car-actions`}>
                    <p className={`${blockname}__car-action-description`}>
                        If you like this car, click the button and save it in your collection for favorite items. 
                    </p>
                    <Button
                        onClick={ onFavoriteClick }
                        label={ isCarExistInFavourite ? 'Remove' : 'Save'}
                    />
                    </div>
                </div>
                </div>
    </div>
    );
}

export default CarDetails;