export class GraphDataResponse{
    Id : number;
    Country : string;
    City : string;
    Datetime : string;
    Tempmax : number;
    Tempmin : number;
    Temp : number;
    Windspeed : number;
    Cloudcover : number;
    lstMinTemperature : TemperatureResponseModel[];
    lstMaxWindSpeed: WindSpeedResponseModel[];
    constructor(){
        this.Id = 0;
        this.Country = "";
        this.City = "";
        this.Datetime = "";
        this.Tempmax = 0;
        this.Tempmin = 0;
        this.Temp = 0;
        this.Windspeed = 0;
        this.Cloudcover = 0;
        this.lstMinTemperature = [];
        this.lstMaxWindSpeed = [];
    }

}


export class TemperatureResponseModel{
    Id : number;
    Country : string;
    City : string;
    Datetime : string;
    Tempmax : number;
    Tempmin : number;
    Temp : number;
    Windspeed : number;
    Cloudcover : number;

    constructor(){
        this.Id = 0;
        this.Country = "";
        this.City = "";
        this.Datetime = "";
        this.Tempmax = 0;
        this.Tempmin = 0;
        this.Temp = 0;
        this.Windspeed = 0;
        this.Cloudcover = 0;
    }
}

export class WindSpeedResponseModel{

    Id : number;
    Country : string;
    City : string;
    Datetime : string;
    Tempmax : number;
    Tempmin : number;
    Temp : number;
    Windspeed : number;
    Cloudcover : number;

    constructor(){
        this.Id = 0;
        this.Country = "";
        this.City = "";
        this.Datetime = "";
        this.Tempmax = 0;
        this.Tempmin = 0;
        this.Temp = 0;
        this.Windspeed = 0;
        this.Cloudcover = 0;
    }
}