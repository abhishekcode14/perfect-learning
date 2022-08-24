import React from 'react';
import IpInfo from './IpInfo';

class App extends React.Component{
  state={
    ipInput:'',
    domainInput:'',
    location:{},
    ip:'',
    
  }
  
  componentDidMount(){
    this.fetchData();
  }
  
  

  

  
  fetchData=()=>{
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fiWZKh3O2XTXdAwr3zKclm8K5mH6M&ipAddress=${this.state.ipInput}&domain=${this.state.domainInput}`)
    .then((response)=>{
      if (response.status === 200){
    return response.json()
    .then((data)=>{
      console.log(data);
      this.setState({location:data.location, ip:data.ip });
     
    })}
      else {
        throw new Error('bad response');
      }

  })
    .catch(()=>alert('Press OK then get details'))
    
        
  }

  changeIp =(event)=>{
    this.setState({ipInput:event.target.value, domainInput:event.target.value})
  }
  getIpInfo =(event)=> {
    event.preventDefault();
    this.fetchData();
  }
  render(){
    return(
      <div className="app-container">
        <div className="header">
          <h1>IP Address Display</h1>
          <form onSubmit={this.getIpInfo}>
            <input type='text' onChange={this.changeIp} name="input" value={this.state.ipInput} placeholder="Search for any IP address or domain"></input>
          
          </form>
          
        </div>
        <IpInfo location={this.state.location} ip={this.state.ip} />
        <div id="mapid">
          
        </div>
      </div>
    )
  }

}
export default App;