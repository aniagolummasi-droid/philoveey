import { FiStar, FiTruck } from 'react-icons/fi'
import { TbHeartHandshake, TbShieldCheck, TbTag } from 'react-icons/tb'
import { benefits } from '../../utils/constants'

const icons = {
  heart: TbHeartHandshake,
  shield: TbShieldCheck,
  star: FiStar,
  tag: TbTag,
  truck: FiTruck,
}

function BenefitStrip() {
  return (
    <section className="benefit-strip" aria-label="Store benefits">
      {benefits.map(({ icon, title, text }) => {
        const Icon = icons[icon]

        return (
          <article className="benefit-item" key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default BenefitStrip
