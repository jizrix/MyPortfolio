import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { GrTechnology } from 'react-icons/gr';
import { MdOutlineScience } from 'react-icons/md';
import { MdKitesurfing } from 'react-icons/md';
import { FiCamera } from 'react-icons/fi';
import { SiYoutubemusic } from 'react-icons/si';
import { MdGames } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { ImGit } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io';
import { ImHtmlFive2 } from 'react-icons/im';
import { PiBrain } from 'react-icons/pi';
import { GiCat } from 'react-icons/gi';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Introduce = () => {
  const avatarImg =
    'https://lh3.googleusercontent.com/a/ACg8ocJJW6D-NNa3Qp8nRktChevpwNXouO-n_er9jHQUiApU8pTi=s317-c-no';
  const avatarImgArmy =
    'https://cdn.discordapp.com/attachments/1131476233998307398/1159418460321878036/lego.webp?ex=6530f395&is=651e7e95&hm=34bc2abc353881e664beddce9b95a422d1d0356623dd6d6ff4164771bbdb5119&';

  return (
      <div className='flex flex-col w-full lg:flex-row mt-4'>
        <div className='flex flex-col w-[40%] justify-center h-screen bg-base-300 p-[6rem]'>
          <div className='flex flex-col justify-center'>
            <p className='text-[5rem] leading-[1] font-bold'>Hello</p>
            <p className='text-[3rem] leading-[1] tracking-wider font-bold mb-6'>i'm Weerapan.</p>

            <div className=''>
            <label className='swap swap-flip text-9xl'>
              {/* this hidden checkbox controls the state */}
              <input type='checkbox' />

              <div className='swap-on flex justify-center items-center'>
                <img
                  className='w-[500px]'
                  src={`${avatarImgArmy}`}
                  alt='ArmyAvatar'
                />
              </div>
              <div className='swap-off flex justify-center items-center'>
                <img className='w-[500px]' src={`${avatarImg}`} alt='MyAvatar' />
              </div>
            </label>
            </div>


            <div className='text-[1rem] text-right'>
              Photo: Weerapan.
            </div>
            <div className=''>
              <h4 className='text-[1.5rem] font-bold py-3'>
                here's how i came here...
              </h4>
              <p className='text-[1.25rem]'>
              I loved creating with LEGO bricks as a kid. Discovering LEGO Mindstorms, which let me build and program robots, ignited my passion for coding. I joined WRO and earned 6th place in the South East Asia.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='divider lg:divider-horizontal'>OR</div> */}
        <div className='flex flex-col w-[60%] h-screen bg-base-200 p-[7rem]'>
          <section
            id='interests'
            className='h-1/3 flex flex-col justify-center'
          >
            <h5 className='text-2xl font-bold'>Interest</h5>

            <div className='flex flex-col mt-3'>
              <div className='flex flex-row'>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <GrTechnology size={25} className='mr-2' />
                  <p>Technology Idea</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <MdOutlineScience size={25} className='mr-2' />
                  <p>Science</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <MdKitesurfing size={25} className='mr-2' />
                  <p>Extreme Sports</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <FiCamera size={25} className='mr-2' />
                  <p>Photograph</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <SiYoutubemusic size={25} className='mr-2' />
                  <p>Music</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <MdGames size={25} className='mr-2' />
                  <p>Gaming</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <GiCat size={25} className='mr-2' />
                  <p>Pet</p>
                </div>
              </div>
            </div>
          </section>
          <section
            id='interests'
            className='h-1/3 flex flex-col justify-center'
          >
            <h5 className='text-2xl font-bold'>Skills</h5>

            <div className='flex flex-col mt-3'>
              <div className='flex flex-row'>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <FaReact size={25} className='mr-2' />
                  <p>React</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <FaNodeJs size={25} className='mr-2' />
                  <p>Node.Js</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <SiExpress size={25} className='mr-2' />
                  <p>Express.Js</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <BiLogoMongodb size={25} className='mr-2' />
                  <p>MongoDB</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <ImGit size={25} className='mr-2' />
                  <p>Git</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <IoLogoJavascript size={25} className='mr-2' />
                  <p>JS</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <FiCamera size={25} className='mr-2' />
                  <p>CSS-Framework</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <ImHtmlFive2 size={25} className='mr-2' />
                  <p>HTML</p>
                </div>
                <div className='py-2 flex flex-row justify-start items-center w-1/3'>
                  <PiBrain size={25} className='mr-2' />
                  <p>BSM</p>
                </div>
              </div>
            </div>
          </section>
          <section id='contacts' className='h-1/3 flex flex-col justify-center'>
            <h5 className='text-2xl font-bold'>Contacts</h5>
            <div className='flex flex-row'>
              <div className='flex flex-col w-1/2 items-start'>
                <div className='flex flex-col justify-center'>
                  <p>Mr.Weerapan Thairak</p>
                  <p>Weerapan.Thairak@gmail.com</p>
                  <p>Nakhonratchasima / Thailand</p>
                </div>
              </div>
              <div className='flex flex-col w-1/2 items-start'>
                <div className='flex flex-col justify-center items-start'>
                  <Link to={'https://www.linkedin.com/in/weerapan-th/'}>
                    <div className='flex flex-row justify-center py-2'>
                      <AiFillLinkedin size={25} className='mr-2' />
                      <p className='underline'>LinkedIn</p>
                    </div>
                  </Link>

                  <Link to={'https://github.com/jizrix'}>
                    <div className='flex flex-row justify-center py-2'>
                      <BsGithub size={25} className='mr-2' />
                      <p className='underline'>Github</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Introduce;
