import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import { car } from "../../types";

type CarItemShortProps= {
  car: car
}

const blockname = 'car-item-short';

const CarItemShort = ({ car: {
  stockNumber,
  manufacturerName,
  modelName,
  color,
  mileage: { number: mileageNumber },
  fuelType,
  pictureUrl,
}}: CarItemShortProps): JSX.Element => (
  <div className={blockname} data-testid="carItemShort">
    <div className={`${blockname}__car-image-container`}>
      <Image
        className={`${blockname}__car-image`}
        src={pictureUrl}
        alt={`${manufacturerName} - ${modelName}`}
      />
    </div>
    <div className={`${blockname}__car-details`}>
      <h3 className={`${blockname}__car-title`}>{`${manufacturerName} ${modelName}`}</h3>
      <p className={`${blockname}__car-info`}>{`Stock # ${stockNumber} - ${mileageNumber} KM - ${fuelType} - ${color}`}</p>
      <Link className={`link ${blockname}__car-view-link `} to={`/car/${stockNumber}`}>View Details</Link>
    </div>
  </div>
);

export default CarItemShort;
