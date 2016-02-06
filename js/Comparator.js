
var SpCompareApp = angular.module('SpCompareApp', []);


SpCompareApp.controller('SpCompareController', function ($scope,$window) {

    $scope.manufactures = [
        //{Name:"All Manufactures", selected: false},
        {Name:"Apple", selected: false},
        {Name:"LG", selected: false},
        {Name:"Samsung", selected: false},
        {Name:"Motorola", selected: false},
        {Name:"Sony", selected: false},
        {Name:"Huawei", selected: false},
        {Name:"Meizu", selected: false},
        {Name:"Lenovo", selected: false},
        {Name:"Asus", selected: false},
        {Name:"OnePlus", selected: false}
    ];
    $scope.priceLimit = [];

    $scope.devices = [
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-5s-ofic.jpg",
            winner:false,
            Technology: 'LTE/HSPA/GSM',
            Name: 'iPhone 5S ',
            Year: 2013,
            Month: 9,
            Weight: 112,
            OS: 'iOS 8.4 ',
            Screen: 4.0,
            Resolution: 640,
            Resolution1: 1136,
            FrontCamera:1.2 ,
            Camera: 8,
            RAM: 1,
            ROM: [16,32],
            Battery: 1560,
            price: [419,440],
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0

        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-6-4.jpg",
            winner:false,
            Technology: 'LTE/HSPA/GSM',
            Name: 'iPhone 6 ',
            Year: 2014,
            Month: 9,
            Weight: 129,
            OS: 'iOS 9 ',
            Screen: 4.7,
            Resolution: 750,
            Resolution1: 1334,
            FrontCamera:1.2 ,
            Camera: 8,
            RAM: 1,
            ROM:[16,64],
            Battery: 1810,
            price : [550,650],
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0

        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/iphone-6s-ofic.jpg",
            winner:false,
            Technology: 'LTE/HSPA/GSM',
            Name: 'iPhone 6S ',
            Year: 2015,
            Month: 9,
            Weight: 143,
            OS: 'iOS 9 ',
            Screen: 4.7,
            Resolution: 750,
            Resolution1: 1334,
            FrontCamera:5 ,
            Camera: 12,
            RAM: 2,
            ROM:[16,64,128],
            Battery: 1715,
            price : [650,750,850],
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/iphone-6s-plus-ofic.jpg",
            winner:false,
            Technology: 'LTE/HSPA/GSM',
            Name: 'iPhone 6S Plus ',
            Year: 2015,
            Month: 9,
            Weight: 192,
            OS: 'iOS 9 ',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5 ,
            Camera: 12,
            RAM: 2,
            ROM:[16,64,128],
            Battery: 2915,
            price : [750,850,950],
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note5.jpg",
            winner:false,
            Name: 'Samsung Galaxy Note 5',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 8,
            Weight: 171,
            OS: 'Android 5.1.1',
            Screen: 5.7,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:5 ,
            Camera: 16,
            RAM: 4,
            ROM:[32,64],
            Battery: 3000,
            price : [620,790],
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s5-g900f.jpg",
            winner:false,
            Name: 'Samsung Galaxy S5',
            Technology: 'LTE/HSPA/GSM',
            Year: 2014,
            Month: 2,
            Weight: 145,
            OS: 'Android 5.0',
            Screen: 5.1,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:2 ,
            Camera: 16,
            RAM: 2,
            ROM:[16],
            Battery: 2800,
            price: [330],
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s6.jpg",
            winner:false,
            Name: 'Samsung Galaxy S6',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 3,
            Weight: 138,
            OS: 'Android 5.0.2',
            Screen: 5.1,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:5 ,
            Camera: 16,
            RAM: 3,
            ROM:[32,64],
            Battery: 2550,
            price: [460,613],
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s6-edge.jpg",
            winner:false,
            Name: 'Samsung Galaxy S6 Edge',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 3,
            Weight: 132,
            OS: 'Android 5.0.2',
            Screen: 5.1,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:5 ,
            Camera: 16,
            RAM: 3,
            ROM:[32,64],
            Battery: 2600,
            price: [550,660],
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-sm-j500f.jpg",
            winner:false,
            Name: 'Samsung Galaxy J5',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 6,
            Weight: 146,
            OS: 'Android 5.1',
            Screen: 5.1,
            Resolution: 720,
            Resolution1: 1080,
            FrontCamera:5 ,
            Camera: 13,
            RAM: 1.5,
            ROM:[8,16],
            Battery: 2600,
            price: [190,235],
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lg-google-nexus-5-.jpg",
            winner:false,
            Name: 'Nexus 5',
            Technology: 'LTE/HSPA/GSM',
            Year: 2013,
            Month: 11,
            Weight: 130,
            OS: 'Android 6.0',
            Screen: 4.95,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:1.3 ,
            Camera: 8,
            RAM: 2,
            ROM:[16,32],
            Battery: 2300,
            price: [200,235],
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lg-nexus-5x-.jpg",
            winner:[false,false],
            Name: 'Nexus 5X ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 10,
            Weight: 136,
            OS: 'Android 6.0',
            Screen: 5.2,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5 ,
            Camera: 12.3,
            RAM: 2,
            ROM:[16,32],
            Battery: 2700,
            price: [300,350],
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/moto-nexus-6.jpg",
            winner:[false,false],
            Name: 'Nexus 6 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2014,
            Month: 11,
            Weight: 184,
            OS: 'Android 6.0',
            Screen: 5.96,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:2 ,
            Camera: 13,
            RAM: 3,
            ROM:[32,64],
            Battery: 3220,
            price: [350,400],
            manufacture:"Motorola",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/huawei-nexus-6p-.jpg",
            winner:[false,false],
            Name: 'Nexus 6P ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 10,
            Weight: 178,
            OS: 'Android 6.0',
            Screen: 5.7,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:8,
            Camera: 12.3,
            RAM: 3,
            ROM:[32,64,128],
            Battery: 3450,
            price: [500,550,650],
            manufacture:"Huawei",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },

        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg",
            winner:false,
            Name: 'OnePlus One',
            Technology: 'LTE/HSPA/GSM',
            Year: 2014,
            Month: 6,
            Weight: 162,
            OS: 'Android 5.1.1',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5 ,
            Camera: 13,
            RAM: 3,
            ROM:[16,32],
            Battery: 3100,
            price: [300,350],
            manufacture:"OnePlus",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/oneplus-two.jpg",
            winner:false,
            Name: 'OnePlus Two',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 7,
            Weight: 175,
            OS: 'Android 5.1',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5 ,
            Camera: 13,
            RAM: 4,
            ROM:[64],
            Battery: 3300,
            price: [390],
            manufacture:"OnePlus",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-z3.jpg",
            winner:false,
            Name: 'Sony Xperia Z3',
            Technology: 'LTE/HSPA/GSM',
            Year: 2014,
            Month: 9,
            Weight: 152,
            OS: 'Android 5.1.1',
            Screen: 5.2,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:2.2 ,
            Camera: 20,
            RAM: 3,
            ROM:[16,32],
            Battery: 3100,
            price: [390,450],
            manufacture:"Sony",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/sony-z5-.jpg",
            winner:false,
            Name: 'Sony Xperia Z5',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 10,
            Weight: 154,
            OS: 'Android 6',
            Screen: 5.2,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5.1 ,
            Camera: 23,
            RAM: 3,
            ROM:[32],
            Battery: 2900,
            price: [540],
            manufacture:"Sony",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/sony-z5-.jpg",
            winner:false,
            Name: 'Sony Xperia Z5 Premium',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 11,
            Weight: 180,
            OS: 'Android 6',
            Screen: 5.2,
            Resolution: 2160,
            Resolution1: 3840,
            FrontCamera:5.1 ,
            Camera: 23,
            RAM: 3,
            ROM:[32],
            Battery: 3430,
            price: [625],
            manufacture:"Sony",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/asus-zenfone-2-new.jpg",
            winner:false,
            Name: 'Asus Zenfone 2',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 3,
            Weight: 170,
            OS: 'Android 5.1',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5 ,
            Camera: 13,
            RAM: 4,
            ROM:[16,32,64],
            Battery: 3000,
            price: [230,250,300],
            manufacture:"Asus",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/htc-one-m9-1.jpg",
            winner:false,
            Name: 'HTC One M9',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 3,
            Weight: 157,
            OS: 'Android 6',
            Screen: 5.0,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:4 ,
            Camera: 20,
            RAM: 3,
            ROM:[32],
            Battery: 2840,
            price: [240],
            manufacture:"HTC",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/htc-one-a9-new.jpg",
            winner:false,
            Name: 'HTC One A9',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 11,
            Weight: 143,
            OS: 'Android 6.0',
            Screen: 5.0,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:4 ,
            Camera: 13,
            RAM: 3,
            ROM:[16,32],
            Battery: 2150,
            price: [390,490],
            manufacture:"HTC",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },

        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/moto-x-style-r.jpg",
            winner:false,
            Name: 'Motorola Moto X Style',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 9,
            Weight: 179,
            OS: 'Android 5.1.1',
            Screen: 5.7,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:5 ,
            Camera: 21,
            RAM: 3,
            ROM:[16,32],
            Battery: 3000,
            price: [400,480],
            manufacture:"Motorola",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/moto-x-play-r.jpg",
            winner:[false,false],
            Name: 'Motorola Moto X Play ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 8,
            Weight: 169,
            OS: 'Android 5.1.1',
            Screen: 5.5,
            Resolution: 1080 ,
            Resolution1: 1920 ,
            FrontCamera:5 ,
            Camera: 21,
            RAM: 2,
            ROM:[16,32],
            Battery: 3630,
            price: [360,460],
            manufacture:"Motorola",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/motorola-moto-g-3rd-gen-r.jpg",
            winner:false,
            Name: 'Motorola Moto G(3rd Gen)',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 7,
            Weight: 155,
            OS: 'Android 5.1.1',
            Screen: 5.0,
            Resolution: 720,
            Resolution1: 1080,
            FrontCamera:5 ,
            Camera: 13,
            RAM: 2,
            ROM:[8,16],
            Battery: 2470,
            price: [180,220],
            manufacture:"Motorola",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/huawei-p8.jpg",
            winner:false,
            Name: 'Huawei P8 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 4,
            Weight: 144,
            OS: 'Android 5.0.2',
            Screen: 5.2,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:8 ,
            Camera: 13,
            RAM: 3,
            ROM:[64],
            Battery: 2600,
            price: [540],
            manufacture:"Huawei",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/huawei-mate-8r1.jpg",
            winner:false,
            Name: 'Huawei Mate 8 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 11,
            Weight: 185,
            OS: 'Android 6',
            Screen: 6,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:8 ,
            Camera: 16,
            RAM: 4,
            ROM:[64],
            Battery: 4000,
            price: [730],
            manufacture:"Huawei",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/huawei-p8-lite1.jpg",
            winner:false,
            Name: 'Huawei P8lite',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 5,
            Weight: 131,
            OS: 'Android 5.0.2',
            Screen: 5.0,
            Resolution: 720,
            Resolution1: 1080,
            FrontCamera:5,
            Camera: 13,
            RAM: 2,
            ROM:[16],
            Battery: 2200,
            price: [207],
            manufacture:"Huawei",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lg-g3-1.jpg",
            winner:false,
            Name: 'LG G3 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2014,
            Month: 6,
            Weight: 149,
            OS: 'Android 5.1',
            Screen: 5.5,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:2.1 ,
            Camera: 13,
            RAM: 3,
            ROM:[16,32],
            Battery: 3000,
            price: [262,254],
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lg-g4-.jpg",
            winner:false,
            Name: 'LG G4 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 4,
            Weight: 155,
            OS: 'Android 5.1',
            Screen: 5.5,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:8 ,
            Camera: 16,
            RAM: 3,
            ROM:[32],
            Battery: 3000,
            price: [385],
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lg-v10-new1.jpg",
            winner:false,
            Name: 'LG V10 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 10,
            Weight: 192,
            OS: 'Android 5.1.1',
            Screen: 5.7,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:5 ,
            Camera: 16,
            RAM: 4,
            ROM:[64],
            Battery: 3000,
            price: [620],
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lenovo-k3-note.jpg",
            winner:false,
            Name: 'Lenovo K3 Note ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 3,
            Weight: 150,
            OS: 'Android 5.0',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5,
            Camera: 13,
            RAM: 2,
            ROM:[16],
            Battery: 3000,
            price: [180],
            manufacture:"Lenovo",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/meizu-m1-note2.jpg",
            winner:false,
            Name: 'Meizu M2 Note ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 6,
            Weight: 149,
            OS: 'Android 5.0',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5,
            Camera: 13,
            RAM: 2,
            ROM:[16,32],
            Battery: 3100,
            price: [155,190],
            manufacture:"Meizu",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/meizu-mx5.jpg",
            winner:false,
            Name: 'Meizu MX5 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2015,
            Month: 7,
            Weight: 149,
            OS: 'Android 5.0',
            Screen: 5.5,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5,
            Camera: 20,
            RAM: 3,
            ROM:[16,32],
            Battery: 3150,
            price: [320,400],
            manufacture:"Meizu",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false,false],
            final_score: 0
        }
    ];

    $scope.DevicesToShow = [];
    $scope.Priorities = {
        Date: ["Release Date",false],
        Weight: ["Light Weight",false],
        OS: ["OS",false],
        Screen: ["Big Screen",false],
        FrontCamera: ["Front Camera",false],
        Camera: ["Camera",false],
        RAM: ["RAM Memory",false],
        Battery:["Battery",false],
        VFM:["Value For Money",false]
    };

    $scope.select_default = "Choose a device";

    $scope.Compare = function(p1,p2){
        var i=0;
        if (p1.Technology.substring(0,2)==='LTE' && p2.Technology.substring(0,2)!=='LTE' ) {
            p1.category_winner[i] =true;
        }
        else  if (p2.Technology.substring(0,2)==='LTE' && p1.Technology.substring(0,2)!=='LTE' ) {
            p2.category_winner[i] =true;
        }
        i++; // move to [1] release date
        if (p1.Year > p2.Year || (p1.Year === p2.Year && p1.Month > p2.Month)) {
            p1.category_winner[i] = true;
        }
        else if (p2.Year > p1.Year || (p2.Year === p1.Year && p2.Month > p1.Month)) {
            p2.category_winner[i] = true;
        }
        i++; // move to [2] weight

        if (p1.Weight < p2.Weight) { // the lighter the weight - the better
            p1.category_winner[i] = true;
        }
        else if (p2.Weight < p1.Weight) {
            p2.category_winner[i] = true;
        }

        i++; // move to [3] Screen Size

        if (p1.Screen > p2.Screen || (p1.Screen === p2.Screen && p1.Resolution > p2.Resolution)) {
            p1.category_winner[i] = true;
        }
        else if (p2.Screen > p1.Screen || (p2.Screen === p1.Screen && p2.Resolution > p1.Resolution)) {
            p2.category_winner[i] = true;
        }

        i++; // move to [4] Camera

        if (p1.Camera > p2.Camera) {
            p1.category_winner[i] = true;
        }
        else if (p2.Camera > p1.Camera) {
            p2.category_winner[i] = true;
        }
        i++; // move to [5] RAM Memory

        if (p1.RAM > p2.RAM) {
            p1.category_winner[i] = true;
        }
        else if (p2.RAM > p1.RAM) {
            p2.category_winner[i] = true;
        }
        i++; // move to [6] Battery

        if (p1.Battery > p2.Battery) {
            p1.category_winner[i] = true;
        }
        else if (p2.Battery > p1.Battery) {
            p2.category_winner[i] = true;
        }
        i++; // move to [7] Front Camera
        if (p1.FrontCamera > p2.FrontCamera) {
            p1.category_winner[i] = true;
        }
        else if (p2.FrontCamera > p1.FrontCamera) {
            p2.category_winner[i] = true;
        }
        i++; // move to [8] price
        if ($scope.avgPrice(p1) < $scope.avgPrice(p2)) {
            p1.category_winner[i] = true;
        }
        else if (p2.price < p1.price) {
            p2.category_winner[i] = true;
        }
        i++;
        if ($scope.ValueForMoney(p1)>$scope.ValueForMoney(p2)){
            p1.category_winner[i] =true;
        }
        else if ($scope.ValueForMoney(p2)>$scope.ValueForMoney(p1)){
            p2.category_winner[i] = true;
        }

    };

    $scope.avgPrice = function (device) {
        var ret_val=0;
        for (var i=0;i<device.price.length;i++){
            ret_val+=device.price[i];
        }
        return ret_val / device.price.length;
    }

    //a scoring function , giving bigger score to priorities selected
    $scope.Scoring = function (p1) {
        var result=0;
        var priority_bonus =4;
        var i=0;
        if (p1.Technology.substring(0,2)==='LTE' ) {
            p1.score[i] += 2;
            result+=2;
        }
        i++; // Date
        if (p1.Year == 2015 && p1.Month>=4) {
            p1.score[i] += 3;
        }
         else if (p1.Year == 2015 ) {
            p1.score[i] += 2;
        }
        else if (p1.Year == 2014 ) {
            p1.score[i] += 1;
        }
        if($scope.Priorities.Date[1]){
            p1.score[i]*= priority_bonus;
        }
        result += p1.score[i];
        i++ // Weight

        if (p1.Weight <= 140) { // the lighter the weight - the better
            p1.score[i] += 3;
        }
       else if (p1.Weight <= 160) { // the lighter the weight - the better
            p1.score[i] += 2;
        }
       else if (p1.Weight <= 170) { // the lighter the weight - the better
            p1.score[i] += 1;
        }
        if($scope.Priorities.Weight[1]){
            p1.score[i]*= priority_bonus;

        }
        result += p1.score[i];
        i++; // Screen + Resolution

        if($scope.Priorities.Screen[1]){ // Big Screen marked
            if(p1.Screen>=5.7){
                p1.score[i]+=3;
            }
            else if(p1.Screen>=5.5){
                p1.score[i]+=2;
            }
            else if(p1.Screen>=5){
                p1.score[i]+=1;
            }
            p1.score[i]*= priority_bonus;
        }
        else {
            if (p1.Resolution === 2160){
                if (p1.Screen <= 5) {
                    p1.score[i] += 4;
                }
                else {
                    p1.score[i] += 3;
                }
            }
            else if (p1.Resolution === 1440) {
                if (p1.Screen <= 5) {
                    p1.score[i] += 3;
                }
                else {
                    p1.score[i] += 2;
                }
            }
            else if (p1.resolution === 1080) {
                if (p1.Screen <= 4.8) {
                    p1.score[i] += 2;
                }
                else {
                    p1.score[i] += 1;
                }
            }
            else if (p1.resolution >= 720) {
                p1.score[i] += 1;
            }
        }
        result += p1.score[i];
        i++; // Camera
        if (p1.Camera>=20){
            p1.score[i]+=4;
        }
        else if (p1.Camera >= 16) {
            p1.score[i] += 3;
        }

        else if (p1.Camera>=12) {
            p1.score[i] +=2;
        }
        else if (p1.Camera>=8){
            p1.score[i]+=1;
        }
        if($scope.Priorities.Camera[1]){
            p1.score[i]*= priority_bonus;

        }
        result += p1.score[i];
        i++; // RAM

        if (p1.RAM === 4 ) {
            p1.score[i] +=5;
        }
        else if (p1.RAM ===  3){
            p1.score[i] +=3;
        }
        else if (p1.RAM ===  2){
            p1.score[i] +=1;
        }
        if($scope.Priorities.RAM[1]){
            p1.score[i]*= priority_bonus;
        }
        result += p1.score[i];
        i++; // Battery
        if ((p1.Battery >= 2700 && p1.Screen<=5.5) || (p1.Battery>=2500 && p1.Screen<=5)) {
            p1.score[i] += 3;
        }
        //big screen > 5.5
        else if (p1.Battery > 3200){
            p1.score[i] +=2;
        }
        else if (p1.Battery > 2800){
            p1.score[i] +=1 ;
        }
        if($scope.Priorities.Battery[1]){
            p1.score[i]*= priority_bonus;
        }
        result += p1.score[i];
        i++;
        if(p1.FrontCamera>5){
            p1.score[i]+=2;
        }
        else if(p1.FrontCamera>3){
            p1.score[i]+=1;
        }
        if($scope.Priorities.FrontCamera[1]) {
            p1.score[i] *= priority_bonus;

        }
        result += p1.score[i];
        p1.final_score=result;
    };

    /*
     set red for looser and green for winner
     */
    $scope.set_color = function (p1,index) {
        if ($scope.first_selected_Item.category_winner[index] === $scope.second_selected_Item.category_winner[index]){
            return {color:"black"};
        }
        if (p1 === $scope.first_selected_Item) {
            if ($scope.first_selected_Item.category_winner[index]) {
                return {color: "green"};
            }
            else {
                return {color: "red"};
            }

        }
        else  if (p1 === $scope.second_selected_Item) {
            if ($scope.second_selected_Item.category_winner[index]){
                return {color:"green"};
            }
            else {
                return {color:"red"};
            }
        }
    };


    $scope.isInDevicesToShow = function(device){
        for(var i=0;i< $scope.DevicesToShow.length;i++)
        {
            if ($scope.DevicesToShow[i].Name === device.Name) {
                return true;
            }
        }
        return false;
    };

    $scope.NoDeviceSelected = function() {
        var i;
        for (i=0 ; i<$scope.manufactures.length;i++){
            if ($scope.manufactures[i].selected){
                return false;
            }
        }
        return true;

    };

    $scope.FilterDevices = function() {
        $scope.DevicesToShow=[];
        for (var i=0 ; i<$scope.devices.length ; i++) {
            for (var j=0 ; j<$scope.manufactures.length ; j++){
                if ($scope.devices[i].price[0]<=$scope.priceLmt && $scope.devices[i].manufacture == $scope.manufactures[j].Name
                    && $scope.manufactures[j].selected) {
                    $scope.DevicesToShow.push($scope.devices[i]);
                    break;

                }
            }
        }
        var filtered_devices_length = $scope.DevicesToShow.length;
        if ($scope.NoDeviceSelected()){
            $window.alert("No manufacture was selected." +
                " Please select at least one manufacture.")
        }
        else if (filtered_devices_length==0){
            $window.alert("There are no corresponding devices to the properties you've selected." +
                           " Please select again. ");
        }
        else if (filtered_devices_length==1){
            $window.alert("There is only one corresponding device to the properties you've selected:    "+ $scope.DevicesToShow[0].Name );
        }
        else {
            ChangeVisibility('selection','filter');
        }
    };





    /*
     mark the chosen deices for comparison
    */
    $scope.setChoice=function(index) {
        var i;
        for (i=0;i< $scope.devices.length;i++){
            $scope.devices[i].chosen[index]=false;
        }
        index===0 ? $scope.first_selected_Item.chosen[index]=true : $scope.second_selected_Item.chosen[index]=true;
        return true;
    };

    $scope.initialize=function(p1){
        for (var i=0 ; i< p1.score.length;i++){
            p1.score[i]=0;
            p1.category_winner[i] = false;
        }
        p1.winner=false;
    };

    /*
     compare selected devices
     */
    $scope.CompareModels = function(){
        var first_device =$scope.first_selected_Item;
        var second_device = $scope.second_selected_Item;
        var priority_bonus = 5;
        $scope.initialize(first_device);
        $scope.initialize(second_device);
        $scope.Compare(first_device,second_device);
        $scope.Scoring(first_device);
        $scope.Scoring(second_device);
        var VFM_first =$scope.ValueForMoney(first_device);
        var VFM_second =$scope.ValueForMoney(second_device);

        if(first_device.final_score>second_device.final_score){
            first_device.winner=true;
        }
        else if( second_device.final_score> first_device.final_score){
            second_device.winner=true;
        }
        if ($scope.Priorities.VFM[1]==true || $scope.isTie()) {
            if ((VFM_first>VFM_second) ||(VFM_first==VFM_second && first_device.price<second_device.price)) {
                first_device.final_score += priority_bonus;
            }
            else if ((VFM_first<VFM_second)||(VFM_first==VFM_second && first_device.price>second_device.price)) {
                second_device.final_score+=priority_bonus;
            }
        }
        return true;
    };

    $scope.isTie = function() {
        return !($scope.first_selected_Item.winner || $scope.second_selected_Item.winner);
    };

    $scope.SameDevice = function() {
        return ($scope.first_selected_Item.Name == $scope.second_selected_Item.Name);
    };

    /*
    flatten array of attributes
     */
    $scope.ConcatValues = function(attr) {
        var ret_str ="";
        for (var i=0; i<attr.length;i++){
            ret_str = ret_str.concat(attr[i]).concat("/");
        }
        return ret_str.slice(0,-1);

    }


    /*
    fills the price limit array with the price ranges
     */
    $scope.fillPricesArray=function(){
        for (var i=150; i<=900 ; i+=50){
            var elem =i;
            $scope.priceLimit.push(elem);
        }
    };

    $scope.ValueForMoney = function(device) {
        return Math.round(device.final_score / $scope.avgPrice(device) *100);

    };

    $scope.checkAll = function () {
        $scope.selectedAll = ($scope.selectedAll)? true : false;
        if ($scope.selectedAll) {
            $("#manu_title").html(' <span class="hida">You Selected All</span>');
        }
        else {
            $("#manu_title").html(' <span class="hida">Select Manufactures</span>') ;
        }
        angular.forEach($scope.manufactures, function (item) {
            item.selected = $scope.selectedAll;
        });



    };
});

function hideAddressBar()
{
    if(!window.location.hash)
    {
        if(document.height < window.outerHeight)
        {
            $(document).body.style.height = (window.outerHeight + 50) + 'px';
        }

        setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
    }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

$(document).on('click','.navbar-collapse.in',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }

});


ChangeVisibility=function show() {
    document.getElementById(arguments[0]).style.display='block';
    if(arguments[0]=='home'){
        document.getElementsByTagName("body")[0].style.backgroundColor = "#3f5c9a";
    }
    else{
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    }
    for (var i=1 ; i<arguments.length ; i++) {
        document.getElementById(arguments[i]).style.display = 'none';
    }
    return false;
};


