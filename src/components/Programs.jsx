import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from './Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead icon={<FaCrown/>} title="Programs"/>
      </div>
      <div className="programs_wrapper">
        {
          programs.map(({id, icon, title,info, path}) => {
            return (
              <Card className="programs_program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn small">Learn more<AiFillCaretRight/></Link>
              </Card>
            )
          })
        }
      </div>
    </section>
  )
}

export default Programs