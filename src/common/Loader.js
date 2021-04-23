const Loader = () => {
  return (
    <div className="col-md-8">
      <div className="all-report-cards spinner-loading">
        <RingLoader size={150} />
      </div>
    </div>
  );
};

export default Loader;
