/* eslint-disable react/jsx-key */
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';

function About() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Khélia</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Lille, spectialized in front-end development.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className='subhead-text'>Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean faucibus diam sit amet risus vehicula congue. 
          Vivamus sit amet dui augue. Curabitur gravida turpis eget lacinia tempor. 
          Morbi ac velit quis dolor auctor ultrices quis non lacus. 
          In eu quam ac odio ultrices facilisis. Aliquam elementum eleifend malesuada. 
          Pellentesque tincidunt, dui vitae congue volutpat, dolor libero pharetra velit, 
          id gravida augue risus nec enim. In id ex feugiat, aliquam nisi non, auctor est. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          In vulputate, elit at hendrerit lacinia, lacus elit interdum est, ullamcorper bibendum sem orci quis urna. 
          Donec ac lobortis nibh. Nulla ornare est feugiat, interdum turpis molestie, lacinia felis. 
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 
                    className='text-black text-xl font-poppins font-semibold'
                    style={{margin:0}}  
                  >
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li 
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default About