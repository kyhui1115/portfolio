import Body from './Body';
import SubTitle from './SubTitle';
import Term from './Term';

interface propTypes {
  subTitle: string;
  term: string;
  body: string;
}

export default function ExperienceItem({ subTitle, term, body }: propTypes) {
  return (
    <>
      <SubTitle text={subTitle} />
      <Term term={term} />
      <Body text={body} />
    </>
  );
}
