import Card from '../components/Card'
import devQuizPic from '../assets/images/dev-quiz.png';
import giphtionaryPic from '../assets/images/giphtionary.png';
import mailMeSeedsPic from '../assets/images/mail-me-seeds.png';
import noteTaker from '../assets/images/note-taker.png';
import teamProfileGenerator from '../assets/images/team-profile-generator.png';
import techSpotBlot from '../assets/images/tech-spot-blot.png';




export default function Contact() {
  const cardArray = [

    {
      title: "Giphtionary",
      image: giphtionaryPic,
      alt: 'Where words meet giphs',
      gitHub: 'https://github.com/TheBluWiz/Giphtionary',
      deployed: 'https://thebluwiz.github.io/Giphtionary/'
    },
    {
      title: "Note Taker",
      image: noteTaker,
      alt: 'Take Notes with Express',
      gitHub: 'https://github.com/TheBluWiz/note-taker',
      deployed: 'https://note-taker-service.herokuapp.com/'
    },
    {
      title: "Mail-Me-Seeds!",
      image: mailMeSeedsPic,
      alt: 'Welcome to Mail Me Seeds!',
      gitHub: 'https://github.com/TheBluWiz/mail-me-seeds',
      deployed: 'https://mail-me-seeds.herokuapp.com/'
    },
    {
      title: "Tech Spot Blots",
      image: techSpotBlot,
      alt: 'Tech Spot Blots - A Blogging Site',
      gitHub: 'https://github.com/TheBluWiz/tech-spot-blot',
      deployed: 'https://tech-spot-blot.herokuapp.com'
    },
    {
      title: "Coding Quiz",
      image: devQuizPic,
      alt: 'Coding Quiz Challenge',
      gitHub: 'https://github.com/TheBluWiz/devQuiz1',
      deployed: 'https://thebluwiz.github.io/devQuiz1/'
    },
    {
      title: "Team Profile Generator",
      image: teamProfileGenerator,
      alt: 'A grid of employee information',
      gitHub: 'https://github.com/TheBluWiz/team-profile-generator',
      deployed: '/'
    },

  ]

  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
      <Card cardArray={cardArray} />
    </div>
  )

}