import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
    margin: auto;
    position: relative;
    display: block;
    overflow: hidden;
    font-size: 30pt;
`;

const ImageGrid = styled('div')`
    font-size: 0;
`;

const ImageCell = styled('a')`
    display: inline-block;
    vertical-align: top;
    width: 33.33%;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:after {
        content: '';
        display: block;
        padding-top: 100%;
    }

    &:hover .Background {
        -webkit-transform: scale(1.025);
        transform: scale(1.025);
    }

    &:hover .Bounds {
        opacity: 0.6;
    }

    &:hover .Text {
        opacity: 1;
    }

    @media screen and (max-width: 750px) {
        width: 50%;
    }
`;

const ImageBounds = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: opacity 500ms;
    background: ${(props) =>
        props.red
            ? 'linear-gradient(to bottom,#722D60, #A81245)'
            : 'linear-gradient(to bottom,#6E2F62, #003399)'};
`;

const ImageText = styled('div')`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    color: white;
    text-align: center;
    opacity: 1;
    transition: opacity 500ms;

    > h2 {
        font-size: 30px;
        margin: 20px 0px;

        @media screen and (max-width: 1150px) {
            margin-bottom: 10px;
            font-size: 26px;
        }

        @media screen and (max-width: 1000px) {
            font-size: 20px;
        }
        @media screen and (max-width: 767px) {
            font-size: 16px;
            margin-bottom: 5px;
        }
    }

    > h3 {
        font-family: 'Montserrat';
        font-size: 20px;
        @media screen and (max-width: 1150px) {
            font-size: 16px;
        }

        @media screen and (max-width: 767px) {
            margin-top: 0;
            font-size: 14px;
        }

        @media screen and (max-width: 575px) {
            font-size: 12px;
        }

        @media screen and (max-width: 350px) {
            font-size: 10px;
        }
    }

    @media screen and (max-width: 850px) {
        padding: 10px;
        padding-bottom: 5px;
    }
`;

class Resources extends React.Component {
    render() {
        return (
            <Container>
                <ImageGrid>
                    <ImageCell
                        href="https://mila.quebec/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>
                                MILA (Quebec Artificial Intelligence Institute)
                            </h2>
                            <h3>
                                Mila is a community of 450 researchers
                                specializing in machine learning and dedicated
                                to scientific excellence and innovation. Many
                                members are also professors at various Quebec
                                universities. They have research projects in
                                numerous fundamental and applied areas of ML.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell
                        href="https://www.google.com/url?q=https://sites.google.com/lisa.iro.umontreal.ca/tea-talks/home&sa=D&ust=1590498852183000&usg=AFQjCNFeHGXWFsoiPghmXt9rMmM5saJ5iA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>Mila Tea Talks</h2>
                            <h3>
                                Tea talks are scientific keynote-like talks
                                given at Mila on Friday mornings (10:30am EDT).
                                Speakers are either internal or invited, and
                                give a 1 hour talk with 15 minutes of questions
                                interspersed throughout. These talks are open to
                                the public, but the vast majority of attendees
                                are Mila students and professors, so the talks
                                are aimed at that level of understanding.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell
                        href="https://ivado.ca/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds className="Bounds"></ImageBounds>
                        <ImageText className="Text">
                            <h2>Ivado (Institue for Data Valorization)</h2>
                            <h3>
                                IVADO aims to bring together industry
                                professionals and academic researchers to
                                develop cutting-edge expertise in data science,
                                operational research and artificial
                                intelligence.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell
                        href="https://www.cim.mcgill.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds className="Bounds"></ImageBounds>
                        <ImageText className="Text">
                            <h2>
                                McGill CIM (Centre for Intelligence Machines)
                            </h2>
                            <h3>
                                CIM is an inter-departmental inter-faculty
                                research group at McGill which was formed in
                                1985 to facilitate and promote research on
                                intelligent systems. A handful of McGill labs
                                that apply AI to different fields can be found
                                on their website!{' '}
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell
                        href="http://rl.cs.mcgill.ca/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>McGill Reasoning and Learning Lab</h2>
                            <h3>
                                The research in the Reasoning and Learning Lab,
                                co-directed by Professors Prakash Panangaden,
                                Doina Precup, Joelle Pineau, and Jackie Chi Kit
                                Cheung, is broadly concerned with the study of
                                probabilistic systems. Current areas of interest
                                include Markov processes, reinforcement learning
                                and computational linguistics.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell
                        href="https://www.ai4goodlab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds className="Bounds"></ImageBounds>
                        <ImageText className="Text">
                            <h2>AI4Good Lab</h2>
                            <h3>
                                The AI for Good Lab Program takes place over 7
                                weeks and brings together a cohort of 30 women
                                from across Canada. The program consists of a
                                mashup of lectures, workshops, self-directed
                                team projects. Instructors and mentors include
                                university researchers, graduate students, and
                                practitioners from startups, corporates,
                                inter-governmental organizations and city
                                government.
                            </h3>
                        </ImageText>
                    </ImageCell>

                    <ImageCell
                        href="https://ivado.ca/en/ivado-scholarships/undergraduate-research-scholarships/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        <ImageBounds
                            red={true}
                            className="Bounds"
                        ></ImageBounds>
                        <ImageText className="Text">
                            <h2>
                                Ivado Undergraduate Intro to Research
                                Scholarships
                            </h2>
                            <h3> A cool summer opportunity!</h3>
                        </ImageText>
                    </ImageCell>
                </ImageGrid>
            </Container>
        );
    }
}

export default Resources;
