import  { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { allCars, allCarColors, allCarManufacturers } from "../../app/store";
import { getCarsByPage } from "./slices/carsContainer.slice";
import { getAllCarColors  } from "./slices/carsColor.slice";
import { getAllCarManufacturers } from "./slices/carManufacturers.slice";

import CarList from "./CarList";
import CarListHeader from "./CarListHeader";
import SideFilter from "../../components/SideFilter";
import Pagination from "../../components/Pagination";
import SomethingWentWrong from "../somethingWentWrong/SomethingWentWrong";


type Option= {
  text: string,
  value: string
}

const CarsContainer = (): JSX.Element => {
    const blockname = 'cars-container';
    const [colorFilter, setColorFilter]= useState("");
    const [manufacturerFilter, setManufacturerFilter]= useState("");
    const [sortBy, setSortBy]= useState("");
    const [currentPage, setCurrentPage]= useState(1);
    const [, setSearchParams] = useSearchParams();

    const dispatch= useAppDispatch();

    const sortOptions = [
        { text: 'None', value: '' },
        { text: 'Mileage - Ascending', value: 'asc' },
        { text: 'Mileage - Descending', value: 'des' }
      ];

      const onChangeColorFilter= (value: string) => {
        setColorFilter(value);
      }

      const onChangeManufacturFilter= (value: string) => {
        setManufacturerFilter(value);
      }

      const getQueryParamsObj= () => {
        let obj: {
            [key: string]: string
        }= {};
        if (colorFilter) {
          obj["color"]= colorFilter;
        }
        if (manufacturerFilter) {
          obj["manufacturer"]= manufacturerFilter;
        }
        if (sortBy) {
          obj["sort"]= sortBy;
        }
        return obj;
      }

    const {
        cars,
        currentPageCount,
        totalCarsCount, 
        totalPageCount,
        isLoading,
        isError
    }= useAppSelector(allCars);

    const {
        colors,
        isError: isColorsError
    } = useAppSelector(allCarColors);

    const { manufacturers, isError: isManufactuerError }= useAppSelector(allCarManufacturers);
    
    const updateQueryParams= () => {
        // reset to 1
        setCurrentPage(1);
        const queryObj=  getQueryParamsObj();
        setSearchParams(queryObj);

        dispatch(getCarsByPage({
            page: 1,
            sortBy: sortBy,
            manufacturer: manufacturerFilter,
            color: colorFilter
        }));
      }

      const onPaginationButtonClick= (page: number) => {
        const newPage= page || currentPage+1;
        setCurrentPage(newPage);
        dispatch(getCarsByPage({
            page: newPage, 
            sortBy: sortBy, 
            manufacturer: manufacturerFilter, 
            color: colorFilter
        }));
      }

      const onSortSelect= (value: string) => {
        setSortBy(value);
      }

      const getSelectedOptionFromList = (collection: Option[], search: string) => collection.find((item) => item.value === search);

      useEffect(() => {
        updateQueryParams();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [sortBy]);

   

    useEffect(() => {
      dispatch(getCarsByPage({
        page: currentPage, 
        sortBy: sortBy, 
        manufacturer: manufacturerFilter, 
        color: colorFilter
    }));

        dispatch(getAllCarColors());
        dispatch(getAllCarManufacturers());
    }, [dispatch]);

    if (isError || isColorsError || isManufactuerError) {
      return <SomethingWentWrong/>
    }
    return (
        <div className={blockname}>
        <div className={`${blockname}__side-bar`}>
          <SideFilter
            onChangeColorFilter= { onChangeColorFilter }
            onChangeManufacturFilter= { onChangeManufacturFilter }
            onFilterClick={ updateQueryParams }
            colors={ colors }
            manufacturers={ manufacturers }
            selectedColor={ getSelectedOptionFromList(colors, colorFilter) }
            selectedManufacturers= { getSelectedOptionFromList(manufacturers, manufacturerFilter) }
          />
        </div>

        <div className={`${blockname}__main-content`}>
          <CarListHeader
            currentCount={ currentPageCount }
            totolCount={ totalCarsCount }
            onSortSelect={ onSortSelect }
            sortOptions={ sortOptions }
            selectedSort={ getSelectedOptionFromList(sortOptions, sortBy) }
          />

          <Pagination
            currentPage={ currentPage }
            totalPages={ totalPageCount }
            onButtonClick={ onPaginationButtonClick }
          >
            <CarList cars={cars} showPlaceholderBlocks={isLoading} />
          </Pagination>
        </div>
      </div>
    );
}

export default CarsContainer;