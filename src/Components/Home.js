import React, { Component } from "react";
import { getApiInformation } from "../Services/getApiInformation";
import { Link } from "react-router-dom";
import "../App.css";


const handleSubmit = (event) =>{
}


class Home extends Component {
  state = {
    min: undefined,
    max: undefined,
    dataArray: [],
    filteredArray: []
  };

  componentDidMount = () => {
    const array = new Array(7).fill(1);

    const getApiInformationAeguments = {
      array:
        this.state.dataArray.length === 0 ? new Array() : this.state.dataArray,
      setArray: (array) => this.setState({ 
        min: undefined,
        max: undefined,
        dataArray: array,
        filteredArray: array })
    };

    array.forEach(() => {
      getApiInformation(getApiInformationAeguments);
    });
  };

  getActivitiesList = () => {
    let activitiesArray = [];
    this.state.filteredArray.forEach((data) => {
      activitiesArray.push(
        <tr>
          <Link
            to={`/activity/${data.activity}`}
            state={{ activityData: data }}
          >
            <td>{data.activity}</td>
          </Link>
          <td className="alignRight">{data.price}$</td>
        </tr>
      );
    });
    return activitiesArray;
  };

  filter() {
    let min = this.state.min ? this.state.min : 0;
    let max = this.state.max ? this.state.max : Infinity;
    let filteredList  = this.state.dataArray.filter(x => x.price >= min && x.price <= max);
    this.setState({ filteredArray: filteredList});
  };


  render() {
    return (
      <>
        <table>
          <tbody>
          <tr>
              <td>
                <h3>Activity</h3>
              </td>
              <td className="alignRight">
                <h3>Price</h3>
              </td>
            </tr>
          {this.state.filteredArray.length && this.state.filteredArray.length > 0 ? (
            this.getActivitiesList()
          ) : (
            <td>Loading ...</td>
          )}
          </tbody>
        </table>

        <div className="input">
        <div className="App">
          <div style={{ margin: '0 auto', marginTop: '10%' }}>
          <label>Min:</label>
          <input type="number" value={this.state.min} onChange={(event) =>{this.setState({min: event.target.value }); event.stopPropagation();} }/>
          </div>
        </div>
        <div className="App">
          <div style={{ margin: '0 auto', marginTop: '10%' }}>
          <label>Max:</label>
          <input type="number" value={this.state.max} onChange={(event) =>{this.setState({max: event.target.value }); event.stopPropagation();} }/>
          </div>
        </div>
        </div>
        <button onClick={event => {this.filter(); event.stopPropagation()}}>Filter</button>
        
      </>
    );
  }
}

export default Home;
