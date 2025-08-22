import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Bar data-scrolled={isScrolled}>
      <Inner>
        <Brand href="/">
          <img src="/REstyle.svg" alt="Re:Style" />
        </Brand>

        <Nav>
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#cta" className="btn primary">Get started <FiArrowRight /></a>
        </Nav>

        <Actions>
          <a className="btn ghost" href="#demo">Book a demo</a>
          <a className="btn primary" href="#cta">Get started</a>
          <Burger aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
            <FiMenu />
          </Burger>
        </Actions>
      </Inner>

      <MobileOverlay data-open={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
        <MobileSheet onClick={(e) => e.stopPropagation()}>
          <SheetHeader>
            <Brand href="/">
              <img src="/REstyle.svg" alt="Re:Style" />
            </Brand>
            <IconBtn aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
              <FiX />
            </IconBtn>
          </SheetHeader>
          <MobileLinks>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
            <a className="btn ghost" href="#demo" onClick={() => setIsMenuOpen(false)}>Book a demo</a>
            <a className="btn primary" href="#cta" onClick={() => setIsMenuOpen(false)}>Get started</a>
          </MobileLinks>
        </MobileSheet>
      </MobileOverlay>
    </Bar>
  )
}

const Bar = styled.header`
  position: sticky; top: 0; z-index: 50;
  border-bottom: 1px solid ${({theme}) => theme.color.border};
  background: rgba(11, 15, 25, 0.6);
  backdrop-filter: saturate(180%) blur(8px);
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  &[data-scrolled='true']{
    background: rgba(11, 15, 25, 0.85);
    box-shadow: 0 4px 18px rgba(0,0,0,0.25);
  }
`

const Inner = styled.div`
  display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px;
  max-width: 1100px; margin: 0 auto; padding: 12px 16px;
`

const Brand = styled.a`
  display: inline-flex; align-items: center; gap: 8px; line-height: 0;
  img{ height: 22px; }
`

const Nav = styled.nav`
  display: flex; align-items: center; gap: 16px;
  a{ color: ${({theme}) => theme.color.subtext}; }
  .btn.primary{ color: #0b1220; }
  @media (max-width: 900px){ display: none; }
`

const Actions = styled.div`
  display: flex; align-items: center; gap: 8px;
  @media (max-width: 900px){
    .btn{ display: none; }
  }
`

const Burger = styled.button`
  display: none;
  @media (max-width: 900px){ display: inline-flex; }
  align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 8px;
  background: transparent; color: ${({theme}) => theme.color.text};
  border: 1px solid ${({theme}) => theme.color.border};
`

const MobileOverlay = styled.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.35);
  opacity: 0; pointer-events: none; transition: opacity .2s ease;
  &[data-open='true']{ opacity: 1; pointer-events: auto; }
  @media (min-width: 901px){ display: none; }
`

const MobileSheet = styled.div`
  position: absolute; left: 12px; right: 12px; top: 12px;
  background: ${({theme}) => theme.color.surface};
  border: 1px solid ${({theme}) => theme.color.border};
  border-radius: 14px; overflow: hidden;
  transform: translateY(-8px); opacity: .98; transition: transform .2s ease;
  ${MobileOverlay}[data-open='true'] &{ transform: translateY(0); }
`

const SheetHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px; border-bottom: 1px solid ${({theme}) => theme.color.border};
  ${Brand}{ img{ height: 20px; } }
`

const IconBtn = styled.button`
  width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 8px; border: 1px solid ${({theme}) => theme.color.border};
  background: transparent; color: ${({theme}) => theme.color.text};
`

const MobileLinks = styled.div`
  display: grid; gap: 8px; padding: 12px;
  a{ padding: 10px 10px; border-radius: 10px; }
`


