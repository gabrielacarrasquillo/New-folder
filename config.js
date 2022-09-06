var config = {
    style: 'mapbox://styles/gabieale13/cl6wjwex3002p14o8mut6fk5k',
    accessToken: 'pk.eyJ1IjoiZ2FiaWVhbGUxMyIsImEiOiJjbDVvN2I1MzUwOWdvM2NvN3cydzZxcjZoIn0.1ytIqrGLVQMZxll_T5RN9w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'lambertConformalConic',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    chapters: [
        {
            id: 'parte-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'mon.png',
            description: 'A close look at agricultural projects that are identified as agroecological in Puerto Rico, at least 93 small farmer initiatives were found, and 80 of these indicate, in their social networks, the town where they are located. They are mostly found in municipalities in mountainous areas.',
            location: {
                center: [-66.51191, 18.38216],
                zoom: 8.35,
                pitch: 15.00,
                bearing: 3.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: .6, // make the flying slow
                curve: 3, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'puntos-fincas',
                opacity: 1,
                duration: 2000
                },
                { layer: 'puntos-edu',
                opacity: 0,
                duration: 2000
                },
            ],
            onChapterExit: [
                { layer: 'puntos-edu',
                opacity: 0,
                duration: 500
                },
                { layer: 'region_metro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_east',
                opacity: 0,
                duration: 1000
                },]
        },
        {
            id: 'parte-4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'centro.jpg',
            description: '30 agroecological farms specified to be located in villages in the central region.',
            location: {
                center: [-66.30314, 18.37376],
                zoom: 8.44,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.9,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'region_metro',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_east',
                opacity: 1,
                duration: 1000
                },
            ],
            onChapterExit: [
                { layer: 'puntos-edu',
                opacity: 0,
                duration: 500
                },

            ]
        },
        {
            id: 'parte-5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'oeste.jpg',
            description: '19 indicate to be located in towns in the western region of the archipelago.',
            location: {
                center: [-66.30314, 18.37376],
                zoom: 8.44,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'region_metro',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region-north',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_south',
                opacity: 1,
                duration: 1000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 1000
                },
                { layer: 'region_centro',
                opacity: 1,
                duration:1000
                },
                { layer: 'region_east',
                opacity: 1,
                duration: 1000
                },
                { layer: 'puntos-edu',
                opacity: 0,
                duration: 500
                },
            ],
            onChapterExit: [
                { layer: 'puntos-edu',
                opacity: 0,
                duration: 500
                },
                { layer: 'region_metro',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region-north',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_south',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 2000
                },
                { layer: 'region_centro',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_east',
                opacity: 1,
                duration: 2000
                },

            ]
        },
        {
            id: 'parte-6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'edu.jpg',
            description: 'In their descriptions and through the content they publish on their platforms, 41 initiatives were identified as family farms, 15 as community projects, 10 only as farms, three cooperatives and one organization. Under "others" there are also about nine projects that do not specify.',
            location: {
                center: [-66.04154, 18.38091],
                zoom: 8.05,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.9   
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'puntos-edu',
                opacity: 1,
                duration: 2000
                },
                { layer: 'region_metro',
                opacity: 0,
                duration: 500
                },
                { layer: 'region-north',
                opacity: 0,
                duration: 500
                },
                { layer: 'region_south',
                opacity: 0,
                duration: 500
                },
                { layer: 'region_oeste',
                opacity: 0,
                duration: 500
                },
                { layer: 'region_centro',
                opacity: 0,
                duration: 500
                },
                { layer: 'region_east',
                opacity: 0,
                duration: 500
                },
            ],
            onChapterExit: [


            ]
        },
        
    ]
};
