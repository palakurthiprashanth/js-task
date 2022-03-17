const blockname = 'placeholder';

const Placeholder = (): JSX.Element => (
  <div className={blockname} data-testid="placeholders">
    <div className={`${blockname}__item`}>
      {/* Can add below div to have animations as facebook */}
      {/* <div className={`${blockname}__animated-background`}> */}
      <div className={`${blockname}__animated-background1 ${blockname}__car-left-image `}></div>
      <div className={`${blockname}__car-details`}>
        <div className={`${blockname}__animated-background1 ${blockname}__car-detail-line1`}>&nbsp;</div>
        <div className={`${blockname}__animated-background1 ${blockname}__car-detail-line2`}>Line2</div>
        <div className={`${blockname}__animated-background1 ${blockname}__car-detail-line3`}>Line3</div>
      </div>
      {/* </div> */}
    </div>
  </div>
);

export default Placeholder;
