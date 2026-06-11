import type { ComponentType, FC, SVGProps } from 'react'
import JavascriptSVG from '../../assets/Javascript.svg'
import MongoDBSVG from '../../assets/MongoDB.svg'
import MySQLSVG from '../../assets/MySQL.svg'
import NextJSSVG from '../../assets/NextJS.svg'
import ReactJSSVG from '../../assets/ReactJS.svg'
import ReduxSVG from '../../assets/Redux.svg'
import TypescriptSVG from '../../assets/Typescript.svg'
import { cn } from '../../lib/cn'

const Javascript = JavascriptSVG as unknown as ComponentType<
  SVGProps<SVGSVGElement>
>
const Typescript = TypescriptSVG as unknown as ComponentType<
  SVGProps<SVGSVGElement>
>
const ReactJS = ReactJSSVG as unknown as ComponentType<SVGProps<SVGSVGElement>>
const NextJS = NextJSSVG as unknown as ComponentType<SVGProps<SVGSVGElement>>
const Redux = ReduxSVG as unknown as ComponentType<SVGProps<SVGSVGElement>>
const MySQL = MySQLSVG as unknown as ComponentType<SVGProps<SVGSVGElement>>
const MongoDB = MongoDBSVG as unknown as ComponentType<SVGProps<SVGSVGElement>>

interface TechnologiesBoxProps {
  side: string
}

function TechIcon({
  label,
  Icon,
  next,
  reactIcon
}: {
  label: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  next?: boolean
  reactIcon?: boolean
}) {
  return (
    <div className="tech-icon-box">
      <div className="span-box">
        <div className="text-box">{label}</div>
        <div className="arrow-down" />
      </div>
      <Icon
        className={cn(
          'tech-svg',
          next && 'tech-svg--next',
          reactIcon && 'tech-svg--react'
        )}
      />
    </div>
  )
}

const TechnologiesBox: FC<TechnologiesBoxProps> = ({ side }) => {
  return (
    <div
      className={cn(
        'tech-box',
        side === 'right' && 'tech-box--right',
        side === 'left' && 'tech-box--left'
      )}
    >
      <div className="tech-title">Technologies</div>
      <div className="tech-row">
        <TechIcon label="Javascript" Icon={Javascript} />
        <TechIcon label="Typescript" Icon={Typescript} />
        <TechIcon label="ReactJS" Icon={ReactJS} reactIcon />
        <TechIcon label="NextJS" Icon={NextJS} next />
        <TechIcon label="Redux" Icon={Redux} />
      </div>
      <div className="tech-row tech-row--bottom">
        <TechIcon label="MySQL" Icon={MySQL} />
        <TechIcon label="MongoDB" Icon={MongoDB} />
      </div>
    </div>
  )
}

export default TechnologiesBox
