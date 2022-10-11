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
                View exec teams from previous years:
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
                You are viewing a previous exec team. Note that the exec
                headshots and bios may no longer be accurate. View the&nbsp;
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
                        src="/images/team/execs2.jpeg"
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
