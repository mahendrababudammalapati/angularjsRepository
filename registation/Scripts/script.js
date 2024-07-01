var app = angular.module('mainapp', []);

app.controller('mycontroller', function ($scope) {
    $scope.user = {
        gender: 'male',
    };
    $scope.users = [];
    $scope.inputs = [];
    

    $scope.countries = [
        { name: 'USA', code: 'USA', states: ['New York', 'California', 'Texas', 'Florida', 'Illinois'] },
        { name: 'India', code: 'IND', states: ['Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu', 'Uttar Pradesh'] },
        { name: 'Australia', code: 'AUS', states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia'] },
        { name: 'Canada', code: 'CAN', states: ['Ontario', 'Quebec', 'Alberta', 'British Columbia', 'Manitoba'] },
        { name: 'Germany', code: 'DEU', states: ['Bavaria', 'Berlin', 'Hamburg', 'North Rhine-Westphalia', 'Baden-Württemberg'] },
        { name: 'Brazil', code: 'BRA', states: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Ceará'] },
        { name: 'Japan', code: 'JPN', states: ['Tokyo', 'Osaka', 'Kanagawa', 'Aichi', 'Hokkaido'] },
        { name: 'Mexico', code: 'MEX', states: ['Mexico City', 'Jalisco', 'Nuevo León', 'Veracruz', 'Puebla'] },
        { name: 'France', code: 'FRA', states: ['Île-de-France', 'Auvergne-Rhône-Alpes', 'Provence-Alpes-Côte d\'Azur', 'Hauts-de-France', 'Occitanie'] }
    ];

    $scope.cities = {
        'New York': ['New York City', 'Buffalo', 'Rochester'],
        'California': ['Los Angeles', 'San Francisco', 'San Diego'],
        'Texas': ['Houston', 'Dallas', 'Austin'],
        'Florida': ['Miami', 'Orlando', 'Tampa'],
        'Illinois': ['Chicago', 'Springfield', 'Peoria'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli'],
        'Delhi': ['New Delhi', 'Noida', 'Gurgaon'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
        'New South Wales': ['Sydney', 'Newcastle', 'Wollongong'],
        'Victoria': ['Melbourne', 'Geelong', 'Ballarat'],
        'Queensland': ['Brisbane', 'Gold Coast', 'Cairns'],
        'Western Australia': ['Perth', 'Fremantle', 'Broome'],
        'South Australia': ['Adelaide', 'Mount Gambier', 'Whyalla'],
        'Ontario': ['Toronto', 'Ottawa', 'Hamilton'],
        'Quebec': ['Montreal', 'Quebec City', 'Gatineau'],
        'Alberta': ['Calgary', 'Edmonton', 'Red Deer'],
        'British Columbia': ['Vancouver', 'Victoria', 'Kelowna'],
        'Manitoba': ['Winnipeg', 'Brandon', 'Thompson'],
        'Bavaria': ['Munich', 'Nuremberg', 'Augsburg'],
        'Berlin': ['Berlin City', 'Potsdam', 'Brandenburg'],
        'Hamburg': ['Hamburg City', 'Bremen', 'Lubeck'],
        'North Rhine-Westphalia': ['Cologne', 'Düsseldorf', 'Dortmund'],
        'Baden-Württemberg': ['Stuttgart', 'Karlsruhe', 'Freiburg'],
        'São Paulo': ['São Paulo City', 'Campinas', 'Santos'],
        'Rio de Janeiro': ['Rio de Janeiro City', 'Niterói', 'Nova Iguaçu'],
        'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
        'Bahia': ['Salvador', 'Feira de Santana', 'Vitória da Conquista'],
        'Ceará': ['Fortaleza', 'Juazeiro do Norte', 'Sobral'],
        'Tokyo': ['Tokyo City', 'Yokohama', 'Osaka'],
        'Osaka': ['Osaka City', 'Sakai', 'Higashiōsaka'],
        'Kanagawa': ['Yokohama', 'Kawasaki', 'Sagamihara'],
        'Aichi': ['Nagoya', 'Toyota', 'Toyohashi'],
        'Hokkaido': ['Sapporo', 'Asahikawa', 'Hakodate'],
        'Mexico City': ['Mexico City', 'Ecatepec', 'Guadalajara'],
        'Jalisco': ['Guadalajara', 'Zapopan', 'Tlaquepaque'],
        'Nuevo León': ['Monterrey', 'Guadalupe', 'San Nicolás de los Garza'],
        'Veracruz': ['Veracruz City', 'Xalapa', 'Coatzacoalcos'],
        'Puebla': ['Puebla City', 'Tlaxcala', 'San Martín Texmelucan'],
        'Île-de-France': ['Paris', 'Versailles', 'Fontainebleau'],
        'Auvergne-Rhône-Alpes': ['Lyon', 'Grenoble', 'Saint-Étienne'],
        'Provence-Alpes-Côte d\'Azur': ['Marseille', 'Nice', 'Toulon'],
        'Hauts-de-France': ['Lille', 'Amiens', 'Roubaix'],
        'Occitanie': ['Toulouse', 'Montpellier', 'Perpignan']
    };

    $scope.statesFromCountry = [];
    $scope.citiesFromState = [];

    $scope.fetchStates = function (countryCode) {
        $scope.statesFromCountry = $scope.countries.find(country => country.code === countryCode)?.states || [];
        $scope.user.state = "";
        $scope.user.city = "";
    };
    $scope.fetchCities = function (stateName) {
        $scope.citiesFromState = $scope.cities[stateName] || [];
        $scope.user.city = "";
    };

   /* $scope.addContact = function () {
        if (/^\d{10}$/.test($scope.contactInput)) {
            $scope.user.contacts.push($scope.contactInput);
            $scope.contactInput = "";
        }
        else {
            alert("Please provide a 10-digit contact number");
        }
    };*/

    $scope.addInput = function () {
        $scope.inputs.push({ value: '' });
    };

    $scope.removeInput = function (index) {
        $scope.inputs.splice(index, 1);
    };

    $scope.validateInput = function (value) {
        if (!/^\d{10}$/.test(value)) {
            alert("Entered numbers must contain atleast 10 digits");
        }
    };

    $scope.validateContact = function () {
        if (!/^\d{10}$/.test($scope.user.contact)) {
            alert("contact number must be in 10 digits");
        }
    };

    $scope.registerUser = function () {
        if (!$scope.user.name) {
            alert("Please enter your name");
            return;
        }
        if (!$scope.user.email) {
            alert("Please enter your email");
            return;
        }
        if (!$scope.user.contact) {
            alert("please enter your contact");
            return;
        }
        if (!$scope.user.country) {
            alert("Please provide your country name");
            return;
        }
        if (!$scope.user.state) {
            alert("Please provide your state");
            return;
        }
        if (!$scope.user.city) {
            alert("Please provide your city name");
            return;
        }
        if (!$scope.user.gender) {
            alert("Please select your gender");
            return;
        }
        if (!$scope.user.dob) {
            alert("Please enter your date of birth");
            return;
        }
        if ($scope.editIndex !== undefined) {
            $scope.users[$scope.editIndex] = angular.copy($scope.user);
            $scope.editIndex = undefined;
        } else {
            $scope.users.push(angular.copy($scope.user));
        }
        $scope.user = {
            gender: 'male',
        };
        $scope.registrationForm.$setPristine();
    };

    $scope.editUser = function (user) {
        $scope.user = angular.copy(user);
        $scope.editIndex = $scope.users.indexOf(user);
    };

    $scope.removeUser = function (index) {
        $scope.users.splice(index, 1);
    };
});
