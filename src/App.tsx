import styled from 'styled-components'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import SiteHeader from './components/Header'
import LogoMotion from './components/LogoMotion'

export default function App() {
  return (
    <Page>
      <SiteHeader />

      <Hero>
        <LogoMotion className="hero-logo" strokeWidth={22} endColor="#60a5fa" />
        <h1>From waste to worth.</h1>
        <p>Upcycle intelligence for circular fashion — quantify carbon, optimise processes, and tell credible stories.</p>
        <div className="cta">
          <a className="btn primary" href="http://localhost:5176/dashboard">Start free <FiArrowRight /></a>
          <a className="btn ghost" href="#features">See features</a>
        </div>
      </Hero>

      <Section id="features">
        <h2>Everything you need for climate disclosures</h2>
        <Grid>
          <Card>
            <h3>Import & transform</h3>
            <ul>
              <li><FiCheck /> Sheets/ERP 데이터 수집</li>
              <li><FiCheck /> AI 매핑/정규화</li>
              <li><FiCheck /> 데이터 갭 검출</li>
            </ul>
          </Card>
          <Card>
            <h3>Calculate with AI</h3>
            <ul>
              <li><FiCheck /> Scope 1/2/3 자동 분류</li>
              <li><FiCheck /> 최신 배출계수 매칭</li>
              <li><FiCheck /> 투명한 감사 트레일</li>
            </ul>
          </Card>
          <Card>
            <h3>Report & comply</h3>
            <ul>
              <li><FiCheck /> 이사회/감사 보고서</li>
              <li><FiCheck /> 시나리오/목표 추적</li>
              <li><FiCheck /> 엑셀 내보내기</li>
            </ul>
          </Card>
        </Grid>
      </Section>

      <Section id="solutions">
        <h2>Built for circular brands</h2>
        <p>Fashion upcyclers, recyclers, and ESG teams — start with your data, scale with our platform.</p>
      </Section>

      <Section id="resource">
        <h2>Resource hub</h2>
        <p>문서, 튜토리얼, 블로그를 통해 빠르게 시작하세요.</p>
        <Grid>
          <Card>
            <h3 id="docs">Docs</h3>
            <p>시작 가이드와 API 레퍼런스.</p>
            <a className="btn ghost" href="http://localhost:5176/dashboard">문서 보기</a>
          </Card>
          <Card>
            <h3 id="tutorials">Tutorials</h3>
            <p>핵심 워크플로 튜토리얼.</p>
            <a className="btn ghost" href="http://localhost:5176/dashboard">튜토리얼 보기</a>
          </Card>
          <Card>
            <h3 id="blog">Blog</h3>
            <p>제품 업데이트와 사례 연구.</p>
            <a className="btn ghost" href="http://localhost:5176/dashboard">블로그 보기</a>
          </Card>
        </Grid>
      </Section>

      <Section id="about">
        <h2>About us</h2>
        <p id="company">데이터로 순환 패션을 가속화합니다.</p>
        <Grid>
          <Card>
            <h3>Company</h3>
            <p>미션과 비전</p>
          </Card>
          <Card id="careers">
            <h3>Careers</h3>
            <p>함께할 동료를 찾고 있어요.</p>
            <a className="btn ghost" href="http://localhost:5176/dashboard">채용 보기</a>
          </Card>
          <Card id="contact">
            <h3>Contact</h3>
            <p>파트너십/데모 문의</p>
            <a className="btn ghost" href="http://localhost:5176/dashboard">문의하기</a>
          </Card>
        </Grid>
      </Section>

      <CTA id="cta">
        <div>
          <h2>See Re:Stlye in action</h2>
          <p>Book a 30‑min walkthrough tailored to your workflow.</p>
        </div>
        <a className="btn primary" href="http://localhost:5176/dashboard">Book a demo</a>
      </CTA>

      <Footer>
        <small>© 2025 Re:Stlye. All rights reserved.</small>
      </Footer>
    </Page>
  )
}

const Page = styled.div`
  display: grid; grid-template-rows: auto auto 1fr auto auto; min-height: 100vh;
`

// (기존 Header 관련 styled 컴포넌트 제거)

const Hero = styled.section`
  text-align: center; max-width: 1100px; margin: 64px auto 40px; padding: 0 16px;
  .hero-logo{ width: clamp(220px, 60vw, 820px); height: auto; margin: 8px auto 20px; display:block; }
  h1{ font-size: 56px; margin: 0 0 12px 0; }
  p{ color: ${({theme})=>theme.color.subtext}; margin:0 0 16px 0; }
  .cta{ display:flex; gap:12px; justify-content:center; }
`

const Section = styled.section`
  max-width: 1100px; margin: 40px auto; padding: 0 16px;
  h2{ margin: 0 0 16px 0; }
`

const Grid = styled.div`
  display:grid; grid-template-columns: repeat(3,1fr); gap: 12px;
  @media (max-width: 900px){ grid-template-columns: 1fr; }
`

const Card = styled.div`
  background: ${({theme})=>theme.color.surface}; border:1px solid ${({theme})=>theme.color.border}; border-radius: 10px; padding: 16px;
  h3{ margin:0 0 10px 0; }
  ul{ margin:0; padding-left:16px; color: ${({theme})=>theme.color.subtext}; }
`

const CTA = styled.section`
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  max-width: 1100px; margin: 40px auto; padding: 16px; border:1px solid ${({theme})=>theme.color.border}; border-radius: 12px; background: ${({theme})=>theme.color.surface};
`

const Footer = styled.footer`
  text-align:center; color: ${({theme})=>theme.color.subtext}; margin: 40px 0 24px 0;
`
