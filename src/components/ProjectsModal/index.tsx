import type { MouseEvent } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import SiteIconSVG from '../../assets/SiteIcon.svg'

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
  OnClose?: () => void
  data: DataProps
}

export default function ProjectsModal({
  OnClose = () => {},
  data
}: ModalProps) {
  const database = data

  function handleOutsideClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).id === data.key) OnClose()
  }

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    draggable: true,
    speed: 200,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-img-indicator',
    customPaging: (i: number) => (
      <img className="slider-img h-[60px] w-[50px] rounded-[5px] object-cover" src={database.imgs[i]} alt="" />
    )
  }

  return (
    <div
      className="project-modal-overlay"
      id={data.key}
      onClick={handleOutsideClick}
    >
      <div className="project-modal" key={data.key}>
        <h2 className="project-modal-title">{data.title}</h2>

        <Slider {...settings}>
          {database.imgs.map(img => (
            <div key={img}>
              <a href={img} target="_blank" rel="noreferrer">
                <img className="project-modal-img" src={img} alt={data.title} />
              </a>
            </div>
          ))}
        </Slider>

        <div className="project-modal-desc">
          <h1>Description</h1>
          <p>{database.description}</p>

          {database.github || database.site ? (
            <div className="mt-8">
              <div className="link-box-title mb-4 flex items-center gap-2">
                <SiteIconSVG />
                <h4 className="font-ubuntu text-[1.8rem] text-primary md:text-[2.5rem]">
                  Site
                </h4>
              </div>
              {database.github && (
                <div className="link-box-links mb-2">
                  <a
                    className="ml-[33px] text-primary hover:underline"
                    href={database.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {database.github.replace('https://', '')}
                  </a>
                  <span className="ml-[3px] text-[1.4rem] brightness-[0.7]">
                    (Github directory)
                  </span>
                </div>
              )}
              {database.site && (
                <div className="link-box-links mb-2">
                  <a
                    className="ml-[33px] text-primary hover:underline"
                    href={database.site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {database.site.replace('https://', '')}
                  </a>
                  <span className="ml-[3px] text-[1.4rem] brightness-[0.7]">
                    (Website)
                  </span>
                </div>
              )}
            </div>
          ) : null}

          <h2 className="mt-8">Technologies</h2>

          {database.technologies.map(icon => (
            <div
              key={`${icon.name}-${icon.url}`}
              className="mt-4 flex items-center"
            >
              <img src={icon.url} alt={icon.alt} className="h-10 w-10" />
              <span className="project-modal-tech-name">{icon.name}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="project-modal-close"
          onClick={() => OnClose()}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}
