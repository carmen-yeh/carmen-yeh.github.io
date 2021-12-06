import React, { useEffect } from "react";
import LoveBox from "../../components/1-love-language/LoveBox";
import BottomNavigation from "../../components/BottomNavigation";
import "../../pages/1-love-language/lovelanguage.css";
import TopNavigation from "../../components/TopNavigation";
import poem from "../../assets/lovelanguagepoem.png";

function LoveLanguagePage() {

    useEffect(() => {window.scrollTo(0,0)});

    return(
        <div id='background-red'>
            <TopNavigation/>
            <div id = 'lovelanguage'>
                
                <h1>LOVE.LANGUAGE</h1>
                <p>LOVE.LANGUAGE explores the idea of expressing love through the sending of images online to loved ones. This is an image analysis of photos I’ve posted online over time where each white square is an image related to food. I highlighted these findings and linked them to the idea of a digital love language.</p>

        <div style={{display:"flex", justifyContent: "center", maxHeight: "100wh"}}>
            <img src={poem} alt="poem" style={{position: "absolute", height: "100wh", maxWidth: 800}} />
        </div>
        <div style={{position: "relative"}}>

        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={10} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={20} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={20} text={"strawberry -crepe-cake.jpg"} verticalSpace={0}/>
                    <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={4.3} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={12} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={27.7} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={26} text={""} verticalSpace={0}/>
        </div>
        
                <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={22} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={26} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={15} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={6} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={27.7} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={14.7} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={4.3} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={5.8} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={14} text={""} verticalSpace={0}/>
        </div>
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={22} text={""} verticalSpace={10}/>
                 
        </div>
         <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={27.8} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={27} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={85} text={""} verticalSpace={0}/>
                    
        </div>
         <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={27.8} text={""} verticalSpace={0}/>
                    
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={5} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={22.8} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={38} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={5} text={""} verticalSpace={0}/>
                    <LoveBox paddingLeft={22.8} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={38} text={""} verticalSpace={0}/>
                    
        </div>
        
         <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={27.8} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={12} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={10} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={16} text={""} verticalSpace={0}/>
                    
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={11} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={17} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={16} text={""} verticalSpace={0}/>
            
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={17} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={45.4} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={5} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
                    
        <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={17.6} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={31} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={70.7} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
        </div>
        
         <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={28} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={6} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={19.7} text={""} verticalSpace={0}/>
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={16} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={12.1} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={20} text={""} verticalSpace={0}/>
       
        </div>
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={28} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={25.8} text={""} verticalSpace={0}/>
       
        </div>
        
        <div style={{display: 'flex'}}>
                   
        <LoveBox paddingLeft={76} text={""} verticalSpace={0}/>
       
        </div>
        
        <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={28} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={6} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={0} text={""} verticalSpace={0}/>
       
        </div>
        
          <div style={{display: 'flex'}}>
                    <LoveBox paddingLeft={59.6} text={""} verticalSpace={0}/>
        <LoveBox paddingLeft={22} text={""} verticalSpace={0}/>
       
        </div>
        </div>
                
                <BottomNavigation colour="red"/>
                <div id= "footer">  
                    <p2> UP.LOADED - Carmen Yeh 2021 </p2>
                </div>
            </div>
        </div>
        
    )
}

export default LoveLanguagePage;