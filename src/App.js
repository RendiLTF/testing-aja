import React,{Component} from 'react';
import Grid from './Grid';
import Home from './Home/Home';
import News from './News';
import Login from './Component/Login';


import '../style/styles.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
      return(
        <Router>
        <div className="header">
         <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light warna">
                {/* <Link className="navbar-brand" to=""> <img className="logo" src={require('../logo/logo.png')}  alt="logo"/></Link> */}
                <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Daftar Pengguna 
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item " to="/">Daftar Pengguna</Link>
                          <Link class="dropdown-item " to="/grid">Daftar Pengguna</Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          
                          </Link>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="dropdown-item" to="">Buat Pengguna</Link>
                          <div className="dropdown-divider"></div>
                         
                          </div>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white">Id</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="/news">Name</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-white" to="/login">Email</Link>
                      </li>
                    </ul>
                </div>
            </nav>             
         </div>
         <div className="">
        

            {/* <Route path="/" exact component={Home}/>
            <Route path="/grid"  component={Grid}/>
            <Route path="/news" component={News}/>
            <Route path="/login" component={Login}/> */}
         </div>

        </div>
        </Router>
      )
    }
}

export default App;