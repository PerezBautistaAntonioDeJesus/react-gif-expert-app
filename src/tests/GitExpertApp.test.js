import { shallow } from "enzyme";
import { React } from "react";
import { GitExpertApp } from "../GitExpertApp";


describe('tests on <GifGrid /> component', () => { 
    
    test('should  the component created correctly', () => { 
        
        const wrapper = shallow(<GitExpertApp />);
        expect( wrapper ).toMatchSnapshot();

     });

     test('should have a list of categories', () => { 
         
        const categories = ['El chavo', 'Goku'];

        const wrapper = shallow( <GitExpertApp defaultCategory={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
      })

 });