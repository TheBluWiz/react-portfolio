import resume from '../assets/Resume-JameyWicklund.pdf'

export default function Resume() {
  return (
    <div className='w-4/5 m-auto mt-8 max-w-lg bg-orange-100 border-2 border-neutral-400'>
        <a href={resume} download='Resume-Jamey-Wicklund'>
          <h3 className='title mt-5 ml-5 sm:ml-32'>Download Resume</h3>
        </a>
        <div className='w-11/12 m-5 sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-5'>
        <div className='my-3'>
          <h2>Front-End Proficiencies</h2>
          <ul className='list-disc list-inside'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h2>Back-End Proficiencies</h2>
          <ul className='list-disc list-inside'>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}