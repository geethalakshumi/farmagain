
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motor1:false,
      motor2:false,
      motor3:false,
      motor4:false,
      motor5:false,
      motor6:false,
      motor7:false,
      motor8:false
    }
  }

  componentDidMount = () => {
    var motor1 = localStorage.getItem('motor1');
    motor1=JSON.parse(motor1)
    var motor2 = localStorage.getItem('motor2');
    motor2=JSON.parse(motor2)
    var motor3 = localStorage.getItem('motor3');
    motor3=JSON.parse(motor3)
    var motor4 = localStorage.getItem('motor4');
    motor4=JSON.parse(motor4)
    var motor5 = localStorage.getItem('motor5');
    motor5=JSON.parse(motor5)
    var motor6 = localStorage.getItem('motor6');
    motor6=JSON.parse(motor6)
    var motor7 = localStorage.getItem('motor7');
    motor7=JSON.parse(motor7)
    var motor8 = localStorage.getItem('motor8');
    motor8=JSON.parse(motor8)
    this.setState({
       motor1: motor1,
       motor2: motor2,
       motor3: motor3,
       motor4: motor4,
       motor5: motor5,
       motor6: motor6,
       motor7: motor7,
       motor8: motor8
       });
  }


motor1=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1=20"
  if(e.target.checked){
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor1:true
        })
        localStorage.setItem('motor1', true);
      }
      else{
        this.setState({
          motor1:false
        })
        localStorage.setItem('motor1', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor1:false
        })
        localStorage.setItem('motor1', false);
      }
      else{
        this.setState({
          motor1:true
        })
        localStorage.setItem('motor1', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}


motor2=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field2=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field2=20"
  if(e.target.checked){
    fetch(url)
    .then(res => res.json())
    .then(details => {
      if(details!==0){
        console.log(details)
        this.setState({
          motor2:true
        })
        localStorage.setItem('motor2', true);
      }
      else{
        this.setState({
          motor2:false
        })
        localStorage.setItem('motor2', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      if(details!==0){
        console.log(details)
        this.setState({
          motor2:false
        })
        localStorage.setItem('motor2', false);
      }
      else{
        this.setState({
          motor2:true
        })
        localStorage.setItem('motor2', true);
      }

    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}


motor3=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field3=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field3=20"
  if(e.target.checked){
    fetch(url)
    .then(res => res.json())
    .then(details => {
      if(details!==0){
        console.log(details)
        this.setState({
          motor3:true
        })
        localStorage.setItem('motor3', true);
      }
      else{
        this.setState({
          motor3:false
        })
        localStorage.setItem('motor3', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor3:false
        })
        localStorage.setItem('motor3', false);
      }
      else{
        this.setState({
          motor3:true
        })
        localStorage.setItem('motor3', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor4=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field4=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field4=20"
  if(e.target.checked){

    fetch(url)
    .then(res => res.json())
    .then(details => {
      if(details!==0){
        console.log(details)
        this.setState({
          motor4:true
        })
        localStorage.setItem('motor4', true);
      }
      else{
        this.setState({
          motor4:false
        })
        localStorage.setItem('motor4', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor4:false
        })
        localStorage.setItem('motor4', false);
      }
      else{
        this.setState({
          motor4:true
        })
        localStorage.setItem('motor4', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor5=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field5=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field5=20"
  if(e.target.checked){
    
    
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor5:true
        })
        localStorage.setItem('motor5', true);
      }
      else{
        this.setState({
          motor5:false
        })
        localStorage.setItem('motor5', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor5:false
        })
        localStorage.setItem('motor5', false);
      }
      else{
        this.setState({
          motor5:true
        })
        localStorage.setItem('motor5', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor6=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field6=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field6=20"
  if(e.target.checked){
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
     if(details!==0){
      this.setState({
        motor6:true
      })
      localStorage.setItem('motor6', true);
     }
     else{
      this.setState({
        motor6:false
      })
      localStorage.setItem('motor6', false);
     }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor6:false
        })
        localStorage.setItem('motor6', false);
      }
      else{
        this.setState({
          motor6:true
        })
        localStorage.setItem('motor6', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor7=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field7=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field7=20"
  if(e.target.checked){
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor7:true
        })
        localStorage.setItem('motor7', true);
      }
      else{
        this.setState({
          motor7:false
        })
        localStorage.setItem('motor7', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor7:false
        })
        localStorage.setItem('motor7', false);
      }
      else{
        this.setState({
          motor7:true
        })
        localStorage.setItem('motor7', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor8=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field8=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field8=20"
  if(e.target.checked){  
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor8:true
        })
        localStorage.setItem('motor8', true);
      }
      else{
        this.setState({
          motor8:false
        })
        localStorage.setItem('motor8', false);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
      if(details!==0){
        this.setState({
          motor8:false
        })
        localStorage.setItem('motor8', false);
      }
      else{
        this.setState({
          motor8:true
        })
        localStorage.setItem('motor8', true);
      }
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
  render(){
  return (
    <div className="App mt-3">
      <div><img src="img.png"/></div> 
      <div className="mt-4">
     FILTER MOTOR VALVE  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor1}  onChange={this.motor1} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
      OXYGEN MOTOR VALVE   :&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor2}  onChange={this.motor2}/>
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     FILTER MOTOR  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1"checked={this.state.motor3}  onChange={this.motor3} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     NOT USE  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor4} onChange={this.motor4}/>
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
    NOT USE  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1"  checked={this.state.motor5} onChange={this.motor5} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
    NOT USE  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor6} onChange={this.motor6} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     OXYGEN MOTOR  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor7}  onChange={this.motor7}/>
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     OXYGEN DRIVER :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor8}  onChange={this.motor8} />
  <span class="slider round"></span>
    </label>
    </div>
    </div>
  );
}}

export default App;
