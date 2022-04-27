import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs fetch', () => {

    test('should get 10 items', async() => { 

        const result = await getGifs('Pacman');
        expect( result.length ).toBe( 10 );

     });


     test('should return empty array when sending an empty string', async() => { 
         const result = await getGifs('');
         expect( result.length ).toBe(0);
      })
})