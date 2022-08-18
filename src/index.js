import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.js';
import Post from './components/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <div className="post-container">
    <Post 
      title="Apache vs NGINX" 
      link="https://lienzhuzhu.github.io/report-one/" 
      abstract="
      Apache HTTP Server (Apache) and Nginx are popular open source web servers. 
      Nginx was developed to serve content faster than Apache with less overhead. But are 
      all types of content served faster with Nginx?
      "
    />

    <Post 
      title="AWS EC2 Instance Showdown" 
      link="https://lienzhuzhu.github.io/report-two/" 
      abstract="
      AWS offers a variety of remote servers. One of its most popular 
      categories is the suite of EC2 T2 instances. Two of these instances are 
      the Micro and the Large. The Micro has 1 vCPU, 1GiB of RAM, and a rate 
      of 0.0166 USD per hour when running Linux. The large has 2 vCPUs, 8GiB of 
      RAM, and a rate of 0.0928 USD per hour, or eight times that of the Micro. But 
      is the extra vCPU and RAM worth the 800% cost increase when running a web server?
      "
    />

    </div>
    
  </React.StrictMode>
);

