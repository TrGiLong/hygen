import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Shell from '../components/shell'
import config from '../../site-config'
import CtaButton from '../components/cta-button'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import logo from '../assets/hygen.svg'
import { or } from 'ip';

class Index extends React.Component {
  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={logo} width="150px" />
              <h1>{config.siteTitle}</h1>
              <Subtitle>
                The scalable code generator that saves you time.
              </Subtitle>
              <Shell style={{ margin: '8rem 0 5rem 0' }} />
              <CtaButton to="quick-start">Quick Start</CtaButton>
              <Or>&mdash; or &mdash;</Or>
              <TtaLink href="https://github.com/jondot/hygen">
                Github &rarr;
              </TtaLink>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <Section>
              <Triplet>
                {config.features.map(({ image, title, content }) => (
                  <Feature>
                    <img src={require(`../assets/${image}`)} width="100px" />
                    <Subtitle>{title}</Subtitle>
                    <p>{content}</p>
                  </Feature>
                ))}
              </Triplet>
            </Section>

            <Section>
              {
                config.stories.map(({ link, tagline, avatar, title }) => (<div style={{ maxWidth: 700, textAlign: 'left', padding: '10px', margin: "4rem auto" }}>
                  <TtaLink href={link}>
                    <img src={avatar} style={{ float: 'left', borderRadius: 32, width: 64, height: 64, marginRight: 10 }} />
                    <div style={{}}>
                      {title} &rarr;
                      <ArticleTagline>{tagline}</ArticleTagline>
                    </div>
                  </TtaLink>
                                                                          </div>))
              }
            </Section>
            <Section>
              <h1>See how to use with:</h1>
              <Triplet>
                {config.usedIn.map(({ width, image, title, content, link }) => (
                  <Feature>
                    <Link to={link}>
                      <Subtitle>{title}</Subtitle>
                      <img src={require(`../assets/${image}`)} width={width} />

                    </Link>
                  </Feature>
                ))}
              </Triplet>
            </Section>
            <Footer />
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const TtaLink = styled.a`
  color: ${({ theme: { brand } }) => brand};
`
const Or = styled.div`
  margin: 0 2rem;
  color: ${({ theme: { brandSecondary } }) => brandSecondary};
  display: inline-block;
  font-family: Georgia, serif;
  font-size: 1.8em;
  font-style: italic;
`
const IndexHeadContainer = styled.div`
  background: white;
  padding: ${props => props.theme.sitePadding};
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 300;
    font-size: 3.2rem;
    color: #f722b1;
    margin: 0;
  }
`

const BodyContainer = styled.div``

const Feature = styled.div`
  flex: 0.333333;
  text-align: center;
  padding: 1rem;
`
const Triplet = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
  h2 {
  }
  @media screen and (max-width: 600px) {
    display: block;
  }
`
const Section = styled.section`
  border-bottom: 1px solid #f0f0f0;
  padding: 4rem 0;
  padding-bottom: 6rem;
  text-align: center;
`
const Subtitle = styled.h2`
  color: ${({ theme: { brandSecondary } }) => brandSecondary};
  font-weight: 300;
  margin: 2rem 0;
`
const ArticleTagline = styled.div`
  color: ${({ theme: { brandSecondary } }) => brandSecondary};
  font-weight: 300;
  font-style: italic;
`

/* eslint no-undef: "off" */
