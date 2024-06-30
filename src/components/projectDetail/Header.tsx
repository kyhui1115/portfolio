import Links from './Links';
import { link } from './ProjectBody';
import Term from './Term';
import Title from './Title';

interface propTypes {
  title: string;
  term: string;
  links: link[];
}

export default function Header({ title, term, links }: propTypes) {
  return (
    <div className="flex">
      <Title title={title} />
      <Term term={term} />
      <Links links={links} />
    </div>
  );
}
