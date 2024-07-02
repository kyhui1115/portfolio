import IntroduceText from './IntroduceText';

export default function Introduce() {
  return (
    <div className="flex flex-col">
      {contentList.map((content, i) => (
        <IntroduceText key={i} text={content.text} />
      ))}
    </div>
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
  },
  {
    text: (
      <>
        도예가가 정성스럽게 도자기를 빚듯이
        <br />
        <span className="font-bold text-yellow-100">
          완성도 높은 제품을 구현
        </span>
        하는 것을 좋아합니다.
      </>
    ),
  },
  {
    text: (
      <>
        실무경험을 쌓기 위해&nbsp;
        <span className="font-bold text-yellow-100">
          다수의 팀 프로젝트를 진행
        </span>
        하였습니다.
        <br />
        <span className="font-bold text-yellow-100">
          프론트엔드 리더로 서비스 기획, 제작, 배포에 참여
        </span>
        하였으며
        <br />
        현재 진행 중인 앱 서비스 출시를 준비 중입니다.
      </>
    ),
  },
  {
    text: (
      <>
        새로운 것을 배우고 적용하는데 주저하지 않습니다.
        <br />이 과정에서&nbsp;
        <span className="font-bold text-yellow-100">
          문제를 해결해나가며 성장
        </span>
        한다고 믿습니다.
      </>
    ),
  },
];
