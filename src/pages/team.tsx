import * as React from 'react'
import { Page } from '../components/Page'
import { Intro } from '../components/Intro'
import { Divider } from '../components/Divider'
import { HeightContainer } from '../components/HeightContainer'
import { CardNoImage } from '../components/CardNoImage'
import { TeamCard } from '../components/TeamCard'
import { CallToAction } from '../components/CallToAction'

import styled from '../styles/styled-components'
import GatsbyLink from 'gatsby-link'
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
`

const DividerGeometryContainer = styled.div`
  position: relative;
  background: #202020;
  width: 100%;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 11.875rem;
    background-color: #646464;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 8rem;
    right: 0;
    width: 50%;
    height: 13.75rem;
    background-color: rgba(255, 255, 255, 0.15);
  }
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

    ${p => p.theme.media.md`
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

    ${p => p.theme.media.md`
      width: 20%;
      bottom: 0;
    `};
  }
`

const StyledHeightContainer = styled(HeightContainer)`
  ${p => p.theme.media.md`
    flex-direction: column;
    height: ${getEmSize(1040)}rem;
  `};
`

const StyledReverseHeightContainer = styled(StyledHeightContainer)`
  ${p => p.theme.media.md`
    flex-direction: column-reverse;
  `};
`

interface TeamPageProps {
  data: {
    introImage: SharpResolutionsImage
    vaminevImage: SharpResolutionsImage
    vaminevImageMd: SharpResolutionsImage
    kremenetsImage: SharpResolutionsImage
    kremenetsImageMd: SharpResolutionsImage
    annaImage: SharpResolutionsImage
    annaImageMd: SharpResolutionsImage
    poyarkovImage: SharpResolutionsImage
    poyarkovImageMd: SharpResolutionsImage
    bratchikovImage: SharpResolutionsImage
    bratchikovImageMd: SharpResolutionsImage
    kubarevImage: SharpResolutionsImage
    kubarevImageMd: SharpResolutionsImage
    ivanovaImage: SharpResolutionsImage
    ivanovaImageMd: SharpResolutionsImage
  }
}

const TeamPage: React.SFC<TeamPageProps> = ({ data }) => (
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
      <BackgroundImage image={data.introImage} align="center" />
    </StyledIntro>
    <DividerGeometryContainer>
      <DividerGeometry>
        <h2>Expert Production Crew</h2>
        <p>
          Having delivered dozens of multilayered projects for a variety of industries worldwide, we
          are a tight-knit team ready to execute your idea with speed and precision.
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
          <p>CTO / Mad Scientist</p>
          <h3>Vitaly Aminev</h3>
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
          <p>CEO / Mobile Expert</p>
          <h3>Aleksandr Kremenets</h3>
        </TeamSideBlock>
      </TeamCard>
    </StyledHeightContainer>
    <StyledReverseHeightContainer>
      <TeamCard>
        <ResponsiveBackgroundImage
          imageLg={data.annaImage}
          imageMd={data.annaImageMd}
          alignLg="right"
          alignMd="center"
        />
        <TeamSideBlock>
          <p>Head of Design</p>
          <h3>Anna Amineva</h3>
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
        to see the breadth of <GatsbyLink to="/">our work</GatsbyLink>
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
          <p>Team Master</p>
          <h3>Evgeny Poyarkov</h3>
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
          <p>Frontend Hero</p>
          <h3>Aleksandr Bratchikov</h3>
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
          imageLg={data.vaminevImage}
          imageMd={data.vaminevImageMd}
          alignLg="center"
          alignMd="center"
        />
        <TeamSideBlock>
          <p>Full-Stack Pro</p>
          <h3>Aleksandr Sorokin</h3>
        </TeamSideBlock>
      </TeamCard>
    </StyledHeightContainer>
    <CallToAction>
      <h3>
        Established <GatsbyLink to="/process">process</GatsbyLink> is the secret to our achievements
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
          <p>Full-Stack Whiz</p>
          <h3>Aleksey Khoroshev</h3>
        </TeamSideBlock>
      </TeamCard>
      <TeamCard>
        <ResponsiveBackgroundImage imageLg={data.ivanovaImage} imageMd={data.ivanovaImageMd} />
        <TeamSideBlock>
          <p>Frontend Creator</p>
          <h3>Olga Ivanova</h3>
        </TeamSideBlock>
      </TeamCard>
    </StyledHeightContainer>
    <CallToAction>
      <h3>
        Get in touch to discuss <GatsbyLink to="/contacts">your project</GatsbyLink>
      </h3>
    </CallToAction>
  </Page>
)

export const query = graphql`
  query TeamData {
    introImage: imageSharp(id: { regex: "/team_intro.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    vaminevImage: imageSharp(id: { regex: "/team_vaminev.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    vaminevImageMd: imageSharp(id: { regex: "/team_vaminev_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    kremenetsImage: imageSharp(id: { regex: "/team_kremenets.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85, cropFocus: NORTH) {
        ...GatsbyImageSharpResolutions
      }
    }
    kremenetsImageMd: imageSharp(id: { regex: "/team_kremenets_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    annaImage: imageSharp(id: { regex: "/team_anna.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    annaImageMd: imageSharp(id: { regex: "/team_anna_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    poyarkovImage: imageSharp(id: { regex: "/team_poyarkov.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    poyarkovImageMd: imageSharp(id: { regex: "/team_poyarkov_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    bratchikovImage: imageSharp(id: { regex: "/team_bratchikov.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    bratchikovImageMd: imageSharp(id: { regex: "/team_bratchikov_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    kubarevImage: imageSharp(id: { regex: "/team_kubarev.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    kubarevImageMd: imageSharp(id: { regex: "/team_kubarev_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    ivanovaImage: imageSharp(id: { regex: "/team_ivanova.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    ivanovaImageMd: imageSharp(id: { regex: "/team_ivanova_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`

export default TeamPage
