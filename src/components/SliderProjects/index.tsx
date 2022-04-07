import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import {
  asyncSetProjects,
  loadingPost
} from '../../redux/store/slices/projects'
import ProjectsModal from '../ProjectsModal'
import { Circle, Container, CoverIMG, SliderBox, TitleIMG } from './styles'

const SliderProjects: React.FC = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [modalInfos, setModalInfos] = useState()
  const dispatch = useAppDispatch()
  const projects = useAppSelector((state: RootState) => state.projects.data)
  const isLoading = useAppSelector(
    (state: RootState) => state.projects.isLoading
  )

  useEffect(() => {
    if (projects === undefined) {
      dispatch(loadingPost())
      dispatch(asyncSetProjects())
    }
  }, [])

  function handleOpenModal({ data }) {
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
    customPaging: i => <Circle>{i}</Circle>,
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

  if (isLoading) {
    return <div>CARREGANDO...</div>
  } else {
    return (
      <Container>
        {isModalVisible ? (
          <ProjectsModal
            OnClose={() => setIsModalVisible(false)}
            data={modalInfos}
          />
        ) : null}
        <Slider {...settings}>
          {projects &&
            projects.map(data => (
              <SliderBox key={data.key}>
                <CoverIMG
                  key={data.imgs[0]}
                  bgIMG={"url('" + data.imgs[0] + "')"}
                  onClick={() => handleOpenModal({ data })}
                />
                <TitleIMG
                  key={data.title}
                  onClick={() => handleOpenModal({ data })}
                >
                  {data.title}
                </TitleIMG>
              </SliderBox>
            ))}
        </Slider>
      </Container>
    )
  }
}

export default SliderProjects
