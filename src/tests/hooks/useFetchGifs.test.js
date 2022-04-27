import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('tests for useFetchGifs file', () => { 
    
    test('should return an initial state', () => { 
        
        // const { data:images, loading } = useFetchGifs( 'el chavo' );

        const { result } = renderHook( () => useFetchGifs( 'Hulk' ) );
        const { data, loading }= result.current;

        expect( data  ).toEqual( [] );
        expect( loading ).toBe( true );

     });

     test('should return an array and loading equal to false', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Hulk' ) );
        await waitForNextUpdate()
        const { data, loading }= result.current;
        
        expect( data.length  ).toBe(10)
        expect( loading ).toBe( false );

         
      });
    
 });