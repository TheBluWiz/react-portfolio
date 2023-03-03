import resume from '../assets/Resume-JameyWicklund.pdf'

export default function Resume() {
  return (
    <div className='w-4/5 m-auto mt-8 bg-orange-100 border-2 border-neutral-400'>
      <div className='w-11/12 m-auto'>
        <a src={resume} download='Resume-Jamey-Wicklund'>
          Download Resume
        </a>
        <div>
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