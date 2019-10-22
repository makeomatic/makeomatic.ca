import * as React from 'react'
import styled from '../styles/styled-components'

import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Page } from '../components/Page'
import { Divider } from '../components/Divider'
import { BackgroundImage } from '../components/BackgroundImage'
import { HeightContainer } from '../components/HeightContainer'

type CappasityPageProps = {
  data: {
    introImage: SharpFixedImage
    modelImage: SharpFixedImage
    adminImage: SharpFixedImage
    designImage: SharpFixedImage
    laptopImage: SharpFixedImage
    analyticsImage: SharpFixedImage
  }
}

const StyledPage = styled(Page)`
  background-color: ${p => p.theme.colors.white};
`
const StyledIntro = styled(HeightContainer)`
  height: 496px;
  overflow: visible;
  color: ${p => p.theme.colors.black};
  padding: 6.25rem 12.5rem 0;

  ${p => p.theme.media.lg`
    height: auto;
  `};

  ${p => p.theme.media.md`
    padding: 3rem 1rem 0;
  `};
`
const IntroContents = styled.div`
  position: relative;
  z-index: 2;
  max-width: 33.8rem;

  h2 {
    font-family: 'Nunito Sans';
    font-weight: 800;
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
  }

  p {
    font-family: Merriweather;
    font-size: 1.375rem;
  }

  ${p => p.theme.media.md`
    
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
  height: 300px;
`
const StyledAdminContainer = styled(HeightContainer)`
  height: 622px;
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
  height: 260px;
  margin-bottom: 6.25rem;

  ${p => p.theme.media.md`
    display: none;
  `};
`
const StyledLaptopContainer = styled(HeightContainer)`
  height: 533px;
`
const StyledAnalyticsContainer = styled(HeightContainer)`
  height: 848px;
`

const CappasityPage: React.FC<CappasityPageProps> = ({ data }) => (
  <Layout invert>
    <StyledPage>
      <StyledIntro>
        <IntroContents>
          <h2>
            Long-term digital
            <br />
            partners
          </h2>
          <StyledIframe
            width="368px"
            height="270px"
            style={{ border: 0 }}
            src="https://api.cappasity.com/api/player/008fe7ba-81ee-44a6-b785-946fa62c032c/embedded?autorun=1&closebutton=0&logo=0&analytics=0&autorotate=1&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=1&enableimagezoom=0&zoomquality=1&hidezoomopt=1"
          />
          <p>
            Working together for 6 years, we’ve got accepted to the top Plug and Play retail
            accelerator. We went further with Blockchain technology and released utility to the
            market. Our clients include Samsonite, Lacoste, American Greetings.
          </p>
        </IntroContents>
        <StyledBackgroundImage image={data.introImage} align="center" />
      </StyledIntro>
      <StyledDivider>
        <h2>Cappasity 3D</h2>
        <p>
          Cappasity is a cloud-based platform that helps online stores easily create and deliver 3D,
          VR and AR shopping experiences.
        </p>
      </StyledDivider>
      <StyledModelContainer>
        <StyledBackgroundImage image={data.modelImage} align="center" />
      </StyledModelContainer>
      <StyledDivider>
        <h2>Genesis of web services</h2>
        <p>
          2014 was a year when Cappasity had a strong footing in 3D imaging technology, being
          primarily used for high-quality 3D model digitizing for games. However, after several
          years in business it was clear for Cappasity that other companies in the market had
          problems scaling their services for a mass user. Then the company realized that approach
          to 3D digitizing must be drastically simplified. Cappasity had great expertise in desktop
          software development, but didn't have anyone in the team specializing in web. That's when
          Makeomatic team was introduced to Cappasity. We've ultimately decided to start with a few
          relatively small projects, which would eventually help manage new and existing users,
          collect payments and, most of all, display 3D models anywhere on the web. In that year
          we've developed first version of the API to support existing desktop software, which
          allowed it to upload 3D models for future embedding.
        </p>
      </StyledDivider>
      <StyledAdminContainer>
        <StyledBackgroundImage image={data.adminImage} align="center" />
      </StyledAdminContainer>
      <Desc>Admin Panel</Desc>
      <StyledDivider>
        <h2>Cappasity Cloud Platform</h2>
        <p>
          With the successful rollout of API for storing digitized 3D models next step was to open
          up a complete Cloud Platform so that it's easy to demonstrate & manage 3D models directly
          from the web. We've worked on improving 3D player - now supporting mesh and custom 360
          views, simplified the way models could be embedded in any 3rd party sites, integrated with
          popular social networks, so that whenever you share Cappasity 3d models rich snippets
          would appear. Everything was done to make sure that service is robust, easy to learn &
          use, scalable and appealing.
        </p>
      </StyledDivider>
      <StyledDesignContainer>
        <StyledBackgroundImage image={data.designImage} align="center" />
      </StyledDesignContainer>
      <StyledLaptopContainer>
        <StyledBackgroundImage image={data.laptopImage} align="center" />
      </StyledLaptopContainer>
      <StyledDivider>
        <h2>3D Analytical Tool</h2>
        <p>
          Cappasity has a 3D analytical tool that helps e-commerce representatives to understand
          customers, their behavior and desires.
        </p>
        <p>
          Quite often retailers try to understand why one product sells rapidly but not the other.
          Cappasity Analytical tool can generate data and engagement index to explain this paradox.
          By rotating model graphics explore what features users pay attention to. This tool helps
          to improve content visualization, for instance, choose the most wanted materials that item
          is made of and highlight the bestsellers.
        </p>
      </StyledDivider>
      <StyledAnalyticsContainer>
        <StyledBackgroundImage image={data.analyticsImage} align="center" />
      </StyledAnalyticsContainer>
    </StyledPage>
  </Layout>
)

export const query = graphql`
  query CappasityData {
    introImage: file(relativePath: { eq: "cappasity_intro.png" }) {
      childImageSharp {
        fixed(width: 1529, height: 496) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    modelImage: file(relativePath: { eq: "cappasity_model.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 320, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    adminImage: file(relativePath: { eq: "cappasity_admin.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 622, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    designImage: file(relativePath: { eq: "cappasity_design.png" }) {
      childImageSharp {
        fixed(width: 960, height: 260) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    laptopImage: file(relativePath: { eq: "cappasity_laptop.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 533, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    analyticsImage: file(relativePath: { eq: "cappasity_analytics.jpg" }) {
      childImageSharp {
        fixed(width: 960, height: 848, quality: 85) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default CappasityPage
