import Title from './Title';

interface propTypes {
  project: {
    title: string;
    term: string;
    skill: string;
    team: string;
    links: link[];
    intro: string;
    contents: content[];
    review: string;
  };
}

export interface link {
  name: string;
  url: string;
}

export interface content {
  title: string;
  body: string;
}

export default function ProjectBody({ project }: propTypes) {
  return (
    <div className="w-[60%] bg-gray-400 rounded-xl px-6 py-6">
      <Title title={project.title} />
    </div>
  );
}
