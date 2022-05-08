import React from 'react';
import Image from 'next/image';

import Profiles from '../../components/Profiles';

import execs2021_2022 from './execs/2021-2022';
import execs2020_2021 from './execs/2020-2021';
import execs2019_2020 from './execs/2019-2020';

// it's important for this to be more-recent-years=first
const execsAcademicYears = new Map();
execsAcademicYears.set('2021-2022', execs2021_2022);
execsAcademicYears.set('2020-2021', execs2020_2021);
execsAcademicYears.set('2019-2020', execs2019_2020);

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

    if (!(academicYear in execsAcademicYears)) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            academicYear,
            execsData: execsAcademicYears[academicYear],
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: Object.keys(execsAcademicYears).map((academicYear) => ({
            params: {
                academicYear,
            },
        })),
        fallback: false,
    };
}

export default OurTeam;
