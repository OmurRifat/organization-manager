import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

const Team = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 text-black">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl text-green-500">
            Our team
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-400">
            Our developer team is comprised of individuals who are honest,
            hardworking, and have strong decision-making skills. They are
            passionate about their work and constantly engage in research to
            improve their skills. Our team members are also continuous learners,
            always striving to enhance their knowledge and expertise in their
            respective areas of work.
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://i.ibb.co/8Nz0323/professional-photo-dibbo-22.png"
              />
              <p className="text-xl font-semibold leading-tight">Dibbo Das</p>
              <p className="dark:text-gray-400">Full Stack Developer</p>
              <div className="flex justify-center gap-4 text-xl mt-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dibbo-das/"
                >
                  {" "}
                  <BsLinkedin />{" "}
                </a>{" "}
                <a target="_blank" href="https://github.com/WebDevDibbo">
                  <BsGithub />
                </a>{" "}
                <a target="_blank" href="https://portfolio-fd96a.web.app/">
                  <GiEarthAmerica />{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full "
                src="https://i.ibb.co/Z8WrnLz/profile-1-removebg-preview.png"
              />
              <p className="text-xl font-semibold leading-tight">
                Md Abdur Rouf Likhon
              </p>
              <p className="dark:text-gray-400">Full Stack Developer</p>
              <div className="flex justify-center gap-4 text-xl mt-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-abdur-rouf-likhon-70a562257/"
                >
                  {" "}
                  <BsLinkedin />{" "}
                </a>{" "}
                <a target="_blank" href="https://github.com/likhon29">
                  <BsGithub />
                </a>{" "}
                <a target="_blank" href="https://my-portfolio-b28f8.web.app/">
                  <GiEarthAmerica />{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://i.ibb.co/tb1t30x/portfolio-removebg-preview.png"
              />
              <p className="text-xl font-semibold leading-tight">
                MD EMON HOSSAIN
              </p>
              <p className="dark:text-gray-400">Full Stack Developer</p>
              <div className="flex justify-center gap-4 text-xl mt-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-emon343/"
                >
                  {" "}
                  <BsLinkedin />{" "}
                </a>{" "}
                <a target="_blank" href="https://github.com/emon097">
                  <BsGithub />
                </a>{" "}
                <a
                  target="_blank"
                  href="https://md-emon-hossain-portfolio.netlify.app/"
                >
                  <GiEarthAmerica />{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://i.ibb.co/x7xnh9d/346100833-1623505491446830-2180982770906955503-n-removebg-preview-1.png"
              />
              <p className="text-xl font-semibold leading-tight">
                MD Mohaiminul Islam
              </p>
              <p className="dark:text-gray-400">Full Stack Developer</p>
              <div className="flex justify-center gap-4 text-xl mt-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-mohaiminul-islam-299442131/"
                >
                  {" "}
                  <BsLinkedin />{" "}
                </a>{" "}
                <a target="_blank" href="https://github.com/JsArafath">
                  <BsGithub />
                </a>{" "}
                <a
                  target="_blank"
                  href="https://mohaiminul-islam-portfolio.netlify.app/"
                >
                  <GiEarthAmerica />{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://i.ibb.co/tJkDBHS/rsz-rifat-3-12-removebg-preview.png"
              />
              <p className="text-xl font-semibold leading-tight">
                H. M. Jabed Omur Rifat{" "}
              </p>
              <p className="dark:text-gray-400">UI UX & Team Manager</p>
              <div className="flex justify-center gap-4 text-xl mt-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/omurrifat/"
                >
                  {" "}
                  <BsLinkedin />{" "}
                </a>{" "}
                <a target="_blank" href="https://github.com/OmurRifat">
                  <BsGithub />
                </a>{" "}
                <a
                  target="_blank"
                  href="https://omur-rifat-portfolio.netlify.app/"
                >
                  <GiEarthAmerica />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
