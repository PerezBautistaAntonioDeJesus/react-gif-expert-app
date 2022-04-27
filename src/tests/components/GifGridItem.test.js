import React from "react";
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en <GifGridItem />', () => {

    const img = {
        url: 'http://localhost:9090/something,jpg',
        title: 'My title',
    }
    const wrapper = shallow( <GifGridItem {...img}/> );

    test('should show the component correctly', () => { 
        
        expect( wrapper ).toMatchSnapshot();

     });



    test('should has a paragraph with the title', () => { 
        
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( img.title )
    
    });


    test('the img tag should have url in src attribute', () => { 

        const imgtag = wrapper.find('img')
        const properties = imgtag.props();

        expect( properties.src ).toBe(img.url);
        expect( properties.alt ).toBe(img.title);
    });


    test('should has the class animate__fadeIn', () => { 
        const div = wrapper.find( 'div');
        const classes = div.prop('className');
        expect( classes ).toContain( 'animate__fadeIn' );
     })
})