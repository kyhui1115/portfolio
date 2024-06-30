import { ReactElement } from 'react';
import Header from './Header';
import Sub from './Sub';
import Main from './Main';

interface propTypes {
  project: {
    title: string;
    term: string;
    links: link[];
    intro: {
      name: string;
      text: string;
    };
    team: {
      name: string;
      text: string;
    };
    skill: {
      name: string;
      text: string;
    };
    devs: dev[];
  };
}

export interface link {
  icon: ReactElement;
  url: string;
}

export interface dev {
  title: string;
  body: ReactElement;
}

export default function ProjectBody({ project }: propTypes) {
  return (
    <div className="px-6 py-6 bg-gray-400 w-240 rounded-xl h-216">
      <Header title={project.title} term={project.term} links={project.links} />
      <Sub intro={project.intro} skill={project.skill} team={project.team} />
      <Main devs={project.devs} />
    </div>
  );
}
