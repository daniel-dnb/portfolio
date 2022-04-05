import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import {
  Container,
  DescriptionBox,
  LinkBox,
  ModalBox,
  SiteIcon,
  SliderBox,
  SliderImage,
  SliderNavigatorImg,
  TechnologieBox,
  TechnologieImg,
  TechnologieName,
  Title
} from './styles'

const crypto = require('crypto')

interface TechnologiesProps {
  name: string
  url: string
  alt: string
}

interface DataProps {
  key: string
  title: string
  description: string
  imgs: string[]
  github?: string
  site?: string
  technologies: TechnologiesProps[]
}

interface ModalProps {
  OnClose?: Function
  data: DataProps
}

export default function Modal({ OnClose = () => {}, data }: ModalProps) {
  const database = data

  function handleOutsideClick(e) {
    if (e.target.id === data.key) OnClose()
  }

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 200,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-img-indicator',
    customPaging: i => (
      <SliderNavigatorImg className="slider-img" src={database.imgs[i]} />
    )
  }

  return (
    <Container id={data.key} onClick={handleOutsideClick}>
      <ModalBox key={crypto.randomBytes(20).toString('hex')}>
        <Title key={data.title}>{data.title}</Title>

        <Slider {...settings}>
          {database.imgs.map(img => (
            <SliderBox key={img}>
              <SliderImage
                key={crypto.randomBytes(20).toString('hex')}
                src={img}
              />
            </SliderBox>
          ))}
        </Slider>

        <DescriptionBox>
          <h1>Description</h1>
          <p>{database.description}</p>

          {database.github || database.site ? (
            <LinkBox>
              <div className="link-box-title">
                <SiteIcon />
                <h4>Site</h4>
              </div>
              {database.github && (
                <div className="link-box-links">
                  <a href={database?.github} target="_blank">
                    {database?.github.replace('https://', '')}
                  </a>
                  <span>(Github directory)</span>
                </div>
              )}
              {database.site && (
                <div className="link-box-links">
                  <a href={database?.site} target="_blank">
                    {database?.site.replace('https://', '')}
                  </a>
                  <span>(Website)</span>
                </div>
              )}
            </LinkBox>
          ) : null}

          <h2>Technologies</h2>

          {database.technologies.map(icon => (
            <TechnologieBox key={crypto.randomBytes(20).toString('hex')}>
              <TechnologieImg>
                <img
                  key={crypto.randomBytes(20).toString('hex')}
                  src={icon.url}
                  alt={icon.alt}
                />
              </TechnologieImg>
              <TechnologieName key={crypto.randomBytes(20).toString('hex')}>
                {icon.name}
              </TechnologieName>
            </TechnologieBox>
          ))}
        </DescriptionBox>
      </ModalBox>
    </Container>
  )
}
