import React from "react";
import "./card.css";


export default function Card(){
    return (
        <div className="bottomHalf">
            <div className="cards1">
            <a href="/task-offers">
            <div className="task-offers">
                <span className="task-offers-text">
                    <p style={{fontSize:"1.5vw",fontWeight:"bold"}}>Task Offers</p>
                    <p style={{paddingLeft:"01vw"}}>Complete tasks to get coins.</p>
                </span>
            </div>
            </a>

            <a href="/buzz-offers">
            <div className="buzz-offers">
                <span className="buzz-offers-text">
                    <p style={{fontSize:"1.5vw",fontWeight:"bold"}}>Buzz Offers</p>
                    <p style={{paddingLeft:"01vw"}}>Complete buzz offers to get coins.</p>
                </span>
            </div>
            </a>

            <a href="/limited-offers">
            <div className="limited-offers">
                <span className="limited-offers-text">
                    <p style={{fontSize:"1.5vw",fontWeight:"bold"}}>Limited Offers</p>
                    <p style={{paddingLeft:"01vw"}}>Complete offers to get coins.</p>
                </span>
            </div>
            </a>
            </div>

            
            <div className="cards2">
            <a href="/adscend-offers">
            <div className="adscend-offers">
                <span className="adscend-offers-text">
                    <p style={{fontSize:"1.5vw",fontWeight:"bold"}}>Adscend Offers</p>
                    <p style={{paddingLeft:"01vw"}}>Complete offers to get coins.</p>
                </span>
            </div>
            </a>

            <a href="/adgate-offers">
            <div className="adgate-offers">
                <span className="adgate-offers-text">
                    <p style={{fontSize:"1.5vw",fontWeight:"bold"}}>Adgate Offers</p>
                    <p style={{paddingLeft:"01vw"}}>Complete offers to get coins.</p>
                </span>
            </div>
            </a>
            </div>
        </div>
    )
}