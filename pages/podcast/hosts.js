import React from 'react';
import { HeadingUnderline } from '../../components/commonstyles.js';
import Profiles from '../../components/Profiles';
import { execData } from '../ourteam';

const hostData = execData.filter((exec) =>
    [
        'Kaustav Das Sharma',
        'Bonnie Li',
        'Cole Killian',
        'Himanshu Ranka',
    ].includes(exec.name)
);

export default function Hosts() {
    return (
        <div className="section">
            <HeadingUnderline>Meet The Hosts</HeadingUnderline>
            <Profiles profilesData={hostData} />
        </div>
    );
}
