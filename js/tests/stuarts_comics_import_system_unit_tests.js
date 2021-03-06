import ComicsMapper from '../comicsMapper.js';
import MarvelImportService from '../marvelImportService.js';
import StuartComicsImportSystem from '../stuartComicsImportSystem.js';

describe("Return comics from Marvel api and convert them to Stuart comics", function() {
 
    let _sut;

    beforeEach(function() {
        const marvelImportService = jasmine.createSpyObj('marvelImportService', ['getComics']);
        marvelImportService.getComics.and.callFake(function() {
            return { 
                "results": [
                    {
                        id: 1, 
                        title: "Hulk", 
                        thumbnail: {
                            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", 
                            extension: ""
                        }, 
                        prices: [
                            {
                                type: "printPrice",
                                price: 20
                            }
                        ]
                    }
                ]
            };
        });

        const comicsMapper = jasmine.createSpyObj('comicsMapper', ['toStuartComics']);
        comicsMapper.toStuartComics.and.callFake(function() {
            return new Array(
                    {
                        title: "Hulk",
                        thumbnailUrl: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                        price: 20
                    }
            );
        });

        _sut = new StuartComicsImportSystem(marvelImportService, comicsMapper);             
    });

    it("receive Stuart comics from Stuart comics import system", function() {
        // ARRANGE

        // ACT        
        const stuartComics = _sut.getComicsFromMarvel();

        // ASSERT
        expect(stuartComics.length).toBeGreaterThan(0);
        expect(stuartComics[0].title).toBeDefined();
        expect(stuartComics[0].thumbnailUrl).toBeDefined();
        expect(stuartComics[0].price).toBeDefined();
    });                                   
 
});