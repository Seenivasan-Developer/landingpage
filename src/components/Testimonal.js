export function Testimonal({ tData }) {
  return (
    <div className="col-lg-4">
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img className="img-fluid rounded-circle mb-3" src={tData.backImage} alt="..." />
        <h5>{tData.tname}</h5>
        <p className="font-weight-light mb-0">{tData.tcontent}</p>
      </div>
    </div>

  );
}
