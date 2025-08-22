import styled from 'styled-components'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import SiteHeader from './components/Header'

export default function App() {
  return (
    <Page>
      <SiteHeader />

      <Hero>
        <h1>From waste to worth.</h1>
        <p>Upcycle intelligence for circular fashion — quantify carbon, optimise processes, and tell credible stories.</p>
        <div className="cta">
          <a className="btn primary" href="#cta">Start free <FiArrowRight /></a>
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

      <CTA id="cta">
        <div>
          <h2>See Re:Stlye in action</h2>
          <p>Book a 30‑min walkthrough tailored to your workflow.</p>
        </div>
        <a className="btn primary" href="#demo">Book a demo</a>
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
  text-align: center; max-width: 900px; margin: 64px auto 40px; padding: 0 16px;
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
