import React from "react";
import Header from "./Header";
import Section from "./Section"
import "./tesla.css";
import model3 from "./images/images/model-3.jpg"
import models from "./images/images/model-s.jpg"
import modelx from "./images/images/model-x.jpg"
import modely from "./images/images/model-y.jpg"

import solar_panal from "./images/images/solar-panel.jpg"

import solar_roof from "./images/images/solar-roof.jpg"

 function Home()
 {
    return(
      <>
    <Header/>
    <Section 
    model=" MODEL-3"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {model3}
   />
    <Section
    
    model=" MODEL-X"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {modelx}
    />
    <Section
    
    model=" MODEL-3"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {model3}
    />
    <Section
    
    model=" MODEL-S"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {models}
    />
    <Section
    
    model=" MODEL-Y"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {modely}
    />
    <Section
    
    model=" SOLAR PANEL"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {solar_panal}
    />
    <Section
    
    model=" SOLAR ROOF"
    desc="order online for touchless delivery"
    lbtn = "Custom ordere"
    rbtn = "Existing inventory"
    backgroundimg = {solar_roof}
    />
    </>
    )
 }
 export  default Home