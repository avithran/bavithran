import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import data from './data.json';
import Login from './Dashboard';
import Login1 from './Login';

const fs = require('fs');

let nameFlag=false;
let mailFlag=false;
let passFlag=false;


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

const password  =data.password;
const uname  =data.name;
export default class App extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {scrollY: 0}
    
    this.state = {
      hovered1: false,
      hovered2: false,
      hovered3: false,
      hovered4: false
    };
    this.state={
      nameval:'',
      mailval:'',
      passval:''
    } ;

    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
   
    event.preventDefault();
    const { name, value } = event.target;
    const nameval='nameval';
    const mailval='mailval';
    const passval='passval';
    let errors = this.state.errors;
    
    switch (name) {
      case 'fullName': 
      this.setState({[nameval]:value});
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
         nameFlag = 
          value.length>5
            ? true
            : false;
        break;
      case 'email': 
      this.setState({[mailval]:value});
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
            mailFlag = 
            value.length < 5
              ? false
              : true;
        break;
      case 'password': 
      this.setState({[passval]:value});
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
            passFlag = 
          value.length < 5
            ? false
            : true;
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  keyPressed =(event) =>{
    if(event.key==="Enter"){
    event.preventDefault();
    
    console.log(nameFlag+"|"+mailFlag+"|"+passFlag);
      if(validateForm(this.state.errors)&&nameFlag&&mailFlag&&passFlag)
      {
        let unametog=false;
        let passwordtog=false;
      for(let i=0;i<uname.length;i++)
      {
        if((this.state.passval)===password[i]&&(this.state.nameval)===uname[i])
        {
          unametog=true;
          passwordtog=true;
          break;
        }
      }
      if(unametog&&passwordtog) {
        ReactDOM.render(<Login/>,document.getElementById('root'));
       }
      else{
        alert('Wrong username or password');
       }
    }
    else{
      alert('Invalid form');
    }
  }
  }

  handleSubmit = (event) => {

    let key=event.key
    event.preventDefault();
    for(let u of uname){
      console.log('UNAME+++: '+u);
    }
    console.log("*********************")
    console.log("fs: "+this.state.nameval);
    var myObj ='{"name":'+this.state.nameval+',"password":'+this.state.passval+'}';
    var myJSON = JSON.stringify(myObj);
    data.name.push(this.state.nameval);
    console.log("myJSON: "+myJSON);
    
    fetch('data.json')
      .then(res => res.json())
      
      for(let u of uname){
        console.log('UNAME: '+u);
      }
      //.then(data =>{name: this.state.nameval,password:this.state.passval})   
   // const sendval = new FormData(form.current
    //fs.writeFileSync('name.json',myJSON);
  //  fs.writeFile('name.json',myJSON,err=>{
  //   if(err) throw err;
  //   console.log("error: "+err);
  //  });
    //localStorage.setItem("bavi", myJSON);
   // writeJsonFile('data.json',myJSON);
    if(validateForm(this.state.errors)&&nameFlag&&mailFlag&&passFlag)
    {
      let unametog=false;
      let passwordtog=false;
    for(let i=0;i<uname.length;i++)
    {
      if((this.state.passval)===password[i]&&(this.state.nameval)===uname[i])
      {
        unametog=true;
        passwordtog=true;
        break;
      }
    }
    if(unametog&&passwordtog) {
      ReactDOM.render(<Login/>,document.getElementById('wrapper-id'));
     }
    else{
      alert('Wrong username or password');
     }
  }
  else{
    alert('Invalid form');
  }
  }

  
  onMouseEnter = e => {  
    e.preventDefault();
    const {id} = e.target;
   if(id==="txt-col-2")
   {
      this.setState({ hovered1: true });
   }
   if(id==="txt-col-3")
   {
      this.setState({ hovered2: true });
   }
   if(id==="txt-col-4")
   {
      this.setState({ hovered3: true });
   }
   if(id==="txt-col-5")
   {
      this.setState({ hovered4: true });
   }
  };

  onMouseLeave = e => {
    
    e.preventDefault();
    const {id} = e.target;
   if(id==="txt-col-2")
   {
      this.setState({ hovered1: false });
   }
   if(id==="txt-col-3")
   {
      this.setState({ hovered2: false });
   }
   if(id==="txt-col-4")
   {
      this.setState({ hovered3: false });
   }
   if(id==="txt-col-5")
   {
      this.setState({ hovered4: false });
   }
  };



  handleScroll = () => {
    //console.log(this.state.nameval+"|"+this.state.mailval+"|"+this.state.passval);
    const scrollval = window.scrollY 
    this.setState({scrollY:scrollval})
  }

  handleSwitchLogin=()=>{
    console.log("login");
    ReactDOM.render(<Login1/>,document.getElementById('change-wrapper-id'));
  }
 
  handleSwitchSignin=()=>{
    console.log("signin");
    ReactDOM.render(<App/>,document.getElementById('change-wrapper-id'));
  }
  render() {
    
    const {errors} = this.state;
    const { hovered1 } = this.state;
    const { hovered2 } = this.state;
    const { hovered3 } = this.state;
    const { hovered4 } = this.state;
    const { scrollY } = this.state;
    const style_1 =    scrollY>0&&hovered1 ? {backgroundColor: "#000000",color: "#FFFFFF"}:scrollY>0 ? {backgroundColor: "#FFE600",color: "#000000"}:{};
    const style_2 =    scrollY>0&&hovered2 ? {backgroundColor: "#000000",color: "#FFFFFF"}:scrollY>0 ? {backgroundColor: "#FFE600",color: "#000000"}:{};
    const style_3 =    scrollY>0&&hovered3 ? {backgroundColor: "#000000",color: "#FFFFFF"}:scrollY>0 ? {backgroundColor: "#FFE600",color: "#000000"}:{};
    const style_4 =    scrollY>0&&hovered4 ? {backgroundColor: "#000000",color: "#FFFFFF"}:scrollY>0 ? {backgroundColor: "#FFE600",color: "#000000"}:{};
    const style_0 =  scrollY>0 ? { backgroundColor:  "#FFE600",color: "#000000"} : {};
     
    return (
      window.addEventListener("scroll",this.handleScroll),
      window.addEventListener("keypress",this.keyPressed),
        /* <div id="top-nav"className="topnav" style={style_0}>
        <img className="logoclass" id="logimg" src= "./dummies_man_yellow_black_rule.png" alt="helloo"/>
        <a id ="txt-col-1"className="class-name" style={style_0} >BAVITHRAN</a>
        <a id="txt-col-2" className="active" href="#home"  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_1}>Home</a>
        <a id="txt-col-3" href="#news" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_2}>News</a>
        <a id="txt-col-4" href="#contact" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_3}>Contact</a>
        <a id="txt-col-5" href="#about" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_4} >About</a>
        </div> */
        /* <div id="top-nav"className="secondnav" >
       <a id ="txt-col-6"className="class-name-1" href="#signin" onClick={this.handleSwitchSignin}>Sign In</a>
       <a id ="txt-col-7"className="class-name-2" href="#login"  onClick={this.handleSwitchLogin}>Log In</a>
       </div> */
       <div className='form-wrapper'>
          <h2>Sign In</h2>
          <form  onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress} noValidate >
            <div class='fullName input-group mb-3'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' className="fullnameBox" name='fullName' onBlur={this.handleChange}  noValidate />
             
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' className= "emailBox"name='email' onBlur={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' className="passwordBox"name='password' onBlur={this.handleChange} noValidate />
              
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
         </div>
     
    );
  }
}
