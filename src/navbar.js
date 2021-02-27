import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import data from './data.json';
import App from './App';
import Login1 from './Login'

export default class NavBar extends React.Component {
  
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
      <div className="top-class">
        <div id="top-nav"className="topnav" style={style_0}>
        <img className="logoclass" id="logimg" src= "bavithran/dummies_man_yellow_black_rule.png" alt="helloo"/>
        <a id ="txt-col-1"className="class-name" style={style_0} >BAVITHRAN</a>
        <a id="txt-col-2" className="active" href="#home"  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_1}>Home</a>
        <a id="txt-col-3" href="#news" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_2}>News</a>
        <a id="txt-col-4" href="#contact" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_3}>Contact</a>
        <a id="txt-col-5" href="#about" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_4} >About</a>
        </div>
        
       <div className='wrapper' id='wrapper-id'> 
       <div className="secondnav">
       <a id ="txt-col-6"className="class-name-1" href="#signin" onClick={this.handleSwitchSignin}>Sign In</a>
       <a id ="txt-col-7"className="class-name-2" href="#login"  onClick={this.handleSwitchLogin}>Log In</a>
       </div >
        <div  id='change-wrapper-id'>  
        
        <App></App>
        </div>
        </div>
        </div>
      
    );
  }
}
