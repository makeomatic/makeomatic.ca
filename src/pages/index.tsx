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
import { ResponsiveBackgroundImage } from '../components/ResponsiveBackgroundImage'
import { getEmSize } from '../styles/mixins'
import { TeaserBackgroundImage } from '../components/TeaserBackgroundImage'
import K8sVideo from '../assets/video/k8s.mp4'

interface IndexPageProps {
  data: {
    introImage: SharpFixedImage
    introImageMd: SharpFixedImage
    communicationsImage: SharpFixedImage
    communicationsImageMd: SharpFixedImage
    communicationsImageSm: SharpFixedImage
    communicationsImageXs: SharpFixedImage
    k8sImage: SharpFixedImage
    k8sImageMd: SharpFixedImage
    k8sImageXs: SharpFixedImage
    section1Image: SharpFixedImage
    section1ImageMd: SharpFixedImage
    section1ImageSm: SharpFixedImage
    section1ImageXs: SharpFixedImage
    section2Image: SharpFixedImage
    section2ImageSm: SharpFixedImage
    section2ImageXs: SharpFixedImage
  }
}

/*
  new teaser blocks
 */

const TeaserBlock = styled(HeightContainer)`
  height: ${getEmSize(700)}em;
  z-index: 1;

  ${(p) => p.theme.media.sm`
    height: ${getEmSize(812)}em;
  `};
  ${(p) => p.theme.media.xs`
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
  font-family: 'Nunito Sans', sans-serif;

  ${(p) => p.theme.media.sm`
    width: 290px;
    justify-content: flex-start;
    margin-left: 16px;
    margin-top: 118px;
  `};
`
const TeaserTitle = styled.div`
  color: ${(p) => p.theme.colors.white};
  font-size: 56px;
  font-weight: 800;
  line-height: 61px;
  z-index: 1;

  ${(p) => p.theme.media.sm`
    font-size: 34px;
    line-height: 45px;
  `};
`
const TeaserDesc = styled.div`
  font-size: 28px;
  line-height: 36px;
  font-weight: normal;
  margin-top: 40px;
  z-index: 1;

  ${(p) => p.theme.media.sm`
    margin-top: 20px;
    font-size: 22px;
    line-height: 28px;
  `};
`

// specific classes

const PaymentsTeaserTextBlock = styled(TeaserTextBlock)`
  padding-top: 70px;

  ${(p) => p.theme.media.sm`
    padding-top: 0;
  `};
`

const K8sTeaserTextBlock = styled(TeaserTextBlock)`
  ${(p) => p.theme.media.sm`
    width: auto;
    margin-top: 70px;
    margin-right: 16px;
  `};

  & > ${TeaserTitle} {
    width: 260px;
  }
`

const K8sVideoBlock = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  z-index: 0;

  ${(p) => p.theme.media.md`
    right: -230px;
  `};

  ${(p) => p.theme.media.sm`
    top: 203px;
    right: auto;
    left: calc(50vw - 923px/2);
  `};

  ${(p) => p.theme.media.xs`
    top: auto;
    bottom: 70px;
    left: calc(50vw - 727px/2);
  `};

  & > video {
    object-fit: contain;
    width: 932px;
    height: 700px;

    ${(p) => p.theme.media.md`
      width: 923px;
      height: 693px;
    `};

    ${(p) => p.theme.media.xs`
      width: 727px;
      height: 546px;
    `};
  }
`

// end teaser blocks

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <Page>
      <Intro
        header={
          <span>
            High Load Services
          </span>
        }
        text="Makeomatic is your long-term 
        web development and design partner 
        specializing in creating high-load interactive applications"
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
          way through validating your market fit, designing an optimal solution and
          developing a prototype to be tested and iterated based on the feedback from the
          users until it becomes a sustainable product
        </p>
      </Divider>
      <TeaserBlock>
        <CardContents>
          <TeaserBackgroundImage
            imageLg={data.communicationsImage}
            imageMd={data.communicationsImageMd}
            imageSm={data.communicationsImageSm}
            imageXs={data.communicationsImageXs}
            alignLg="center"
            alignMd="center"
            alignSm="center"
            alignXs="center"
          />
          <TeaserTextBlock>
            <TeaserTitle>Efficient Communication Between Internal Services</TeaserTitle>
            <TeaserDesc>
              Leveraging power of messaging broker on massive scale
            </TeaserDesc>
          </TeaserTextBlock>
        </CardContents>
      </TeaserBlock>
      <TeaserBlock>
        <CardContents>
          <TeaserBackgroundImage
            imageLg={data.k8sImage}
            imageMd={data.k8sImageMd}
            imageSm={data.k8sImageMd}
            imageXs={data.k8sImageXs}
            alignLg="center"
            alignMd="center"
            alignSm="center"
            alignXs="center"
          />
          <K8sTeaserTextBlock>
            <TeaserTitle>Kubernetes Orchestration System</TeaserTitle>
            <TeaserDesc>Automated deployment and scaling</TeaserDesc>
          </K8sTeaserTextBlock>
          <K8sVideoBlock>
            <video autoPlay playsInline muted loop>
              <source src={K8sVideo} type="video/mp4"></source>
            </video>
          </K8sVideoBlock>
        </CardContents>
      </TeaserBlock>
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
            <TeaserTitle>Node.JS Performance Benchmarking and Analysis</TeaserTitle>
            <TeaserDesc>
              Solving performance problems with great efficiency
            </TeaserDesc>
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
              Process more than 100.000 data points per second and run analytical queries in near real time
            </TeaserDesc>
          </TeaserTextBlock>
        </CardContents>
      </TeaserBlock>
      <CallToAction>
        <h2>
          Ask us about <Link to="/process">your project</Link>
        </h2>
      </CallToAction>
    </Page>
  </Layout>
)

export const query = graphql`
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
    introImage: file(relativePath: { eq: "makeomatic_main.png" }) {
      ...basicImage
    }
    introImageMd: file(relativePath: { eq: "makeomatic_main_md.jpg" }) {
      ...basicMdIntroImage
    }

    communicationsImage: file(relativePath: { eq: "communications/xl.jpg" }) {
      ...teaserImage
    }
    communicationsImageMd: file(relativePath: { eq: "communications/md.jpg" }) {
      ...teaserImageMd
    }
    communicationsImageSm: file(relativePath: { eq: "communications/sm.jpg" }) {
      ...teaserImageSm
    }
    communicationsImageXs: file(relativePath: { eq: "communications/xs.jpg" }) {
      ...teaserImageXs
    }

    k8sImage: file(relativePath: { eq: "k8s/md.jpg" }) {
      ...teaserImage
    }
    k8sImageMd: file(relativePath: { eq: "k8s/md.jpg" }) {
      ...teaserImageMd
    }
    k8sImageXs: file(relativePath: { eq: "k8s/xs.jpg" }) {
      ...teaserImageXs
    }

    section1Image: file(relativePath: { eq: "payment/xl.jpg" }) {
      ...teaserImage
    }
    section1ImageMd: file(relativePath: { eq: "payment/md.jpg" }) {
      ...teaserImageMd
    }
    section1ImageSm: file(relativePath: { eq: "payment/sm.jpg" }) {
      ...teaserImageSm
    }
    section1ImageXs: file(relativePath: { eq: "payment/xs.jpg" }) {
      ...teaserImageXs
    }

    section2Image: file(relativePath: { eq: "analytical/xl.png" }) {
      ...teaserImage
    }
    section2ImageSm: file(relativePath: { eq: "analytical/sm.png" }) {
      ...teaserImageSm
    }
    section2ImageXs: file(relativePath: { eq: "analytical/xs.png" }) {
      ...teaserImageXs
    }
  }
`

export default IndexPage
