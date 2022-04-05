import { NextPage } from 'next'
import {
  Container,
  ImgBox,
  Javascript,
  MongoDB,
  MySQL,
  NextJS,
  ReactJS,
  Redux,
  TechnologiesImgBox,
  TechnologiesTitle,
  Typescript
} from './styles'

interface TechnologiesBoxProps {
  side: string
}

const TechnologiesBox: NextPage<TechnologiesBoxProps> = ({ side }) => {
  return (
    <Container side={side}>
      <TechnologiesTitle>Technologies</TechnologiesTitle>
      <TechnologiesImgBox position="top">
        <ImgBox>
          <div className="span-box">
            <div className="text-box">Javascript</div>
            <div className="arrow-down" />
          </div>
          <Javascript />
        </ImgBox>
        <ImgBox>
          <div className="span-box">
            <div className="text-box">Typescript</div>
            <div className="arrow-down" />
          </div>
          <Typescript />
        </ImgBox>
        <ImgBox>
          <div className="span-box">
            <div className="text-box">ReactJS</div>
            <div className="arrow-down" />
          </div>
          <ReactJS />
        </ImgBox>
        <ImgBox>
          <div className="span-box">
            <div className="text-box">NextJS</div>
            <div className="arrow-down" />
          </div>
          <NextJS />
        </ImgBox>
        <ImgBox>
          <div className="span-box">
            <div className="text-box">Redux</div>
            <div className="arrow-down" />
          </div>
          <Redux />
        </ImgBox>
      </TechnologiesImgBox>
      <TechnologiesImgBox position="bottom">
        <ImgBox>
          <div className="span-box">
            <div className="text-box">MySQL</div>
            <div className="arrow-down" />
          </div>
          <MySQL />
        </ImgBox>
        <ImgBox>
          <div className="span-box">
            <div className="text-box">MongoDB</div>
            <div className="arrow-down" />
          </div>
          <MongoDB />
        </ImgBox>
      </TechnologiesImgBox>
    </Container>
  )
}

export default TechnologiesBox
