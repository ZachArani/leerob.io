import Image from "next/image";
import profileImg from '../public/me_square.webp'

export default function Page() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-medium text-4xl mb-4 tracking-tighter text-center w-fit">Hi.</h1>
      <div className="relative aspect-[3/2] mb-4 lg:-w-2/4">
        <Image  
      src={profileImg} 
      alt="Hi."
      style={{
        //objectFit: 'cover', // cover, contain, none
        width: '100%',
        height: 'auto'
      }}
      priority={true}
      placeholder="blur"
      className="rounded-lg"
      ></Image>
      </div>
      <h1 className="font-medium text-3xl mb-4 tracking-tighter text-center w-fit">I'm Meir. &nbsp; Nice to meetcha.</h1>

      <p className="prose prose-2xlg">
        I'm an artist, aspiring game designer, and graduate student at Kyushu University.
        I also&nbsp;
        <a href="/games">develop games</a>,&nbsp;
        <a>shoot pictures</a>,&nbsp;
        <a>write fiction</a>, and&nbsp;
        <a>compose music</a> in my spare time. 
        I've <a>created games for companies</a> and <a href="https://youtu.be/tx22WrInPYY?t=6602">taught an AI to write a movie</a> (before it was cool)!
      </p>
      <hr className="my-4 border-neutral-50"></hr>
      <p className="prose prose-neutral">
        I'm currently researching games accessibility tech for the visually impaired&mdash;designing tools to streamline accessibility feature development. In my free time I design my own game concepts, and ocassionally find the time to develop prototypes. <a>Check out my work for more details.</a>
      </p>
      <ul className="font-sm w-full mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a 
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/mappingthestatic/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
