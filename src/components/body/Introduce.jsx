import { Link } from 'react-router-dom';
//icons
import { GrTechnology, GrLocation } from 'react-icons/gr';
import {
  MdDriveFileRenameOutline,
  MdOutlineScience,
  MdKitesurfing,
  MdGames,
} from 'react-icons/md';
import { SiYoutubemusic, SiCss3, SiExpress } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { ImGit, ImHtmlFive2 } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io';
import { GiCat } from 'react-icons/gi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Introduce = () => {
  const avatarImg =
    'https://lh3.googleusercontent.com/a/ACg8ocJJW6D-NNa3Qp8nRktChevpwNXouO-n_er9jHQUiApU8pTi=s317-c-no';

  return (
    <div className='flex flex-col w-full lg:flex-row mt-4'>
      <div
        className='
      flex flex-col justify-center bg-base-300
      p-[3rem] 
      sm:min-h-screen sm:w-full sm:p-[6rem]
      lg:w-[40%] lg:p-[3rem] 
      xl:px-[6rem] xl:py-[0] xl:h-auto
      '
      >
        <div className='flex flex-col justify-center gap-5 lg:gap-0 sm:items-center lg:items-start lg:px-[0] sm:px-[4rem]'>
          <p className='text-[3rem] sm:text-[5rem] leading-[1] font-bold lg:text-[2.5rem] lg:my-0
          xl:text-[3rem]'>
            Hello World!
          </p>
          <p className='mt-2 text-[1.45rem] sm:text-[3rem] leading-[1] tracking-wider font-bold mb-6 lg:text-[1.25rem] lg:mt-2 lg:mb-3 xl:text-[1.75rem]'>
            WEERAPAN Is Here.
          </p>

          <div className=''>
            <div className='flex justify-center items-center'>
              <img className='w-[30rem] sm:w-[20rem] lg:w-[12rem] xl:w-[17rem]' src={`${avatarImg}`} alt='MyAvatar' />
            </div>
          </div>

          <div className=''>
            <h4 className='text-[1.25rem] sm:text-[2.5rem] font-bold py-3 lg:text-[1.25rem] lg:py-2
            xl:text-[1.75rem]'>My Journey</h4>
            <p className='text-[1.25rem] sm:text-[2rem] lg:text-[1.125rem] lg:my-0 xl:text-[1.25rem]'>
              As a child, I loved turning toys into treasures and school
              assignments into creative adventures. Then I discovered the
              enchanting world of computers, kindling a lifelong passion for
              programming.
            </p>
          </div>
        </div>
      </div>

      <div
        className='flex flex-col sm:mt-4 h-auto  
        bg-base-200 p-[3rem] justify-center gap-5 
        sm:h-screen sm:px-[6rem]
        lg:w-[60%] lg:px-[3rem] lg:mt-0
        xl:p-[3.5rem]
        '
      >
        <section id='interests' className='mb-10 lg:mb-2'>
          <div className='flex flex-col'>
            <div>
              <div className='text-[1.45rem] font-bold sm:text-[2rem] lg:text-[1.5rem] xl:text-[2.25rem]'>Interests</div>
            </div>
            <div className='sm:flex flex-row flex-wrap'>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'>
                <GrTechnology size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]  '>Tech Idea</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'>
                <MdOutlineScience size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem] '>Science</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'>
                <MdKitesurfing size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem] '>Extreme Sports</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'>
                <SiYoutubemusic size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem] '>Music</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'>
                <MdGames size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem] '>Gaming</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'>
                <GiCat size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem] '>Pet</p>
              </div>
            </div>
          </div>
        </section>

        <section id='skills' className='mb-10 lg:mb-2'>
          <div className='flex flex-col'>
            <div>
              <div className='text-[1.45rem] font-bold sm:text-[2rem] lg:text-[1.5rem] xl:text-[2.25rem]'>Skills</div>
            </div>
            <div className='sm:flex flex-row flex-wrap'>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <FaReact size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>React</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <FaNodeJs size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>Node.Js</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <SiExpress size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>Express.Js</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <BiLogoMongodb size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>MongoDB</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <ImGit size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>Git</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <IoLogoJavascript size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>JS</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <SiCss3 size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>CSS</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <ImHtmlFive2 size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>HTML</p>
              </div>
            </div>
          </div>
        </section>

        <section id='contacts' className='sm:mb-10 lg:mb-2'>
          <div className='flex flex-col'>
            <div>
              <div className='text-[1.45rem] font-bold sm:text-[2rem] lg:text-[1.5rem] xl:text-[2.25rem]'>Contacts</div>
            </div>
            <div className='sm:flex flex-row flex-wrap'>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 xl:w-2/3'>
                <MdDriveFileRenameOutline size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>Weerapan Thairak</p>
              </div>
              <div className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 '>
                <GrLocation size={25} className='mr-3' />
                <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>Thailand</p>
              </div>

              <Link className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3 xl:w-2/3'
                to={'https://www.linkedin.com/in/weerapan-th/'}
                target='_blank'
              >
                  <BsLinkedin size={25} className='mr-3' />
                  <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>LinkedIn</p>
              </Link>

              <Link className='flex flex-row items-center py-2 ml-5 sm:ml-0 sm:w-[50%] lg:w-1/3'
              to={'https://github.com/jizrix'} target='_blank'>   
                  <BsGithub size={25} className='mr-3' />
                  <p className='text-[1.25rem] sm:text-[1.75rem] lg:text-[1rem] xl:text-[1.5rem]'>Github</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduce;
