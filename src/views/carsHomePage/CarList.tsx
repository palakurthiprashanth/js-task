import CarItemShort from './CarItemShort';
import Placeholder from '../../components/Placeholder';
import { cars } from "../../types";
const blockname = 'car-list';

type CarListProps= {
  cars: cars,
  showPlaceholderBlocks: boolean
}

const CarList = ({cars, showPlaceholderBlocks}: CarListProps): JSX.Element => {

  const getPlaceholders = () => {
    let placeholders: JSX.Element[] = [];

    for (let i = 0; i < 10; i++) {
      placeholders.push(<Placeholder key={i} />);
    }

    return placeholders;
  }

  const getCars = () => {
    let carElms = cars.map(car => (
      <CarItemShort
        key={car.stockNumber}
        car={car}
      />
    ))
    return carElms;
  }

  return (
    <div className={blockname}>
      <div className={`${blockname}__cars`}>
        { showPlaceholderBlocks ? getPlaceholders() : getCars() }
      </div>
    </div>
  );
};


export default CarList;
