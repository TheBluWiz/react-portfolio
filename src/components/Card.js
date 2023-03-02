import gitHubLogo from '../assets/images/github-logo.png';

export default function Card({cardArray}) {
  return cardArray.map((site) => {
    return (
      <div className='card '>
        <img src={site.image} alt={site.alt} className='' />
        <div className='grid gap-1 grid-cols-2 mx-0 w-3/4 '>
          <a
            href={site.deployed}
            target="_blank"
            className='w-1/2'>
            <h3
              className='text-teal-600 title'>
              {site.title}
            </h3></a>
          <a
            href={site.gitHub}
            target="_blank"
            className='w-1/2'>
            <img
              src={gitHubLogo}
              className='' /></a>
        </div>
      </div>
    )
  });
}