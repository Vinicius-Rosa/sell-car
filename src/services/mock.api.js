export default function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                "cars": [
                    {
                        "id": "fghc453d",
                        "image": "fghc453d.jpg",
                        "name": "Cayanne",
                        "brand": "Porsche",
                        "km": 10000,
                        "price": 36723000
                    },
                    {
                        "id": "ng54e5yuk",
                        "image": "ng54e5yuk.jpeg",
                        "name": "Civic",
                        "brand": "Honda",
                        "km": 4900,
                        "price": 6900000
                    },
                    {
                        "id": "smkaslbmw2",
                        "image": "smkaslbmw2.jpg",
                        "name": "Série 2 Gran Coupé",
                        "brand": "BMW",
                        "km": 0,
                        "price": 25795000
                    },
                    {
                        "id": "tf097hjk",
                        "image": "tf097hjk.jpg",
                        "name": "CrossFox",
                        "brand": "Wolksvagem",
                        "km": 12000,
                        "price": 2980000
                    },
                    {
                        "id": "gla200opkwe",
                        "image": "gla200opkwe.jpg",
                        "name": "GLA 200",
                        "brand": "Mercedez",
                        "km": 0,
                        "price": 12690000
                    },
                    {
                        "id": "tgvhgx75",
                        "image": "tgvhgx75.png",
                        "name": "Model 3",
                        "brand": "Tesla",
                        "km": 0,
                        "price": 34000000
                    },
                    {
                        "id": "unotop",
                        "image": "unotop.png",
                        "name": "Uno",
                        "brand": "Fiat",
                        "km": 0,
                        "price": 12000000
                    },
                    {
                        "id": "gyv86gkm",
                        "image": "gyv86gkm.jpg",
                        "name": "Palio",
                        "brand": "Fiat",
                        "km": 12000,
                        "price": 1600000
                    },
                    {
                        "id": "tte43wygk",
                        "image": "tte43wygk.png",
                        "name": "Palio",
                        "brand": "Fiat",
                        "km": 8000,
                        "price": 1890000
                    },
                    {
                        "id": "go0866gnj",
                        "image": "go0866gnj.jpg",
                        "name": "Golf",
                        "brand": "Wolksvagem",
                        "km": 2000,
                        "price": 3250000
                    },
                    {
                        "id": "bhjcfts4",
                        "image": "bhjcfts4.jpg",
                        "name": "Cruze",
                        "brand": "Chevrolet",
                        "km": 1000,
                        "price": 7000000
                    },
                    {
                        "id": "chxi20a",
                        "image": "chxi20a.jpg",
                        "name": "Civic",
                        "brand": "Honda",
                        "km": 8000,
                        "price": 60000
                    },
                    {
                        "id": "hghvk",
                        "image": "hghvk,jpg",
                        "name": "Golf",
                        "brand": "Wolksvagem",
                        "km": 0,
                        "price": 5999990
                    },
                    {
                        "id": "hhio86jl",
                        "image": "hhio86jl.jpg",
                        "name": "Compass",
                        "brand": "Jeep",
                        "km": 2000,
                        "price": 18000000
                    },
                    {
                        "id": "bc3tr4",
                        "image": "bc3tr4.jpg",
                        "name": "Punto",
                        "brand": "Fiat",
                        "km": 10000,
                        "price": 1000000
                    }
                ],
                "count": 15,
                "properties": {
                    "max_price": 36723000,
                    "min_price": 60000,
                    "max_km": 12000
                }
            })
        }, 1500)
    })
}