import { React } from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory"


describe('tests for <AddCategory /> component', () => {
    

    const setCategories = jest.fn();
    let wrapper =  shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper =  shallow( <AddCategory setCategories={setCategories}/>);
    });

    test('should show the component correctly', () => { 
        
        expect( wrapper ).toMatchSnapshot();
     });


     test('should change the input value', () => { 
         const input = wrapper.find('input');

         input.simulate('change', { target: {
             value: 'Hola mundo'
         }})


         const p = wrapper.find('p');
         expect(p.text().trim()).toBe('Hola mundo')
      });


      test('shouldn`t show the information on submit', () => { 
          
        wrapper.find('form').simulate( 'submit', { preventDefault(){} }); 
        expect( setCategories ).not.toHaveBeenCalled();

       });

       test('should call setCategories function and clean the input', () => { 

        wrapper.find('input').simulate( 'change', { target: { value: 'Hola mundo' } } )

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();

        expect( wrapper.find('input').prop('value') ).toBe( '' );

        })
})