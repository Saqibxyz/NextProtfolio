"use client"
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";


const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    const size = useScreenSize();
    const isLarge = size >= 1024;
    const isMedium = size >= 768 && size < 1024

    return (
        <div className="fixed h-screen flex items-center justify-center w-full ">



            <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
                {BtnList.map((btn, index) => {
                    const angleRadian = (index * angleIncrement * Math.PI) / 180;


                    const radius = isLarge ? `calc(20vw - 1rem)` : isMedium ? `calc(30vw - 1rem)` : `calc(40vw - 1rem)`




                    const x = `calc(${radius}*${Math.cos(angleRadian)})`;
                    const y = `calc(${radius}*${Math.sin(angleRadian)})`;

                    return <NavButton key={btn.label} {...btn} x={x} y={y} />;
                })}
            </div>














        </div>
    );
};

export default Navigation;
