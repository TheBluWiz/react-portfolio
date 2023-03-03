import gitHubLogo from '../assets/images/github-logo.png';

export default function Card({cardArray}) {
  return cardArray.map((site) => {
    return (
      <div className='grid place-items-center relative'>
        <img src={site.image} alt={site.alt} className='z-20 hover:opacity-30 hover:z-0 ease-out duration-300' />
        <div className='grid gap-1 grid-cols-2 mx-0 w-3/4 place-items-center absolute z-10 hover:z-40'>
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