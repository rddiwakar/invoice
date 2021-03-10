import './App.css';
import React from "react";
import Header from "./header";
import Section from "./section";


function App() {
  return (
    <>
      <Header/>
      <Section invoiceName="#RT3080" date="Due 19 aug 2019" userName="Jensem Huemg" bill="$1000" status="paid"/>
      <br/>
      <Section invoiceName="#XMLJFU" date="Due 19 dec 2019" userName="chuem Huemg" bill="$1800" status="pending"/>
      <br/>
      <Section invoiceName="#BMJH20" date="Due 25 aug 2020" userName="Jen Hue" bill="$2100" status="paid"/>
      <br/>
      <Section invoiceName="#Bh3080" date="Due 25 Nov 2020" userName="Jensem Huemg" bill="$1654" status="pending"/>
      <br/>
    </>
  );
}

export default App;
