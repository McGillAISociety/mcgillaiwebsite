import React from "react";
import Image from 'next/image';
import Event from "../components/Event";

export default function Events() {
    return(
        <>
            <section>
                <p>Stay up to date with all of our events for the current academic year!</p>
                <Event></Event>
            </section>
        </>
    );
}