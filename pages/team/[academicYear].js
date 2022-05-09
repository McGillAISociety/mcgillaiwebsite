import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Profiles from '../../components/Profiles';

import academicYearExecsMap from '../../data/execs/academicYearExecsMap.js';

const OurTeam = ({
    academicYear,
    currentAcademicYear,
    otherAcademicYears,
    execsData,
}) => {
    let blurb;
    if (academicYear === currentAcademicYear) {
        blurb = (
            <>
                You can also view our exec teams from previous academic years!
                {otherAcademicYears.map((year) => (
                    <>
                        &nbsp;&nbsp;
                        <Link href={`/team/${year}`}>{year}</Link>
                    </>
                ))}
            </>
        );
    } else {
        blurb = (
            <>
                You are viewing the team from a previous academic year. You can
                view the&nbsp;
                <Link href={`/team/${currentAcademicYear}`}>current team</Link>
                &nbsp;or other exec archives:
                {otherAcademicYears
                    .filter((year) => year !== currentAcademicYear)
                    .map((year) => (
                        <>
                            &nbsp;&nbsp;
                            <Link href={`/team/${year}`}>{year}</Link>
                        </>
                    ))}
            </>
        );
    }

    return (
        <>
            <section>
                <p>{blurb}</p>
            </section>
            <Profiles profilesData={execsData} />
            {academicYear === currentAcademicYear && (
                <section className="flex-center">
                    <h3>
                        Join a team like no other! Exec recruitement starts in
                        late February.
                    </h3>
                    <Image
                        src="/images/team/execs.jpeg"
                        alt="MAIS execs"
                        height={756}
                        width={1080}
                    />
                </section>
            )}
        </>
    );
};

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
            currentAcademicYear: academicYearExecsMap.get(
                'currentAcademicYear'
            ),
            otherAcademicYears: Array.from(academicYearExecsMap.keys()).filter(
                (key) => key !== 'currentAcademicYear' && key !== academicYear
            ),
            execsData: academicYearExecsMap.get(academicYear),
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: Array.from(academicYearExecsMap.keys())
            .filter((key) => key !== 'currentAcademicYear')
            .map((academicYear) => ({
                params: {
                    academicYear,
                },
            })),
        fallback: false,
    };
}

export default OurTeam;
