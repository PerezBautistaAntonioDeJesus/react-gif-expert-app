import { shallow } from "enzyme";
import { React } from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');


describe('tests for <GidGrid /> component', () => { 

    
    test('should create the snapshot', () => { 
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={''} />);

        expect( wrapper ).toMatchSnapshot();
        
     });


     test('should have items when images have been loaded', () => { 
         const fakeValues = [
            {
                id: '23er23',
                url: 'http://fakeurl.com',
                title: 'fake title'
            },
            {
                id: 'iuu9238',
                url: 'http://fakeurl.com',
                title: 'fake title'
            }
         ]
        useFetchGifs.mockReturnValue({
            data: fakeValues,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={''} />);
        
        expect( wrapper.find( 'p' ).exists() ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe( fakeValues.length )
        
      })
    
 })