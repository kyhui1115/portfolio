import IntroduceBodyContent from './IntroduceBodyContent';

export default function IntroduceBodyContents() {
  return (
    <>
      {contentList.map((content, i) => (
        <IntroduceBodyContent key={i} text={content.text} line={content.line} />
      ))}
      <div className="w-full h-1 border-t border-gray-400" />
    </>
  );
}

const contentList = [
  {
    text: (
      <>
        직접 제품(서비스)을 만드는 개발자에
        <br />
        매력을 느껴 공부를 시작했습니다.
      </>
    ),
    line: 'w-0 ml-16',
  },
  {
    text: (
      <>
        도예가가 정성스럽게 도자기를 빚듯이
        <br />
        <span className="font-bold"> 완성도 높은 제품을 구현</span>
        하는 것을 좋아합니다.
      </>
    ),
    line: 'w-24 ml-8',
  },
  {
    text: (
      <>
        실무경험을 쌓기 위해&nbsp;
        <span className="font-bold">다수의 팀 프로젝트를 진행</span>하였습니다.
        <br />
        <span className="font-bold">
          프론트엔드 리더로 서비스 기획, 제작, 배포에 참여
        </span>
        하였으며
        <br />
        현재 진행 중인 앱 서비스 출시를 준비 중입니다.
      </>
    ),
    line: 'w-24 ml-24',
  },
  {
    text: (
      <>
        새로운 것을 배우고 적용하는데 주저하지 않습니다.
        <br />이 과정에서&nbsp;
        <span className="font-bold">문제를 해결해나가며 성장</span>한다고
        믿습니다.
      </>
    ),
    line: 'w-24 ml-40',
  },
  { text: <></>, line: 'w-24 ml-56' },
];
