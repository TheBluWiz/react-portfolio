import profilePic from "../assets/images/profilePic.jpeg";

export default function AboutMe() {
  return (
    <div className="max-w-3xl">
      <div className="float-left mr-3 mt-5 bg-slate-200 rounded-b-3xl border-2 border-r-neutral-400 border-b-neutral-400 ml-5">
        <img src={profilePic} alt="Jamey Wicklund" className="max-h-32 rounded-full pl-6 mt-3 mr-3" />
        <h2 className="text-2xl font-medium text-teal-600 pl-5 mx-3">About Me</h2>
      </div>
      <div className="mt-5 mx-7 mb-5 h-full bg-orange-100 border-2 border-neutral-400">
        <p className="p-5">Always curious, my time away from keyboard is spent reading science focused news articles, going on long
          walks
          with my husband and dog, or imagining what another world could be like with my DND group.<br /><br />
          I’m just starting in my web development career, but I’ve been working in tech for most of my life.
          Currently
          employed at Apple Inc. repairing relationships and devices one customer at a time. My mantra during every
          interaction
          is <span class="about-me">“What can we accomplish together today?"</span>. If you have a project you want to
          build or problem you need to solve I'd love to get involved. Community means everything. Lets connect!</p>
      </div>
      </div>
  );
}