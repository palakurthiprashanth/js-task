import Select from '../../components/Select';

const blockname = 'car-list-header';

type Option= {
  text: string,
  value: string
}

type CarListHeaderProps= {
  currentCount: number,
  totolCount: number,
  sortOptions: Option[],
  selectedSort: Option | undefined,
  onSortSelect: (v: string) => void
}

const CarListHeader = ({currentCount, totolCount, sortOptions, selectedSort, onSortSelect}: CarListHeaderProps) => (
  <div className={blockname}>
    <div className={`${blockname}__cars-info`}>
      <h3>Available Cars</h3>
      <div>Showing {currentCount} of {totolCount} results</div>
    </div>
    <div className={`${blockname}__sort-by`}>
      <Select
        id="Sort By"
        placeholder="Sort By"
        label='Sort By'
        options={sortOptions}
        onSelect={selectedOpt => onSortSelect(selectedOpt.value)}
        preSelectedOption={selectedSort}
      />
    </div>
  </div>
);


export default CarListHeader;
