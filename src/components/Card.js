import gitHubLogo from '../assets/images/github-logo.png';

export default function Card({ cardArray }) {
  let index = 0
  const counter = () => {
    index++
    return index
  }
  return cardArray.map((site) => {
    return (
      <div className='grid place-items-center relative' key={counter()}>
        <div className='cardCode grid gap-x-5'>
          <a
            href={site.deployed}
            target="_blank"
            className='w-1/2'>
            <h3
              className='title'>
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
        <img src={site.image} alt={site.alt} className='cardImage' />
      </div>
    )
  });
}