import ExperienceItem from './ExperienceItem';

import Title from './Title';

export default function Experience() {
  return (
    <div className="absolute flex flex-col w-[60%] pl-10 h-full justify-center">
      <Title text="experience" />
      {experienceList.map((exp, i) => (
        <ExperienceItem
          key={i}
          subTitle={exp.subTitle}
          term={exp.term}
          body={exp.body}
        />
      ))}
    </div>
  );
}

const experienceList = [
  {
    subTitle: '원티드 프론트엔드 인턴십 교육',
    term: '2023. 05 ~ 2023. 06',
    body: 'React Hook 심층 활용(렌더링 최적화, 관심사 분리)\nTypescript, 쇼프트웨어 테스트(Jest, TDD) 교육',
  },
  {
    subTitle: '코드스테이츠 프론트엔드 부트캠프',
    term: '2022. 10 ~ 2023. 04',
    body: 'HTML, CSS, Javascript, React 기초 및 심화 교육\n알고리즘, 자료구조, CS 기초 및 심화 교육\n프로젝트, 페어 프로그래밍을 통한 협업 능력 습득',
  },
];
