import { useParams } from 'react-router-dom';
import BackBtn from '../components/projectDetail/BackBtn';
import ProjectTitle from '../components/projectDetail/ProjectTitle';
import ProjectBody from '../components/projectDetail/ProjectBody';
import { projectDetails } from '../data/projectDetails';

export default function ProjectDetail() {
  const id = Number(useParams().id);
  const project = projectDetails[id];

  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-y-scroll bg-gray-500">
      <ProjectTitle title={project.title} />
      <ProjectBody project={project} />
      <BackBtn />
    </div>
  );
}
