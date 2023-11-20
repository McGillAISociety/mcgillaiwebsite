import React from "react";
import Image from "next/image";
import styles from '../styles/components/Event.module.scss'


export default function Event() {
    return (
        <div className="flex-center">
            <div className="flex-center">
                <Image
                    src="/images/logo.png"
                    alt="MAIS Logo"
                    priority
                    width={350}
                    height={350}
                />
            </div>
            
            <div className={`flex-center ${styles['event-details']}`}>
                <h2>Event Name</h2>
                <h3>Date and Time</h3>
                <p>Description</p>
            </div>
        </div>
    );
}