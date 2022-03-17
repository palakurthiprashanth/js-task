import Select from "../Select";
import Button from '../Button';


type Option= {
  text: string,
  value: string
}

type SideFilterProps= {
  colors: Option[],
  manufacturers: Option[],
  selectedColor: Option | undefined,
  selectedManufacturers: Option | undefined,
  onChangeColorFilter: (v: string) => void,
  onChangeManufacturFilter: (v: string) => void,
  onFilterClick: () => void
}

const blockname = 'side-filters';

const SideFilter = ({ colors, manufacturers, selectedColor, selectedManufacturers, onChangeColorFilter, onChangeManufacturFilter, onFilterClick }: SideFilterProps) => {
  let colorsSelect;
  let manufacturersSelect;
  
  if (colors && colors.length) {
    colorsSelect = (
      <Select
        id="color"
        placeholder="color"
        label='Color'
        options={colors}
        onSelect={selectedOpt => onChangeColorFilter(selectedOpt.value)}
        preSelectedOption={selectedColor}
      />
    )
  }

  if (manufacturers && manufacturers.length) {
    manufacturersSelect = (
      <Select
        id="Manufacturers"
        placeholder="Manufacturers"
        label='Manufacturers'
        options={manufacturers}
        onSelect={selectedOpt => onChangeManufacturFilter(selectedOpt.value)}
        preSelectedOption={selectedManufacturers}
      />
    )
  }

  return (
    <div className={blockname} data-testid="sidefilter">
      { colorsSelect }
      { manufacturersSelect }
      <div className={`${blockname}__filter-btn`}>
        <Button
          onClick={onFilterClick}
          label="Filter"
          data-testid="filterBtn"
        />
      </div>
    </div>
  );
};

export default SideFilter;
