import React from "react";
import "./FrequentQuestion.css";
import { Accordion } from "flowbite-react";

const FrequentQuestion = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-14 gap-y-10 md:gap-y-0 my-16">
      <div>
        <h2 style={{ color: "#282938" }} className="font-semibold text-3xl mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base font-normal fq1">
          Here are some of the frequent asked questions
        </p>
      </div>
      <div>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className="text-xl fq1">
              {" "}
              <span className="number font-medium text-xl pr-4 md:pr-10">01</span> How
              does it work?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg font-medium">
                Organization manager is an online charity that makes it easy for
                anyone to help students in need. Public school teachers from
                every corner of America post classroom project requests on our
                site, and you can give any amount to the project that most
                inspires you.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl fq1">
              <span className="number font-medium text-xl pr-4 md:pr-10">02</span>Is
              there a minimum donation?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can give as little as 30tk and get the same level of choice,
                transparency, and feedback that is traditionally reserved for
                someone who gives millions.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-xl fq1">
              <span className="number font-medium text-xl pr-4 md:pr-10">03</span>
              What happens if a project doesn't reach its goal?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                If a partially funded project expires, donors get their
                donations returned as account credits, which they can use to: 1.
                Choose a new project to support, 2. Have us choose a new project
                for them 3. Send the teacher they supported a Organization
                manager.org gift card.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentQuestion;
