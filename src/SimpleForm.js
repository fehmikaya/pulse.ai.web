import React from "react";
import style from './Style';
var config = require('./config');

class SimpleForm extends React.Component {

  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  };

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  };

  getDataFromDb = () => {
    console.log(process.env.NODE_ENV+","+HOST);
    fetch(config.HOST+"/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  render() {
    const { data } = this.state;
    return (
      <div style={style.form}>

        <ul>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
              <li style={{ padding: "10px" }} key={data.message}>
                <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                <span style={{ color: "gray" }}> data: </span>
                {dat.message}
              </li>
            ))}
        </ul>

      </div>

    );
  }
}


export default SimpleForm;