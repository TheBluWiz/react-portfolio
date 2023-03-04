import gitHubLogo from '../assets/images/github-long-logo.png';
import linkedInLogo from '../assets/images/linkedin-logo.png';
import stackOverflowLogo from '../assets/images/stack-overflow-logo.png'

export default function Footer() {
  return (
    <div className="bg-emerald-500 fixed bottom-0 z-40 grid place-items-center max-h-12 w-screen max-w-6xl">
      <div className="grid gap-5 grid-cols-3 place-items-center mx-0 w-4/5">
        <a href="https://github.com/TheBluWiz"
          target="_blank">
          <img src={gitHubLogo} alt="GitHub" className='max-h-11' />
        </a>
        <a href='https://www.linkedin.com/in/jamey-wicklund-19673851/'
          target="_blank">
          <img src={linkedInLogo} alt="LinkedIn" className='max-h-11' />
        </a>
        <a href="https://stackoverflow.com/users/21322792/thebluwiz"
          target="_blank">
          <img src={stackOverflowLogo} alt="Stack Overflow" className='max-h-11' />
        </a>
      </div>
    </div>
  )
}