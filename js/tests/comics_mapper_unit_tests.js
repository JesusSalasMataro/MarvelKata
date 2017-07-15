describe("Given an array of Marvel comics convert them to Stuart comics", function() {
 
    let _sut;

    beforeEach(function() {
         _sut = new ComicsMapper();
    });

    it("when receive Marvel comics return Stuart Comics", function() {
        // ARRANGE
        marvelComics = 
            { 
                "comics": [
                    {
                        id: 1, 
                        title: "Hulk", 
                        thumbnail: {
                            path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", 
                            extension: ".jpg"
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

        // ACT        
        let stuartComics = _sut.toStuartComics(marvelComics.comics);

        // ASSERT
        expect(stuartComics.length).toBeGreaterThan(0);
        expect(stuartComics[0].title).toBe('Hulk');
        expect(stuartComics[0].thumbnailUrl).toBe('http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg');
        expect(stuartComics[0].price).toBe(20);
    });                                   
 
});