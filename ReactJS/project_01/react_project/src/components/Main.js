function Main() {
  return (
    <main>
      <div className="row-1 row-cols-1 row-cols-md-1 mb-2 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-body">
              <a href="/create">
                <button type="button" className="w-50 btn btn-lg btn-primary">
                  Создать Note
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-body">
              <a href="/note">
                <button type="button" className="w-50 btn btn-lg btn-primary">
                  Просмотреть Note
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
