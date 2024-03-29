import "./listcategory.css";

function Category(props) {
  return (
    <div onClick={props.onClick} style={{ textAlign: "center!important" }}>
      <div className="rounded-circle d-flex justify-content-center align-items-center mx-4 category-list">
        <img src={props.image} alt="category" className="category-img" />
      </div>
      <div className="my-2" style={{ textAlign: "center" }}>
        <p>{props.keterangan}</p>
      </div>
    </div>
  );
}

export default Category;
