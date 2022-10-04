import * as React from 'react'
import { Layout } from '../components/Layout'
import { Page } from '../components/Page'
import { Intro } from '../components/Intro'
import { Divider } from '../components/Divider'
import { HeightContainer } from '../components/HeightContainer'
import { CardNoImage } from '../components/CardNoImage'
import { TeamCard } from '../components/TeamCard'
import { CallToAction } from '../components/CallToAction'

import styled from '../styles/styled-components'
import { Link, graphql } from 'gatsby'
import { StyledSideBlock } from '../components/SideBlock'
import { BackgroundImage } from '../components/BackgroundImage'
import { getEmSize } from '../styles/mixins'
import { ResponsiveBackgroundImage } from '../components/ResponsiveBackgroundImage'

const StyledIntro = styled(Intro)`
  max-width: 840px;
`

const TeamSideBlock = styled(StyledSideBlock)`
  width: auto;
  background-color: transparent;

  h3 {
    font-size: 2.125rem;
  }

  h3 + p {
    margin-top: 2px;
  }
`

const DividerGeometryContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
`

const DividerGeometry = styled(Divider)`
  position: relative;
  background: #202020;
  z-index: 1;
  overflow: hidden;

  p,
  h2 {
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 23.75rem;
    height: 11.875rem;
    background-color: #646464;
    z-index: -2;

    ${(p) => p.theme.media.md`
      height: 30%;
      width: 40%;
    `};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 8rem;
    right: 0;
    width: 13.75rem;
    height: 13.75rem;
    background-color: rgba(255, 255, 255, 0.15);
    z-index: -1;

    ${(p) => p.theme.media.md`
      width: 20%;
      bottom: 0;
    `};
  }
`

const StyledHeightContainer = styled(HeightContainer)`
  ${(p) => p.theme.media.md`
    flex-direction: column;
    height: ${getEmSize(1040)}rem;
  `};
`

const StyledReverseHeightContainer = styled(StyledHeightContainer)`
  ${(p) => p.theme.media.md`
    flex-direction: column-reverse;
  `};
`

interface TeamPageProps {
  data: {
    introImage: SharpFixedImage
    vaminevImage: SharpFixedImage
    vaminevImageMd: SharpFixedImage
    kremenetsImage: SharpFixedImage
    kremenetsImageMd: SharpFixedImage
    annaImage: SharpFixedImage
    annaImageMd: SharpFixedImage
    poyarkovImage: SharpFixedImage
    poyarkovImageMd: SharpFixedImage
    bratchikovImage: SharpFixedImage
    bratchikovImageMd: SharpFixedImage
    sorokinImage: SharpFixedImage
    sorokinImageMd: SharpFixedImage
    kubarevImage: SharpFixedImage
    kubarevImageMd: SharpFixedImage
    ivanovaImage: SharpFixedImage
    ivanovaImageMd: SharpFixedImage
  }
}

const TeamPage: React.FC<TeamPageProps> = ({ data }) => (
  <Layout>
    <Page>
      <StyledIntro
        header={
          <span>
            Untangling Complexity
            <br />
            Since 2012
          </span>
        }
        text="Makeomatic is second to none in solving problems that require the highest level of technical expertise."
      >
        <BackgroundImage image={data.introImage} align="right" />
      </StyledIntro>
      <DividerGeometryContainer>
        <DividerGeometry>
          <h2>Expert Production Crew</h2>
          <p>
            Having delivered dozens of multilayered projects for a variety of industries worldwide,
            we are a tight-knit team ready to execute your idea with speed and precision.
          </p>
        </DividerGeometry>
      </DividerGeometryContainer>
      <StyledHeightContainer>
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.vaminevImage}
            imageMd={data.vaminevImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Vitaly</h3>
            <p>CTO / Mad Scientist</p>
          </TeamSideBlock>
        </TeamCard>
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.kremenetsImage}
            imageMd={data.kremenetsImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Alex</h3>
            <p>CEO / Mobile Expert</p>
          </TeamSideBlock>
        </TeamCard>
      </StyledHeightContainer>
      <StyledReverseHeightContainer>
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.annaImage}
            imageMd={data.annaImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Anna</h3>
            <p>Head of Design</p>
          </TeamSideBlock>
        </TeamCard>
        <CardNoImage
          header="Design"
          text="From intricate UX trees to visual identity, we keep our designs intuitive for users and ready for development right from the get-go."
        />
      </StyledReverseHeightContainer>
      <CallToAction>
        <h2>
          Look through all projects
          <br />
          to see the breadth of <Link to="/">our work</Link>
        </h2>
      </CallToAction>
      <StyledHeightContainer>
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.poyarkovImage}
            imageMd={data.poyarkovImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Eugene</h3>
            <p>Team Master</p>
          </TeamSideBlock>
        </TeamCard>
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.bratchikovImage}
            imageMd={data.bratchikovImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Aleksandr</h3>
            <p>Frontend Hero</p>
          </TeamSideBlock>
        </TeamCard>
      </StyledHeightContainer>
      <StyledHeightContainer>
        <CardNoImage
          header="Development"
          text="We specialize on projects that are plain too hard for most creative agencies to crack. Our experience in cutting-edge tech stacks, such as microservices, and their implementation is what differentiates us from the rest."
        />
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.sorokinImage}
            imageMd={data.sorokinImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Aleksandr</h3>
            <p>Full-Stack Pro</p>
          </TeamSideBlock>
        </TeamCard>
      </StyledHeightContainer>
      <CallToAction>
        <h3>
          Established <Link to="/process">process</Link> is the secret to our achievements
        </h3>
      </CallToAction>
      <StyledHeightContainer>
        <TeamCard>
          <ResponsiveBackgroundImage
            imageLg={data.kubarevImage}
            imageMd={data.kubarevImageMd}
            alignLg="center"
            alignMd="center"
          />
          <TeamSideBlock>
            <h3>Alexey</h3>
            <p>Mobile Expert</p>
          </TeamSideBlock>
        </TeamCard>
        <TeamCard>
          <ResponsiveBackgroundImage imageLg={data.ivanovaImage} imageMd={data.ivanovaImageMd} />
          <TeamSideBlock>
            <h3>Olga</h3>
            <p>Frontend Creator</p>
          </TeamSideBlock>
        </TeamCard>
      </StyledHeightContainer>
      <CallToAction>
        <h3>
          Get in touch to discuss <strong>your project</strong>
        </h3>
      </CallToAction>
    </Page>
  </Layout>
)

export const query = graphql`
  query TeamData {
    introImage: file(relativePath: { eq: "team_intro.jpg" }) {
      ...basicImage
    }

    vaminevImage: file(relativePath: { eq: "team_vaminev.jpg" }) {
      ...basicHalfNorthImage
    }
    vaminevImageMd: file(relativePath: { eq: "team_vaminev.jpg" }) {
      ...basicMdNorthImage
    }

    kremenetsImage: file(relativePath: { eq: "team_kremenets.jpg" }) {
      ...basicHalfNorthImage
    }
    kremenetsImageMd: file(relativePath: { eq: "team_kremenets.jpg" }) {
      ...basicMdNorthImage
    }

    annaImage: file(relativePath: { eq: "team_anna.jpg" }) {
      ...basicHalfNorthImage
    }
    annaImageMd: file(relativePath: { eq: "team_anna.jpg" }) {
      ...basicMdNorthImage
    }

    poyarkovImage: file(relativePath: { eq: "team_poyarkov.jpg" }) {
      ...basicHalfNorthImage
    }
    poyarkovImageMd: file(relativePath: { eq: "team_poyarkov.jpg" }) {
      ...basicMdNorthImage
    }

    sorokinImage: file(relativePath: { eq: "team_sorokin.jpg" }) {
      ...basicHalfNorthImage
    }
    sorokinImageMd: file(relativePath: { eq: "team_sorokin.jpg" }) {
      ...basicMdNorthImage
    }

    bratchikovImage: file(relativePath: { eq: "team_bratchikov.jpg" }) {
      ...basicHalfImage
    }
    bratchikovImageMd: file(relativePath: { eq: "team_bratchikov_md.jpg" }) {
      ...basicMdImage
    }

    kubarevImage: file(relativePath: { eq: "team_kubarev.jpg" }) {
      ...basicHalfImage
    }
    kubarevImageMd: file(relativePath: { eq: "team_kubarev_md.jpg" }) {
      ...basicMdImage
    }

    ivanovaImage: file(relativePath: { eq: "team_ivanova.jpg" }) {
      ...basicHalfImage
    }
    ivanovaImageMd: file(relativePath: { eq: "team_ivanova_md.jpg" }) {
      ...basicMdImage
    }
  }
`

export default TeamPage
