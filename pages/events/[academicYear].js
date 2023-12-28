import React from 'react';
import Link from 'next/link';

import Events from '../../components/Events';

import academicYearEventsMap from '../../data/events/academicYearEventsMap';

const OurEvents = ({
    academicYear,
    currentAcademicYear,
    otherAcademicYears,
    eventsData,
}) => {
    let blurb;
    if (academicYear === currentAcademicYear) {
        blurb = (
            <>
                View events from previous years:
                {otherAcademicYears.map((year) => (
                    <>
                        &nbsp;&nbsp;
                        <Link href={`/events/${year}`}>{year}</Link>
                    </>
                ))}
            </>
        );
    } else {
        blurb = (
            <>
                You are viewing events from previous years. View our&nbsp;
                <Link href={`/events/${currentAcademicYear}`}>current events</Link>
                &nbsp;or other event archives:
                {otherAcademicYears
                    .filter((year) => year !== currentAcademicYear)
                    .map((year) => (
                        <>
                            &nbsp;&nbsp;
                            <Link href={`/events/${year}`}>{year}</Link>
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
            <Events eventsData={eventsData} />
            {academicYear === currentAcademicYear}
        </>
    );
};

export async function getStaticProps({ params }) {
    const { academicYear } = params;

    if (!academicYearEventsMap.has(academicYear)) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            academicYear,
            currentAcademicYear: academicYearEventsMap.get(
                'currentAcademicYear'
            ),
            otherAcademicYears: Array.from(academicYearEventsMap.keys()).filter(
                (key) => key !== 'currentAcademicYear' && key !== academicYear
            ),
            eventsData: academicYearEventsMap.get(academicYear),
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: Array.from(academicYearEventsMap.keys())
            .filter((key) => key !== 'currentAcademicYear')
            .map((academicYear) => ({
                params: {
                    academicYear,
                },
            })),
        fallback: false,
    };
}

export default OurEvents;