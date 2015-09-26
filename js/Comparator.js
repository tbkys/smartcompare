
var SpCompareApp = angular.module('SpCompareApp', []);


SpCompareApp.controller('SpCompareController', function ($scope,$window) {

    $scope.manufactures = [
        {Name:"Apple", selected: false},
        {Name:"LG", selected: false},
        {Name:"Samsung", selected: false},
        {Name:"Motorola", selected: false},
        {Name:"Sony", selected: false},
        {Name:"Huawei", selected: false},
        {Name:"Google", selected: false},
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
            Battery: 1560,
            price: 520,
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 1810,
            price : 650,
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 1715,
            price : 890,
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 2915,
            price : 1085,
            manufacture:"Apple",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3000,
            price : 700,
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 2800,
            price: 400,
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 2550,
            price: 540 ,
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 2600,
            price: 620,
            manufacture:"Samsung",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            OS: 'Android 5.1.1',
            Screen: 4.95,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:1.3 ,
            Camera: 8,
            RAM: 2,
            Battery: 2300,
            price: 290,
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            OS: 'Android 5.1',
            Screen: 5.96,
            Resolution: 1440,
            Resolution1: 2560,
            FrontCamera:2 ,
            Camera: 13,
            RAM: 3,
            Battery: 3220,
            price: 350,
            manufacture:"Motorola",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3100,
            price: 300,
            manufacture:"OnePlus",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3300,
            price: 400,
            manufacture:"OnePlus",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3100,
            price: 460,
            manufacture:"Sony",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            OS: 'Android 5.1.1',
            Screen: 5.2,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:5.1 ,
            Camera: 23,
            RAM: 3,
            Battery: 2900,
            price: 900,
            manufacture:"Sony",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3000,
            price: 200,
            manufacture:"Asus",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            OS: 'Android 5.1',
            Screen: 5.0,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:4 ,
            Camera: 20,
            RAM: 3,
            Battery: 2840,
            price: 470,
            manufacture:"HTC",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3000,
            price: 400,
            manufacture:"Motorola",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 2600,
            price: 580,
            manufacture:"Huawei",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
            final_score: 0
        },
        {
            chosen : [false,false],
            image : "http://cdn2.gsmarena.com/vv/bigpic/lg-g2-ofic.jpg",
            winner:false,
            Name: 'LG G2 ',
            Technology: 'LTE/HSPA/GSM',
            Year: 2013,
            Month: 9,
            Weight: 143,
            OS: 'Android 5.1',
            Screen: 5.2,
            Resolution: 1080,
            Resolution1: 1920,
            FrontCamera:2.1 ,
            Camera: 13,
            RAM: 2,
            Battery: 3000,
            price: 210,
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3000,
            price: 300,
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
            Battery: 3000,
            price: 440,
            manufacture:"LG",
            score: [0,0,0,0,0,0,0,0],
            category_winner: [false,false,false,false,false,false,false,false,false],
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
        Battery:["Battery",false]
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
        if (p1.price < p2.price) {
            p1.category_winner[i] = true;
        }
        else if (p2.price < p1.price) {
            p2.category_winner[i] = true;
        }
    };

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
            if(p1.Screen>=5){
                p1.score[i]+=1;
            }
            else if(p1.Screen>=5.5){
                p1.score[i]+=2;
            }
            else if(p1.Screen>=5.7){
                p1.score[i]+=3;
            }
            p1.score[i]*= priority_bonus;
        }
        else {
            if (p1.Resolution === 1440) {
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
        else if (p1.Battery > 3000){
            p1.score[i] +=2;
        }
        else if (p1.Battery > 2500){
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
        if($scope.Priorities.FrontCamera[1]){
            p1.score[i]*= priority_bonus;

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

    $scope.FilterDevicesByManufacture=function() {
        for (var i=0 ; i<$scope.devices.length ; i++) {
            for (var j=0 ; j<$scope.manufactures.length ; j++){
                if ($scope.devices[i].manufacture == $scope.manufactures[j].Name && $scope.manufactures[j].selected) {
                   if(!$scope.isInDevicesToShow($scope.devices[i])){
                       $scope.DevicesToShow.push($scope.devices[i]);
                       break;
                   }
                }
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

    $scope.FilterDevicesByPrice = function() {
        for (var i=0 ; i<$scope.devices.length ; i++) {
            for (var j=0 ; j<$scope.priceLimit.length ; j++){
                if ($scope.devices[i].price<=$scope.priceLimit[j] && $scope.priceLimit[j] == $scope.priceLmt) {
                    if(!$scope.isInDevicesToShow($scope.devices[i])){
                        $scope.DevicesToShow.push($scope.devices[i]);
                        break;
                    }
                }
            }
        }
    };

    $scope.FilterDevices = function() {
        $scope.FilterDevicesByPrice();
        $scope.FilterDevicesByManufacture();
        if ($scope.DevicesToShow.$isEmpty()){
            $window.alert("There are no devices with the properties you've selected.\n Please select again.");
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
    $scope.initialize($scope.first_selected_Item);
    $scope.initialize($scope.second_selected_Item);
    $scope.Compare($scope.first_selected_Item,$scope.second_selected_Item);
    $scope.Scoring($scope.first_selected_Item);
    $scope.Scoring($scope.second_selected_Item);
    if($scope.first_selected_Item.final_score>$scope.second_selected_Item.final_score){
        $scope.first_selected_Item.winner=true;
    }
    else if( $scope.second_selected_Item.final_score> $scope.first_selected_Item.final_score){
        $scope.second_selected_Item.winner=true;
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
fills the price limit array with the price ranges
 */
$scope.fillPricesArray=function(){
    for (var i=150; i<=700 ; i+=50){
        var elem =i;
        $scope.priceLimit.push(elem);
    }
}

});



ChangeVisibility=function show() {
    document.getElementById(arguments[0]).style.display='block';
    for (var i=1 ; i<arguments.length ; i++) {
        document.getElementById(arguments[i]).style.display = 'none';
    }
    return false;
};


