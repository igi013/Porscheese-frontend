const SkeletonCard = () => {
  return (
    <div className="card h-100 shadow-sm skeleton-card border-0">
      <div className="skeleton-img"></div>
      <div className="card-body">
        <div className="skeleton-line w-75 mb-2"></div>
        <div className="skeleton-line w-50 mb-3"></div>
        <div className="skeleton-line w-100 mb-2"></div>
        <div className="skeleton-line w-100"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
