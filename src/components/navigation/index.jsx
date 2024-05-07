"use client"
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";


const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;

    return (
        <div className="fixed h-screen flex items-center justify-center w-full ">



            <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
                {BtnList.map((btn, index) => {
                    const angleRadian = (index * angleIncrement * Math.PI) / 180;
                    const radius = `calc(20vw - 1rem)`;
                    const x = `calc(${radius}*${Math.cos(angleRadian)})`;
                    const y = `calc(${radius}*${Math.sin(angleRadian)})`;

                    return <NavButton key={btn.label} {...btn} x={x} y={y} />;
                })}
            </div>














        </div>
    );
};

export default Navigation;
