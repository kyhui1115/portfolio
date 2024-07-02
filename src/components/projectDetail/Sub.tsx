import SubItem from './SubItem';

interface propTypes {
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
}

export default function Sub({ intro, team, skill }: propTypes) {
  const SubBodyList = [intro, team, skill];
  return (
    <div className="flex flex-col mt-8">
      {SubBodyList.map((item, idx) => (
        <SubItem key={idx} name={item.name} text={item.text} />
      ))}
    </div>
  );
}
