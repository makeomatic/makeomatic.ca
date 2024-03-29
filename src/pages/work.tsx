import * as React from 'react'
import styled from '../styles/styled-components'

import { Link, graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Page } from '../components/Page'
import { HeightContainer } from '../components/HeightContainer'
import { CardContents } from '../components/CardContents'
import { Divider } from '../components/Divider'
import { CallToAction } from '../components/CallToAction'
import { StyledSideBlock } from '../components/SideBlock'
import { ResponsiveBackgroundImage } from '../components/ResponsiveBackgroundImage'
import { getEmSize } from '../styles/mixins'

interface WorkPageProps {
  data: {
    section1Image: SharpFixedImage
    section1ImageMd: SharpFixedImage
    section2Image: SharpFixedImage
    section2ImageMd: SharpFixedImage
    section3Image: SharpFixedImage
    section3ImageMd: SharpFixedImage
    section4Image: SharpFixedImage
    section4ImageMd: SharpFixedImage
    section51Image: SharpFixedImage
    section51ImageMd: SharpFixedImage
    section52Image: SharpFixedImage
    section52ImageMd: SharpFixedImage
    section6Image: SharpFixedImage
    section6ImageMd: SharpFixedImage
  }
}

const InvertMdHeader = styled.h3`
  ${(p) => p.theme.media.md`
    color: ${(t) => t.theme.colors.black};
  `};
`
const SubHeader = styled.p``

const InvertedMdSubHeader = styled.p`
  ${(p) => p.theme.media.md`
    color: ${(t) => t.theme.colors.black};
  `};
`

const Desc = styled.div`
  margin-top: 0.25rem;
  font-size: 1.125rem;
  color: ${(p) => p.theme.colors.gray.desc};

  ${(p) => p.theme.media.md`
    display: none;
  `};
`

const TransparentSideBlock = styled(StyledSideBlock)`
  background-color: transparent;
`

const BlackTransparentSideBlock = styled(TransparentSideBlock)`
  color: ${(p) => p.theme.colors.black};
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

    ${(p) => p.theme.media.md`
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

    ${(p) => p.theme.media.md`
      width: 50%;
      background: linear-gradient(135deg, transparent 0%, transparent 75%, #414141 75%, #414141 100%);
    `};
  }
`

const StyledHeightContainer = styled(HeightContainer)`
  ${(p) => p.theme.media.md`
    display: block;
    height: ${getEmSize(1040)}em;
  `};
`

const StyledCardContents = styled(CardContents)`
  ${(p) => p.theme.media.md`
    height: ${getEmSize(520)}em;
  `};
`

const ArtuneSideBlock = styled(StyledSideBlock)`
  background-color: #191919;

  ${(p) => p.theme.media.md`
    background-color: transparent;
  `};
`

const ReadMore = styled.div`
  margin-top: 40px;
  font-weight: 700;
  line-height: 28px;

  & a {
    text-decoration: underline;
  }

  ${(p) => p.theme.media.sm`
    margin-top: 0px;
    & a {
      color: #000000;
      font-size: 1.125rem;
    }  
  `};
`

const WorkPage: React.FC<WorkPageProps> = ({ data }) => (
  <Layout>
    <Page>
      <Divider>
        <h2>Enter Innovation Lab</h2>
        <p>
          Whether you have a business plan, sketch or just a few ideas about the product you'd like
          to create, <Link to="/process">we work with you</Link> from that point onwards, all the
          way through validating your market assumption, designing an optimal solution and
          developing a prototype to be tested and iterated upon based on the feedback from the
          market until it becomes a sustainable product.
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
          <StyledSideBlock>
            <InvertMdHeader>Cappasity 3D</InvertMdHeader>
            <InvertedMdSubHeader>
              Cappasity Cloud platform,
              <br />
              Cappasity Blockchain
              </InvertedMdSubHeader>
            <Desc>
              Bring an in-store browsing experience to online retail with Cappasity, the first
              complete 3D product imaging solution for your website, mobile app, VR and AR
              applications.
            </Desc>
            <ReadMore>
                <Link to="/cappasity">Read more</Link>
              </ReadMore>
          </StyledSideBlock>
        </CardContents>
      </HeightContainer>
      <HeightContainer>
        <CardContents>
          <ResponsiveBackgroundImage
            imageLg={data.section4Image}
            imageMd={data.section4ImageMd}
            alignLg="center"
            alignMd="center"
          />
          <StyledSideBlock>
            <InvertMdHeader>Health App</InvertMdHeader>
            <InvertedMdSubHeader>
              iOS & Android apps,
              <br />
              Cloud platform, design
            </InvertedMdSubHeader>
            <Desc>
              Lose weight for good and increase your wellbeing: Using a smartphone camera, discover
              the foods that have been holding you back.
              <br />
              </Desc>
              <ReadMore>
                <Link to="/health">Read more</Link>
              </ReadMore>
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
          <StyledSideBlock>
            <InvertMdHeader>Microfleet</InvertMdHeader>
            <InvertedMdSubHeader>
              Node.js
              <br />
              Microservices Toolkit
            </InvertedMdSubHeader>
            <Desc>
              Opinionated framework with simple, flexible, scalable and resilent prebuilt
              microservices that glue together like lego blocks.
            </Desc>
          </StyledSideBlock>
        </CardContents>
      </HeightContainer>
      <GeometryDividerContainer>
        <GeometryDivider>
          <h2>Behind The Scene</h2>
          <p>
            A <Link to="/team">cohesive team</Link> of engineers, designers and project managers
            headquartered in beautiful Vancouver, BC
          </p>
        </GeometryDivider>
      </GeometryDividerContainer>
      <HeightContainer>
        <CardContents>
          <ResponsiveBackgroundImage
            imageLg={data.section2Image}
            imageMd={data.section2ImageMd}
            alignLg="center"
            alignMd="center"
          />
          <StyledSideBlock>
            <h3>Radio FX</h3>
            <SubHeader>
              iOS & Android apps,
              <br />
              Cloud platform, design
            </SubHeader>
            <Desc>
              Delivering the power of social radio to college stations through their very own custom
              mobile app experience.
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
          <TransparentSideBlock>
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
          <BlackTransparentSideBlock>
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
          <ArtuneSideBlock>
            <h3>Artune</h3>
            <SubHeader>
              iOS app,
              <br />
              Software
            </SubHeader>
            <Desc>
              Artune is a Social Platform to trade and discover new art open to Artists, Art lovers,
              Galleries, Collectors, Medias, Art Spaces, Art fairs and all Members of the art world
              community.
            </Desc>
          </ArtuneSideBlock>
        </CardContents>
      </HeightContainer>
      <CallToAction>
        <h2>
          Ask us about <Link to="/process">your project</Link>
        </h2>
      </CallToAction>
    </Page>
  </Layout>
)

export const query = graphql`
  fragment basicImage on File {
    childImageSharp {
      fixed(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment basicMdImage on File {
    childImageSharp {
      fixed(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment basicMdNorthImage on File {
    childImageSharp {
      fixed(width: 960, height: 520, quality: 85, cropFocus: NORTH) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment basicMdIntroImage on File {
    childImageSharp {
      fixed(width: 670, height: 500, quality: 85, cropFocus: SOUTH) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment basicHalfImage on File {
    childImageSharp {
      fixed(width: 640, height: 700, quality: 85) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment basicHalfNorthImage on File {
    childImageSharp {
      fixed(width: 640, height: 700, quality: 85, cropFocus: NORTH) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  query WorkData {
    section1Image: file(relativePath: { eq: "work_cappasity.jpg" }) {
      ...basicImage
    }
    section1ImageMd: file(relativePath: { eq: "work_cappasity_md.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 520, quality: 85, cropFocus: EAST) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    section2Image: file(relativePath: { eq: "work_radio.jpg" }) {
      ...basicImage
    }
    section2ImageMd: file(relativePath: { eq: "work_radio_md.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 520, quality: 85, cropFocus: NORTHEAST) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    section3Image: file(relativePath: { eq: "work_microfleet.jpg" }) {
      ...basicImage
    }
    section3ImageMd: file(relativePath: { eq: "work_microfleet_md.jpg" }) {
      ...basicMdImage
    }

    section4Image: file(relativePath: { eq: "work_truepref.png" }) {
      ...basicImage
    }
    section4ImageMd: file(relativePath: { eq: "work_truepref_md.png" }) {
      ...basicMdImage
    }

    section51Image: file(relativePath: { eq: "work_buc.jpg" }) {
      ...basicHalfImage
    }
    section51ImageMd: file(relativePath: { eq: "work_buc_md.jpg" }) {
      ...basicMdImage
    }

    section52Image: file(relativePath: { eq: "work_gemix.jpg" }) {
      ...basicHalfImage
    }
    section52ImageMd: file(relativePath: { eq: "work_gemix_md.jpg" }) {
      ...basicMdImage
    }

    section6Image: file(relativePath: { eq: "work_artune.jpg" }) {
      ...basicImage
    }
    section6ImageMd: file(relativePath: { eq: "work_artune_md.jpg" }) {
      ...basicMdImage
    }
  }
`

export default WorkPage
