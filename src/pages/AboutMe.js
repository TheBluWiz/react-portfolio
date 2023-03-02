import profilePic from "../assets/images/profilePic.jpeg";

export default function AboutMe() {
  return (
    <>
      {/* <div className="grid grid-cols-2 mx-1"> */}
      <div className="float-left mr-3">
        <img src={profilePic} alt="Jamey Wicklund" className="max-h-32 rounded-full pl-6 mt-3" />
        <h2 className="text-2xl font-medium text-teal-600 pl-5">About Me</h2>
      </div>
      <div className="mt-5 mx-5">
        <p>Always curious, my time away from keyboard is spent reading science focused news articles, going on long
          walks
          with my husband and dog, or imagining what another world could be like with my DND group.<br /><br />
          I’m just starting in my web development career, but I’ve been working in tech for most of my life.
          Currently
          employed at Apple Inc. repairing relationships and devices one customer at a time. My mantra during every
          interaction
          is <span class="about-me">“What can we accomplish together today?"</span>. If you have a project you want to
          build or problem you need to solve I'd love to get involved. Community means everything. Lets connect!</p>
      </div>

      {/* </div> */}
    </>
  );
}