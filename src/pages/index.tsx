import * as React from 'react'
import styled from '../styles/styled-components'

import GatsbyLink from 'gatsby-link'
import { Page } from '../components/Page'
import { Intro } from '../components/Intro'
import { HeightContainer } from '../components/HeightContainer'
import { CardContents } from '../components/CardContents'
import { Divider } from '../components/Divider'
import { CallToAction } from '../components/CallToAction'
import { StyledSideBlock } from '../components/SideBlock'
import { ResponsiveBackgroundImage } from '../components/ResponsiveBackgroundImage'
import { getEmSize } from '../styles/mixins'

interface IndexPageProps {
  data: {
    introImage: SharpResolutionsImage
    introImageMd: SharpResolutionsImage
    section1Image: SharpResolutionsImage
    section1ImageMd: SharpResolutionsImage
    section2Image: SharpResolutionsImage
    section2ImageMd: SharpResolutionsImage
    section3Image: SharpResolutionsImage
    section3ImageMd: SharpResolutionsImage
    section4Image: SharpResolutionsImage
    section4ImageMd: SharpResolutionsImage
    section51Image: SharpResolutionsImage
    section51ImageMd: SharpResolutionsImage
    section52Image: SharpResolutionsImage
    section52ImageMd: SharpResolutionsImage
    section6Image: SharpResolutionsImage
    section6ImageMd: SharpResolutionsImage
  }
}

const InvertMdHeader = styled.h3`
  ${p => p.theme.media.md`
    color: ${t => t.theme.colors.black};
  `};
`
const SubHeader = styled.p`
  ${p => p.theme.media.md`
    display: none;
  `};
`
const Desc = styled.div`
  margin-top: 0.25rem;
  font-size: 1.125rem;
  color: ${p => p.theme.colors.gray.desc};

  ${p => p.theme.media.md`
    display: none;
  `};
`

const TransparentSideBlock = styled(StyledSideBlock)`
  background-color: transparent;
`

const BlackTransparentSideBlock = styled(TransparentSideBlock)`
  color: ${p => p.theme.colors.black};
`

const GeometryDividerContainer = styled.div`
  position: relative;
  width: 100%;
`

const GeometryDivider = styled(Divider)`
  position: relative;
  background: #000;
  overflow: hidden;

  p,
  h2 {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    top: 0;
    left: 0;
    bottom: 0;
    background: #000;
    background-size: 100%;
    background: linear-gradient(45deg, #202020 0%, #202020 90%, transparent 90%, transparent 100%);
    z-index: 0;

    ${p => p.theme.media.md`
      width: 100%;
      background: linear-gradient(45deg, #202020 0%, #202020 70%, transparent 70%, transparent 100%);
    `};
  }

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    background-size: 100%;
    background: linear-gradient(135deg, transparent 0%, transparent 50%, #414141 50%, #414141 100%);
    z-index: 1;

    ${p => p.theme.media.md`
      width: 50%;
      background: linear-gradient(135deg, transparent 0%, transparent 75%, #414141 75%, #414141 100%);
    `};
  }
`

const StyledHeightContainer = styled(HeightContainer)`
  ${p => p.theme.media.md`
    display: block;
    height: ${getEmSize(1040)}em;
  `};
`

const StyledCardContents = styled(CardContents)`
  ${p => p.theme.media.md`
    height: ${getEmSize(520)}em;
  `};
`

const ArtuneSideBlock = styled(StyledSideBlock)`
  background-color: #191919;

  ${p => p.theme.media.md`
    background-color: transparent;
  `};
`

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => (
  <Page>
    <Intro
      header={
        <span>
          Ideas
          <br />
          Turned Products
        </span>
      }
      text="Makeomatic is your cutting-edge web development and design partner specializing in creating high-load interactive applications."
    >
      <ResponsiveBackgroundImage
        imageLg={data.introImage}
        imageMd={data.introImageMd}
        alignLg="center"
        alignMd="center"
      />
    </Intro>
    <Divider>
      <h2>Enter Innovation Lab</h2>
      <p>
        Whether you have a business plan, a sketch or just a few ideas about the product you'd like
        to realize, <GatsbyLink to="/process">we work with you</GatsbyLink> from that point onwards,
        all the way through validating your market assumption, designing an optimal solution, and
        developing a prototype to be tested and iterated upon based on the feedback from the market
        until it becomes a sustainable product.
      </p>
    </Divider>
    <HeightContainer>
      <CardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section1Image}
          imageMd={data.section1ImageMd}
          alignLg="center"
          alignMd="right"
        />
        <StyledSideBlock more="/contacts">
          <h3>Cappasity 3D</h3>
          <SubHeader>
            Cappasity Cloud platform,
            <br />
            Cappasity Blockchain
          </SubHeader>
          <Desc>
            Cappasity is your cutting-edge web development and design partner specializing in
            creating high-load interactive applications.
          </Desc>
        </StyledSideBlock>
      </CardContents>
    </HeightContainer>
    <HeightContainer>
      <CardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section2Image}
          imageMd={data.section2ImageMd}
          alignLg="center"
          alignMd="right"
        />
        <StyledSideBlock more="/contacts">
          <h3>Radio FX</h3>
          <SubHeader>
            iOS & Android apps,
            <br />
            Cloud platform, design
          </SubHeader>
          <Desc>
            RadioFX is your cutting-edge web development and design partner specializing in creating
            high-load interactive applications.
          </Desc>
        </StyledSideBlock>
      </CardContents>
    </HeightContainer>
    <HeightContainer>
      <CardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section3Image}
          imageMd={data.section3ImageMd}
          alignLg="center"
          alignMd="center"
        />
        <StyledSideBlock more="/contacts">
          <InvertMdHeader>Microfleet</InvertMdHeader>
          <SubHeader>
            Our product
            <br />
            Scalable framework
          </SubHeader>
          <Desc>
            Microfleet is your cutting-edge web development and design partner specializing in
            creating high-load interactive applications.
          </Desc>
        </StyledSideBlock>
      </CardContents>
    </HeightContainer>
    <GeometryDividerContainer>
      <GeometryDivider>
        <h2>Behind The Scene</h2>
        <p>
          A <GatsbyLink to="/team">cohesive team</GatsbyLink> of engineers, designers and project
          managers headquartered in in beautiful Vancouver, BC
        </p>
      </GeometryDivider>
    </GeometryDividerContainer>
    <HeightContainer>
      <CardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section4Image}
          imageMd={data.section4ImageMd}
          alignLg="center"
          alignMd="center"
        />
        <StyledSideBlock more="/contacts">
          <h3>True Preferences</h3>
          <SubHeader>
            iOS & Android apps,
            <br />
            Cloud platform, design
          </SubHeader>
          <Desc>
            True Preferences is your cutting-edge web development and design partner specializing in
            in creating high-load interactive applications.
          </Desc>
        </StyledSideBlock>
      </CardContents>
    </HeightContainer>
    <StyledHeightContainer>
      <StyledCardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section51Image}
          imageMd={data.section51ImageMd}
          alignLg="center"
          alignMd="center"
        />
        <TransparentSideBlock more="/contacts">
          <h3>Byczynski</h3>
          <SubHeader>
            Branding,
            <br />
            Print materials
          </SubHeader>
        </TransparentSideBlock>
      </StyledCardContents>
      <StyledCardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section52Image}
          imageMd={data.section52ImageMd}
          alignLg="center"
          alignMd="center"
        />
        <BlackTransparentSideBlock more="/contacts">
          <h3>Gemix</h3>
          <SubHeader>
            Branding,
            <br />
            Print materials
          </SubHeader>
        </BlackTransparentSideBlock>
      </StyledCardContents>
    </StyledHeightContainer>
    <HeightContainer>
      <CardContents>
        <ResponsiveBackgroundImage
          imageLg={data.section6Image}
          imageMd={data.section6ImageMd}
          alignLg="center"
          alignMd="center"
        />
        <ArtuneSideBlock more="/contacts">
          <h3>Artune</h3>
          <SubHeader>
            iOS app,
            <br />
            Software
          </SubHeader>
          <Desc>
            Artune is your cutting-edge web development and design partner specializing in creating
            high-load interactive applications.
          </Desc>
        </ArtuneSideBlock>
      </CardContents>
    </HeightContainer>
    <CallToAction>
      <h2>
        Ask us about <GatsbyLink to="/process">your project</GatsbyLink>
      </h2>
    </CallToAction>
  </Page>
)

export const query = graphql`
  query IndexData {
    introImage: imageSharp(id: { regex: "/work_intro.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    introImageMd: imageSharp(id: { regex: "/work_intro_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85, cropFocus: NORTH) {
        ...GatsbyImageSharpResolutions
      }
    }

    section1Image: imageSharp(id: { regex: "/work_cappasity.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section1ImageMd: imageSharp(id: { regex: "/work_cappasity_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85, cropFocus: EAST) {
        ...GatsbyImageSharpResolutions
      }
    }

    section2Image: imageSharp(id: { regex: "/work_radio.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section2ImageMd: imageSharp(id: { regex: "/work_radio_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85, cropFocus: NORTHEAST) {
        ...GatsbyImageSharpResolutions
      }
    }

    section3Image: imageSharp(id: { regex: "/work_microfleet.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section3ImageMd: imageSharp(id: { regex: "/work_microfleet_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section4Image: imageSharp(id: { regex: "/work_truepref.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section4ImageMd: imageSharp(id: { regex: "/work_truepref_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section51Image: imageSharp(id: { regex: "/work_buc.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section51ImageMd: imageSharp(id: { regex: "/work_buc_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section52Image: imageSharp(id: { regex: "/work_gemix.jpg/" }) {
      resolutions(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section52ImageMd: imageSharp(id: { regex: "/work_gemix_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section6Image: imageSharp(id: { regex: "/work_artune.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section6ImageMd: imageSharp(id: { regex: "/work_artune_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 90) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`

export default IndexPage
