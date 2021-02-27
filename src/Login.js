import React from 'react';
import ReactDOM from 'react-dom';
export default class Login1 extends React.Component {
    constructor(props) {
      super(props);
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
   

    render(){
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
        /* <div id="top-nav"className="topnav" style={style_0}>
          <img className="logoclass" id="logimg" src= "./dummies_man_yellow_black_rule.png" alt="helloo"/>
          <a id ="txt-col-1"className="class-name" style={style_0} >BAVITHRAN</a>
          <a id="txt-col-2" className="active" href="#home"  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_1}>Home</a>
          <a id="txt-col-3" href="#news" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_2}>News</a>
          <a id="txt-col-4" href="#contact" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_3}>Contact</a>
          <a id="txt-col-5" href="#about" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={style_4} >About</a>
          </div> */
          
          <div className='form-wrapper-log-in'>  
            <h2>Log In</h2>
            <form  onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress} noValidate disa>
              <div class='fullName input-group mb-3'>
                <label htmlFor="fullName"></label>
                <input type='text' className="fullnameBox" name='fullName' placeholder="Username or Email" onBlur={this.handleChange}  noValidate />
                {errors.fullName.length > 0 && 
                  <span className='error'>{errors.fullName}</span>}
              </div>
              <div className='password'>
                <label htmlFor="password"></label>
                <input type='password' className="passwordBox"name='password' placeholder="Password" onBlur={this.handleChange} noValidate />
                
                {errors.password.length > 0 && 
                  <span className='error'>{errors.password}</span>}
              </div>
              <div className='submit'>
                <button>Log In</button>
              </div>
            </form>
            </div>
        
      );
    }
}