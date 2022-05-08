import React from 'react';
import Image from 'next/image';

import Profiles from '../../components/Profiles';

import academicYearExecsMap from '../../data/execs/academicYearExecsMap';

const OurTeam = ({ academicYear, execsData }) => (
    <>
        <Profiles profilesData={execsData} />
        <section className="flex-center">
            <h3>
                Join a team like no other! Exec recruitement starts in late
                February.
            </h3>
            <Image
                src="/images/ourteam/execs.jpeg"
                alt="MAIS execs"
                height={756}
                width={1080}
            />
        </section>
    </>
);

export async function getStaticProps({ params }) {
    const { academicYear } = params;

    if (!academicYearExecsMap.has(academicYear)) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            academicYear,
            execsData: academicYearExecsMap.get(academicYear),
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: Array.from(academicYearExecsMap.keys()).map((academicYear) => ({
            params: {
                academicYear,
            },
        })),
        fallback: false,
    };
}

export default OurTeam;
