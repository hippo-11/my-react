import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class Portfoliocontainer extends Component {
    constructor() {
        super();

       this.state = {
           pagetitle: "welcome to my portfoleo",
           isloading: false,
           data: [
               {title: "quip", category: "ecommerce" }, 
               {title: "eventbrite", category: "scheduling" }, 
               {title: "ministry safe", category:"enterprise" },
               {title:  "swingaway", category:"ecommerce" }
        ]
       };

this.handlefilter = this.handlefilter.bind(this);

    }

    handlefilter(filter) {
this.setState({
    data: this.state.data.filter(item => {
        return item.category === filter;
    })
})
    }

    portfolioItem() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
          //  return <h1>{item}</h1>;
        });
    }

    handlepagetitleupdate() {
        this.setState({
            pagetitle: "something else"
        }) 
    }

    render() {
        if (this.state.isloading) {
            return <div>loading...</div>;
        }

        return (
            <div> 
            <h2> {this.state.pagetitle} </h2> 

            <button onClick={() => this.handlefilter('ecommerce')}>ecommerce</button>
            <button onClick={() => this.handlefilter('scheduling')}>scheduling</button>
            <button onClick={() => this.handlefilter('enterprise')}>enterprise</button>

            {this.portfolioItem()}

           
            </div>
        );
    }
}