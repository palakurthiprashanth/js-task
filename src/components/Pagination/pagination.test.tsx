import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from ".";


const btnMok= jest.fn();

describe('<Pagination /> - on 2nd page', () => {
    beforeEach(() => {
        render(
            <Pagination currentPage={2} totalPages={10} onButtonClick={ btnMok }>Test</Pagination>
          );
    });
  
    test('should render "First" page link', () => {
      expect(screen.queryByText('First')).toBeTruthy();
      userEvent.click(screen.getByText('First'));
      expect(btnMok).toHaveBeenCalled();
    });
  
    test('should render "Previous" page link', () => {
      expect(screen.getByText('Previous')).toBeTruthy();
      userEvent.click(screen.getByText('Previous'));
      expect(btnMok).toHaveBeenCalled();
    });
  
    test('should render "Page 2 of 10"', () => {
      expect(screen.queryByText('Page 2 of 10')).toBeTruthy();
    });
  
    test('should render "Next" page link', () => {
      expect(screen.queryByText('Next')).toBeTruthy();
      userEvent.click(screen.getByText('Next'));
      expect(btnMok).toHaveBeenCalled();
    });
  
    test('should render "Last" page link', () => {
      expect(screen.queryByText('Last')).toBeTruthy();
      userEvent.click(screen.getByText('Last'));
      expect(btnMok).toHaveBeenCalled();
    });
  });

  describe('<Pagination /> - on first page', () => {
    beforeEach(() => {
        render(
            <Pagination currentPage={1} totalPages={10} onButtonClick={(num) => num+1}><div>Wrapper</div></Pagination>
          );
    });
  
    test('should disable "Previous" page link', () => {
      expect(screen.queryByText('Previous')).toBeTruthy();
      expect(screen.queryByText('Previous')?.getAttribute('disabled')).not.toBe(null);
    });

    test('should disable "First" page link', () => {
      expect(screen.queryByText('First')).toBeTruthy();
      expect(screen.queryByText("First")?.getAttribute('disabled')).not.toBe(null);
    });
  
    test('should enable "Next" page link', () => {
      expect(screen.queryByText('Next')).toBeTruthy();
      expect(screen.queryByText('Next')?.getAttribute('disabled')).toBe(null);
    });
  });

  describe('<Pagination /> - on not last page and not first page', () => {
    beforeEach(() => {
        render(
            <Pagination currentPage={5} totalPages={10} onButtonClick={(num) => num+1}><div>Wrapper</div></Pagination>
          );
    });
  
    test('should enable "First" page link', () => {
      expect(screen.queryByText('First')).toBeTruthy();
      expect(screen.queryByText('First')?.getAttribute('disabled')).toBe(null);   
    });
  
    test('should enable "Previous" page link', () => {
      expect(screen.queryByText('Previous')).toBeTruthy();
      expect(screen.queryByText('Previous')?.getAttribute('disabled')).toBe(null);
    });
  
    test('should enable "Next" page link', () => {
      expect(screen.queryByText('Next')).toBeTruthy();
      expect(screen.queryByText('Next')?.getAttribute('disabled')).toBe(null);
    });
  
    test('should enable "Last" page link', () => {
      expect(screen.queryByText('Last')).toBeTruthy();
      expect(screen.queryByText('Last')?.getAttribute('disabled')).toBe(null);
    });
  });

  describe('<Pagination /> - on last page', () => {
    beforeEach(() => {
        render(
            <Pagination currentPage={10} totalPages={10} onButtonClick={(num) => num+1}><div>Wrapper</div></Pagination>
          );
    });
    
    test('should disable "Next" page link', () => {
      expect(screen.queryByText('Next')).toBeTruthy();
      expect(screen.queryByText('Next')?.getAttribute('disabled')).not.toBe(null);
    });
  
    test('should disable "Last" page link', () => {
      expect(screen.queryByText('Last')).toBeTruthy();
      expect(screen.queryByText('Last')?.getAttribute('disabled')).not.toBe(null);
    });
  }); 

  