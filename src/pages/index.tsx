import * as React from 'react'
import styled from '../styles/styled-components'

import { Link, graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Page } from '../components/Page'
import { Intro } from '../components/Intro'
import { HeightContainer } from '../components/HeightContainer'
import { CardContents } from '../components/CardContents'
import { Divider } from '../components/Divider'
import { CallToAction } from '../components/CallToAction'
import { StyledSideBlock } from '../components/SideBlock'
import { ResponsiveBackgroundImage } from '../components/ResponsiveBackgroundImage'
import { getEmSize } from '../styles/mixins'
import { TeaserBackgroundImage } from '../components/TeaserBackgroundImage'

interface IndexPageProps {
  data: {
    introImage: SharpFixedImage
    introImageMd: SharpFixedImage
    section1Image: SharpFixedImage
    section1ImageMd: SharpFixedImage
    section1ImageSm: SharpFixedImage
    section1ImageXs: SharpFixedImage
    section2Image: SharpFixedImage
    section2ImageSm: SharpFixedImage
    section2ImageXs: SharpFixedImage
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

/*
  new teaser blocks
 */

const TeaserBlock = styled(HeightContainer)`
  height: ${getEmSize(700)}em;

  ${p => p.theme.media.sm`
    height: ${getEmSize(812)}em;
  `};
  ${p => p.theme.media.xs`
    height: ${getEmSize(896)}em;
  `};
`

const TeaserTextBlock = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 470px;

  ${p => p.theme.media.sm`
    width: 290px;
    justify-content: flex-start;
    margin-left: 16px;
    margin-top: 118px;
  `};
`
const TeaserTitle = styled.div`
  color: ${p => p.theme.colors.white};
  font-size: 56px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  line-height: 61px;

  ${p => p.theme.media.sm`
    font-size: 34px;
    line-height: 45px;
  `};
`
const TeaserDesc = styled.div`
  font-size: 28px;
  line-height: 36px;
  font-weight: normal;
  margin-top: 40px;

  ${p => p.theme.media.sm`
    margin-top: 20px;
    font-size: 22px;
    line-height: 28px;
  `};
`
const TeaserReadMore = styled.div`
  margin-top: 40px;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;

  & a {
    text-decoration: underline;
  }

  ${p => p.theme.media.sm`
    font-size: 22px;
    margin-top: 20px;
  `};
`

// specific classes

const PaymentsTeaserTextBlock = styled(TeaserTextBlock)`
  padding-top: 70px;

  ${p => p.theme.media.sm`
    padding-top: 0;
  `};
`

// end teaser blocks

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <Page>
      <Intro
        header={
          <span>
            Ideas
            <br />
            Turned Products
          </span>
        }
        text="Makeomatic is your long-term web development and design partner specializing in creating high-load interactive applications."
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
          Whether you have a business plan, sketch or just a few ideas about the product you'd like
          to create, <Link to="/process">we work with you</Link> from that point onwards, all the
          way through validating your market assumption, designing an optimal solution and
          developing a prototype to be tested and iterated upon based on the feedback from the
          market until it becomes a sustainable product.
        </p>
      </Divider>
      <TeaserBlock>
        <CardContents>
          <TeaserBackgroundImage
            imageLg={data.section1Image}
            imageMd={data.section1ImageMd}
            imageSm={data.section1ImageSm}
            imageXs={data.section1ImageXs}
            alignLg="left"
            alignMd="left"
            alignSm="left"
            alignXs="left"
          />
          <PaymentsTeaserTextBlock>
            <TeaserTitle>Multicurrency Payment Processing</TeaserTitle>
            <TeaserDesc>
              Efficiency of Clickhouse, processing more than 5 mln events per month
            </TeaserDesc>
            <TeaserReadMore>
              <Link to="/cappasity">Read More</Link>
            </TeaserReadMore>
          </PaymentsTeaserTextBlock>
        </CardContents>
      </TeaserBlock>
      <TeaserBlock>
        <CardContents>
          <TeaserBackgroundImage
            imageLg={data.section2Image}
            imageMd={data.section2Image}
            imageSm={data.section2ImageSm}
            imageXs={data.section2ImageXs}
            alignLg="left"
            alignMd="left"
            alignSm="center"
            alignXs="left"
          />
          <TeaserTextBlock>
            <TeaserTitle>High Volume Analytical System</TeaserTitle>
            <TeaserDesc>
              Efficiency of Clickhouse, processing more than 5 mln events per month
            </TeaserDesc>
          </TeaserTextBlock>
        </CardContents>
      </TeaserBlock>
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
            <SubHeader>
              Node.js
              <br />
              Microservices Toolkit
            </SubHeader>
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
            imageLg={data.section4Image}
            imageMd={data.section4ImageMd}
            alignLg="center"
            alignMd="center"
          />
          <StyledSideBlock>
            <h3>True Preferences</h3>
            <SubHeader>
              iOS & Android apps,
              <br />
              Cloud platform, design
            </SubHeader>
            <Desc>
              Lose weight for good and increase your wellbeing: Using a smartphone camera, discover
              the foods that have been holding you back.
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
  fragment teaserImage on File {
    childImageSharp {
      fixed(width: 1280, height: 700, quality: 90) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment teaserImageMd on File {
    childImageSharp {
      fixed(width: 960, height: 700, quality: 90) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment teaserImageSm on File {
    childImageSharp {
      fixed(width: 720, height: 812, quality: 90) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment teaserImageXs on File {
    childImageSharp {
      fixed(width: 414, height: 896, quality: 90) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  query IndexData {
    introImage: file(relativePath: { eq: "work_intro.jpg" }) {
      ...basicImage
    }
    introImageMd: file(relativePath: { eq: "work_intro_md.jpg" }) {
      ...basicMdNorthImage
    }

    section1Image: file(relativePath: { eq: "payment_xl.jpg" }) {
      ...teaserImage
    }
    section1ImageMd: file(relativePath: { eq: "payment_md.jpg" }) {
      ...teaserImageMd
    }
    section1ImageSm: file(relativePath: { eq: "payment_sm.jpg" }) {
      ...teaserImageSm
    }
    section1ImageXs: file(relativePath: { eq: "payment_xs.jpg" }) {
      ...teaserImageXs
    }

    section2Image: file(relativePath: { eq: "analytical_system.png" }) {
      ...teaserImage
    }
    section2ImageSm: file(relativePath: { eq: "analytical_system_sm.png" }) {
      ...teaserImageSm
    }
    section2ImageXs: file(relativePath: { eq: "analytical_system_xs.png" }) {
      ...teaserImageXs
    }

    section3Image: file(relativePath: { eq: "work_microfleet.jpg" }) {
      ...basicImage
    }
    section3ImageMd: file(relativePath: { eq: "work_microfleet_md.jpg" }) {
      ...basicMdImage
    }

    section4Image: file(relativePath: { eq: "work_truepref.jpg" }) {
      ...basicImage
    }
    section4ImageMd: file(relativePath: { eq: "work_truepref_md.jpg" }) {
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

export default IndexPage
