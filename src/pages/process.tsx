import * as React from 'react'
import styled from '../styles/styled-components'
import { Page } from '../components/Page'
import { Intro } from '../components/Intro'
import { Divider } from '../components/Divider'
import { HeightContainer } from '../components/HeightContainer'
import { CallToAction } from '../components/CallToAction'
import { CardContents } from '../components/CardContents'
import { StyledSideBlock } from '../components/SideBlock'
// import GatsbyLink from 'gatsby-link'
import { BackgroundImage } from '../components/BackgroundImage'
import { getEmSize } from '../styles/mixins'
import { ResponsiveBackgroundImage } from '../components/ResponsiveBackgroundImage'

const LeftSideBlock = styled(StyledSideBlock)`
  width: 22.5rem;

  h3 {
    margin-top: 2rem;
  }

  p {
    margin-top: 1.75rem;
    z-index: 1;
  }

  ${p => p.theme.media.lg`
    width: 27.875rem;
  `};

  ${p => p.theme.media.md`
    width: auto;
    height: auto;
    
    h3 {
      margin-top: 0;
    }
    
    p {
      font-size: 1.25rem;
      margin-top: 0.5rem;
    }
  `};
`

const RightSideBlock = styled(LeftSideBlock)`
  margin: 0 0 0 auto;

  ${p => p.theme.media.lg`
    padding-left: ${t => t.theme.dimensions.containerPadding}rem;
    padding-right: ${t => t.theme.dimensions.containerPadding * 3}rem;
  `};

  ${p => p.theme.media.md`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

const RightSideBlockGeometryContainer = styled.div`
  position: relative;
`

const RightSideBlockGeometry = styled(RightSideBlock)`
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    height: 7.5rem;
    left: 0;
    right: 0;
    background-color: #4e4e4e;

    ${p => p.theme.media.md`
      left: 80%;
    `};
  }
`

const CallToActionGeometryContainer = styled.div``

const CallToActionGeometry = styled(CallToAction)`
  position: relative;
  background-color: #202020;

  h2 {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 7.5rem;
    top: 0;
    bottom: 0;
    background-color: #4e4e4e;
    z-index: 0;

    ${p => p.theme.media.md`
      display: none;
    `};
  }
`

const StyledHeightContainer = styled(HeightContainer)`
  ${p => p.theme.media.md`
    height: auto;
  `};
`

const StyledBackgroundImage = styled(ResponsiveBackgroundImage)`
  ${p => p.theme.media.md`
    position: relative;
    height: ${getEmSize(520)}rem;
    overflow: hidden;
  `};
`

const BlockHeader = styled.div`
  ${p => p.theme.media.md`
    margin-top: 2rem;
  
    svg {
      float: left;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
    }
  `};
`

const Br = styled.span`
  display: block;

  ${p => p.theme.media.md`
    display: inline;
    
    &::after {
      content: ' ';
    }
  `};
`

interface ProcessPageProps {
  data: {
    introImage: SharpResolutionsImage
    section1Image: SharpResolutionsImage
    section1ImageMd: SharpResolutionsImage
    section2Image: SharpResolutionsImage
    section2ImageMd: SharpResolutionsImage
    section3Image: SharpResolutionsImage
    section3ImageMd: SharpResolutionsImage
    section4Image: SharpResolutionsImage
    section4ImageMd: SharpResolutionsImage
  }
}

const ProcessPage: React.SFC<ProcessPageProps> = ({ data }) => (
  <Page>
    <Intro
      header="Efficiency Build In-House"
      text="Makeomatic is your cutting-edge web development and design partner specializing in creating high-load interactive applications."
    >
      <BackgroundImage image={data.introImage} align="right" />
    </Intro>
    <Divider>
      <h2>A True Development-Led Process</h2>
      <p>
        Makeomatic boasts a cohesive in-house team of engineers, designers and project managers that
        has perfected the art of product iteration by decreasing the gap between product development
        and market validation.
      </p>
    </Divider>
    <StyledHeightContainer>
      <CardContents>
        <StyledBackgroundImage
          imageLg={data.section1Image}
          imageMd={data.section1ImageMd}
          alignLg="right"
          alignMd="right"
        />
        <LeftSideBlock>
          <BlockHeader>
            <h3>
              Shape your
              <Br />
              idea
            </h3>
          </BlockHeader>
          <p>
            With dozens of shipped products, we are able to quickly understand your problem and
            conduct necessary research, observe the current approaches out there, and define user
            needs that will inform the project’s mind map as well as help us break it down into
            specific user stories and detect weaknesses right at the beginning.
          </p>
        </LeftSideBlock>
      </CardContents>
    </StyledHeightContainer>
    <StyledHeightContainer>
      <CardContents>
        <StyledBackgroundImage
          imageLg={data.section2Image}
          imageMd={data.section2ImageMd}
          alignMd="center"
        />
        <RightSideBlock>
          <BlockHeader>
            <h3>
              Think
              <Br />
              through
              <Br />
              visualization
            </h3>
          </BlockHeader>
          <p>
            Once we have a solid hypothesis in place, we start generating ideas and pick those that
            have the highest potential for fulfilling users’ needs. Based on these ideas, we sketch
            out the entire user experience and make visual design drafts needed to create a
            prototype.
          </p>
        </RightSideBlock>
      </CardContents>
    </StyledHeightContainer>
    <StyledHeightContainer>
      <CardContents>
        <StyledBackgroundImage
          imageLg={data.section3Image}
          imageMd={data.section3ImageMd}
          alignLg="right"
          alignMd="center"
        />
        <LeftSideBlock>
          <BlockHeader>
            <h3>
              Architect
              <Br />
              your vision
            </h3>
          </BlockHeader>
          <p>
            As soon as the design feels right, we create a technical product description, which lays
            out all high-level interactions, and start building out the technical foundation to
            support your product. Based on our agile process, we get to MVP as fast as possible and
            ship new iterations every two weeks on average, adjusting our course with inputs from
            stakeholders
          </p>
        </LeftSideBlock>
      </CardContents>
    </StyledHeightContainer>
    <RightSideBlockGeometryContainer>
      <StyledHeightContainer>
        <CardContents>
          <StyledBackgroundImage
            imageLg={data.section4Image}
            imageMd={data.section4ImageMd}
            alignMd="center"
          />
          <RightSideBlockGeometry>
            <BlockHeader>
              <h3>
                Validate to
                <Br />
                keep going
              </h3>
            </BlockHeader>
            <p>
              In parallel with agile development cycles, all shipped work is beta tested in its
              intended market, guiding us to making necessary tweaks with minimum financial risks
              and time invested.
            </p>
          </RightSideBlockGeometry>
        </CardContents>
      </StyledHeightContainer>
    </RightSideBlockGeometryContainer>
    <CallToActionGeometryContainer>
      <CallToActionGeometry>
        <h2>
          Read <strong>the Cappasity</strong> project overview to see our process in action
        </h2>
      </CallToActionGeometry>
    </CallToActionGeometryContainer>
  </Page>
)

export const query = graphql`
  query ProcessData {
    introImage: imageSharp(id: { regex: "/process_intro.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section1Image: imageSharp(id: { regex: "/process_idea.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section1ImageMd: imageSharp(id: { regex: "/process_idea_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section2Image: imageSharp(id: { regex: "/process_visual.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section2ImageMd: imageSharp(id: { regex: "/process_visual.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section3Image: imageSharp(id: { regex: "/process_product.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section3ImageMd: imageSharp(id: { regex: "/process_product_md.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }

    section4Image: imageSharp(id: { regex: "/process_market.jpg/" }) {
      resolutions(width: 1280, height: 700, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
    section4ImageMd: imageSharp(id: { regex: "/process_market.jpg/" }) {
      resolutions(width: 960, height: 520, quality: 85) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`

export default ProcessPage
