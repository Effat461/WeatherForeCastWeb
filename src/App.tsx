import React,{Component} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { GraphDataResponse } from "./Model/response";


class App extends Component {
   lstGraphData : GraphDataResponse;
  constructor(props:any){
    super(props);
    this.state = {
      items:[],
      isLoaded:false
    }
    this.lstGraphData = new GraphDataResponse();
    this.getGraphData();
  }

  getGraphData(){
    fetch('http://localhost:5129/GetGraphData')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded: true,
        items:json
      })
      this.lstGraphData = json;
      console.log(json);
    });

    
  }
  render(){
    return (
    <div>
      <h2>Minimum Temperature Graph</h2>
        <LineChart
      width={500}
      height={300}
      data={this.lstGraphData.lstMinTemperature}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="datetime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="city" stroke="#82ca9d" />
      <Line type="monotone" dataKey="country" stroke="#82ca9d" />
    </LineChart>
    <h2>Maximum WindSpeed Graph</h2>
    <LineChart
      width={500}
      height={300}
      data={this.lstGraphData.lstMaxWindSpeed}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="datetime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="windspeed"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="city" stroke="#82ca9d" />
      <Line type="monotone" dataKey="country" stroke="#82ca9d" />
    </LineChart>
    
    </div>
    );

  }
 

}

export default App;
