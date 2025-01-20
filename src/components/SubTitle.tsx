interface Props {
  name: string;
}
const SubTitle = ({ name }: Props) => {
  return <div className="subtitle">{name}</div>;
};

export default SubTitle;
