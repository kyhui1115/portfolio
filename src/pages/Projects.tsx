import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Project, { project } from '../components/projects/Project';

import LeftArrowBtn from '../components/projects/LeftArrowBtn';
import { projects } from '../data/projects';

interface propTypes {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Projects({ setCurrentPage }: propTypes) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [projectList, setProjectList] = useState<project[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage(2);
      }
    });

    if (sectionRef.current !== null) {
      observer.observe(sectionRef.current);
    }
  }, [setCurrentPage]);

  useEffect(() => {
    const checkList = localStorage.getItem('list');
    if (checkList === null)
      localStorage.setItem('list', JSON.stringify(projects));

    const list = localStorage.getItem('list');
    if (list !== null) setProjectList(JSON.parse(list));
  }, []);

  return (
    <div className="relative flex items-center justify-center h-[95vh] bg-gray-500 shrink-0">
      <div ref={sectionRef} className="absolute top-[70%]" />
      <div className="w-[1370px] h-[600px] relative flex items-center mt-20">
        <LeftArrowBtn setProjectList={setProjectList} />
        {projectList.map((project, i) => (
          <Project
            key={project.id}
            id={project.id}
            image={project.image}
            shadow={project.shadow}
            title={project.title}
            typeAndTerm={project.typeAndTerm}
            intro={project.intro}
            skill={project.skill}
            zIndex={3 - i}
            idx={i}
            setProjectList={setProjectList}
          />
        ))}
      </div>
    </div>
  );
}
