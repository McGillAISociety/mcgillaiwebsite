import Image from 'next/image';
import styles from '../styles/pages/gallery.module.scss';

const sections = [
    {
        title: 'MAIS Hacks 2025',
        folder: 'maishacks25',

        cover: 'group_photo',

        photos: [
            //'group_photo2',
            'group_photo3',
            //'1stplace_award',
            'bestnewbiehack_award',
            'peoplechoice_award',
            'duo1',
            'solo1',
            '3mecs_audiorecorder',
            'hacks_presentation2',
            'hacks_presentation5',
            'salletrottierhackathon_deloin6',
        ],
    },

    {
        title: 'Learnathon 2026',
        folder: 'learnathon2026',

        cover: 'lecture1',

        photos: [
            'lecture2',
            'mila',
            'mila1',
        ],
    },

    {
        title: 'MAIS 202 Bootcamp',
        folder: 'mais202bootcamp',

        cover: '4guys_reddit',

        photos: [
            'marsrover',
            'speechimpactanalyzer',
        ],
    },

    {
        title: 'Social Events',
        folder: 'socialevents',

        cover: 'cover',

        photos: [
            // add your filenames here
        ],
    },
];

export default function Gallery() {
    return (
        <>
            {sections.map((section) => (
                <section key={section.title}>

                    <h2>{section.title}</h2>

                    <div className={styles.coverImage}>

                        <Image
                            src={`/images/gallery/${section.folder}/${section.cover}.png`}
                            alt={section.title}
                            width={1600}
                            height={900}
                        />

                    </div>

                    <div className={styles.galleryGrid}>

                        {section.photos.map((photo) => (

                            <div
                                key={photo}
                                className={styles.galleryItem}
                            >

                                {/* <Image
                                    src={`/images/gallery/${section.folder}/${photo}.png`}
                                    alt={`${section.title} - ${photo}`}
                                    width={600}
                                    height={400}
                                /> */}
                                <Image
                                    src={`/images/gallery/${section.folder}/${photo}.png`}
                                    alt={`${section.title} - ${photo}`}
                                    width={600}
                                    height={400}
                                    className={
                                        [
                                            '1stplace_award',
                                            'bestnewbiehack_award',
                                            'peoplechoice_award',
                                            'solo3',
                                        ].includes(photo)
                                            ? styles.zoomOut
                                            : ''
                                    }
                                />

                            </div>

                        ))}

                    </div>

                </section>
            ))}
        </>
    );
}