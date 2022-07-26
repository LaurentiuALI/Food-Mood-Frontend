import "./ContainerBox.css";

const ContainerBox = (props) => {
  return <div className="container-box">{props.children}</div>;
};

export default ContainerBox;
