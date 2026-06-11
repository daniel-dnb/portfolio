import { useEffect, useState } from 'react'
import type { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import {
  asyncSetProjects,
  DataProps,
  ProjectProps
} from '../../redux/slices/projects'
import ProjectsModal from '../ProjectsModal'

const SliderProjects: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [modalInfos, setModalInfos] = useState<ProjectProps | null>(null)
  const dispatch = useAppDispatch()
  const projects: DataProps = useAppSelector(
    (state: RootState) => state.projects
  )

  useEffect(() => {
    if (projects.data === undefined) {
      dispatch(asyncSetProjects())
    }
  }, [])

  function handleOpenModal({ data }: { data: ProjectProps }) {
    setIsModalVisible(true)
    setModalInfos(data)
  }

  useEffect(() => {
    if (isModalVisible === true) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = ''
  }, [isModalVisible])

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    draggable: false,
    speed: 200,
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-indicator',
    customPaging: (i: number) => <span className="slider-dot">{i}</span>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2
        }
      }
    ]
  }

  if (projects.isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <div className="slider-loading" />
        <p className="font-ubuntu text-[2rem] text-text">
          Loading<span className="console-typewriter console-anim-1">...</span>
        </p>
      </div>
    )
  }

  if (projects.error === true) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <img src="/PageNotFound.png" alt="Page not found" />
        <p className="slider-error-text">
          The page you’re looking for is currently under maintenance and will be
          back soon.
        </p>
      </div>
    )
  }

  return (
    <div className="slider-projects">
      {isModalVisible && modalInfos ? (
        <ProjectsModal
          OnClose={() => setIsModalVisible(false)}
          data={modalInfos}
        />
      ) : null}
      <Slider {...settings}>
        {projects.data &&
          projects.data.map(data => (
            <div key={data.key}>
              <span onClick={() => handleOpenModal({ data })}>
                <div
                  className="slider-cover"
                  style={{ backgroundImage: `url('${data.imgs[0]}')` }}
                />
                <div className="slider-title">{data.title}</div>
              </span>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default SliderProjects
