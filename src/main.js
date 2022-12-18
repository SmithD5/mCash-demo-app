import React from "react";
import "./main.css";
import Button from '@mui/material/Button';


export default function Main(){

   
    return (
        <main>
            <div className="slides">
            <div className="daily-reward">
                <div className="daily-reward-title"> Daily Reward</div>
               <div className="daily-reward-info-image-button">
                <div className="daily-reward-info-button">
                <span>Log in daily to claim free coins!</span>
                <Button>CLAIM HERE</Button>
                </div> 
                <img className="gift-icon" src="../gift-icon.png" alt="" srcset="" />
                </div>
                
            </div>
            
            <div className="spin-and-win">
                <div className="spin-and-win-title"> Spin and Win</div>
               <div className="spin-and-win-info-image-button">
                <div className="spin-and-win-info-button">
                <span>Spin the wheel of rewards and win big!</span>
                <Button>SPIN THE WHEEL</Button>
                </div> 
                <img className="spinwheel-icon" src="../spinwheel.png" alt="" srcset="" />
                </div>
                
            </div>


            <div className="challenges">
                <div className="challenges-title"> Challenges</div>
               <div className="challenges-info-image-button">
                <div className="challenges-info-button">
                <span>Complete challenges to earn extra rewards.</span>
                <Button>SEE CHALLENGES</Button>
                </div> 
                <img className="challenges-icon" src="../trophy.png" alt="" srcset="" />
                </div>
                
            </div>
            </div>           
        </main>
    )
}