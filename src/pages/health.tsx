import * as React from 'react'
import styled from '../styles/styled-components'

import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Page } from '../components/Page'
import { Divider } from '../components/Divider'
import { BackgroundImage } from '../components/BackgroundImage'
import { HeightContainer } from '../components/HeightContainer'

type HealthPageProps = {
  data: {
    introImage: SharpFixedImage
    modelImage: SharpFixedImage
    adminImage: SharpFixedImage
    designImage: SharpFixedImage
    laptopImage: SharpFixedImage
    analyticsImage: SharpFixedImage
    crazyImage: SharpFixedImage
  }
}

const StyledPage = styled(Page)`
  background-color: ${(p) => p.theme.colors.white};
`
const StyledIntro = styled(HeightContainer)`
  height: 496px;
  overflow: visible;
  color: ${(p) => p.theme.colors.black};
  padding: 6.25rem 12.5rem 0;

  ${(p) => p.theme.media.lg`
    height: auto;
  `};

  ${(p) => p.theme.media.md`
    padding: 3rem 1rem 0;
  `};
`
const IntroContents = styled.div`
  position: relative;
  z-index: 2;
  max-width: 28rem;

  h2 {
    font-family: 'Nunito Sans';
    font-weight: 800;
    font-size: 3.3rem;
    margin-bottom: 2.5rem;
    white-space: pre;
  }

  p {
    font-family: Merriweather;
    font-size: 1.375rem;
  }

  ${(p) => p.theme.media.lg`
    h2 {
      white-space: normal;
    }

    max-width: none;
  `};
`
const StyledIframe = styled.iframe`
  position: absolute;
  bottom: 2rem;
  left: 100%;
  width: 368px;
  height: 270px;

  ${p => p.theme.media.lg`
    position: relative;
    left: 0;
  `};

  ${p => p.theme.media.sm`
    width: 288px;
    height: 211px;
  `};
`
const StyledDivider = styled(Divider)`
  && {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    padding-left: 12.5rem;
    padding-right: 12.5rem;

    ${p => p.theme.media.md`
      padding-left: 1rem;
      padding-right: 1rem;
    `}

    h2 {
      font-family: 'Nunito Sans';
      font-weight: 800;
      margin-bottom: 2rem;
      max-width: none;
    }

    p {
      font-family: Merriweather;
      max-width: none;
    }
  }
`
const StyledBackgroundImage = styled(BackgroundImage)`
  && {
    z-index: 0;
  }
`
const StyledModelContainer = styled(HeightContainer)`
  height: 559px;
  margin-bottom: 2rem;
`
const StyledAdminContainer = styled(HeightContainer)`
  height: 649px;
  margin-bottom: 2rem;
`
const Desc = styled.div`
  width: 100%;
  margin-top: 2.8125rem;
  text-align: center;
  color: ${p => p.theme.colors.gray.desc};
  font-size: 1.125rem;
  letter-spacing: 0.22px;
`
const StyledDesignContainer = styled(HeightContainer)`
  height: 659px;
  margin-bottom: 2rem;
`
const StyledLaptopContainer = styled(HeightContainer)`
  height: 533px;
`
const StyledAnalyticsContainer = styled(HeightContainer)`
  height: 581px;
`

const HealthPage: React.FC<HealthPageProps> = ({ data }) => (
  <Layout invert>
    <StyledPage>
      <StyledIntro>
        <IntroContents>
          <h2>Health app that{'\n'}never existed before</h2>
          <p>
          We were happy to work on a project that can change your habits of eat healthy
           and balanced food and tells you to stay away from undesired products your body
            doesn't want, but you have no idea about
          </p>
        </IntroContents>
        <StyledBackgroundImage image={data.introImage} align="center" />
      </StyledIntro>
      <StyledDivider>
        <StyledModelContainer>
          <StyledBackgroundImage image={data.modelImage} align="center" />
        </StyledModelContainer>
        <h2>How does it work?</h2>
        <p>
        To truly understand what a user needs to eat next he or she should be ready to test. 
        While watching randomly shown products for the next 15 seconds a program detects a face reaction
         and returns results of the most and less desired products. 
        </p>
      </StyledDivider>
      <StyledDivider>
      <StyledModelContainer>
        <StyledBackgroundImage image={data.crazyImage} align="center" />
      </StyledModelContainer>
        <h2>Fit a face mask</h2>
        <p>
        To get more accurate results it is important that an application properly scan a face micro expiration
         while watching food products. One of the important step would be framing a user’s face into a mask. 
         That’s why this mask imitates a human face with opened ears and underlined chin.
        </p>
      </StyledDivider>
      <StyledDivider>
      <StyledDesignContainer>
        <StyledBackgroundImage image={data.designImage} align="center" />
      </StyledDesignContainer>
        <h2>Results. More results</h2>
        <p>
        After taking the test users can read its results and analyse them. Every product has nutritional facts
         and "good to know" information.
        </p>
      </StyledDivider>
      <StyledDivider>
      <StyledDesignContainer>
        <StyledBackgroundImage image={data.laptopImage} align="center" />
      </StyledDesignContainer>
        <h2>Power of onboarding</h2>
        <p>
        * Step by step an app introduction that describes what would happen next
        * Every screen shows an action in different day time by reminding to test before the next food intake
        * Onboarding is also an instruction, that you can always go back to and learn
        </p>
      </StyledDivider>
      <StyledAnalyticsContainer>
        <StyledBackgroundImage image={data.analyticsImage} align="center" />
      </StyledAnalyticsContainer>
    </StyledPage>
  </Layout>
)

export const query = graphql`
  query HealthData {
    introImage: file(relativePath: { eq: "health_intro.png" }) {
      childImageSharp {
        fixed(width: 1529, height: 496) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    modelImage: file(relativePath: { eq: "health_how_works.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 559, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    crazyImage: file(relativePath: { eq: "health_face_mask.png" }) {
      childImageSharp {
        fixed(width: 960, height: 559, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    designImage: file(relativePath: { eq: "health_results.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 659, quality: 85 ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    laptopImage: file(relativePath: { eq: "health_power.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 659, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    analyticsImage: file(relativePath: { eq: "health_last.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 581, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default HealthPage
