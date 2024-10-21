const Formation = () => {
    return (
        <>
        <div className="row mx-0 justify-content-center pt-5" id="formation">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h1 className="display-5 mb-1">FORMATIONS</h1>
                    <h4>Elle propose deux types de formations</h4>
                </div>
            </div>
        </div>
        <div className="row mx-0 justify-content-center pt-4">
            <div className="col-lg-6 mb-5">
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-outline-primary FI" style={{"width": "90%","height": "350px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 text-muted font-weight-bold">Formation Initiale (FI)</h5>
                        <h6 className="card-subtitle mb-2 text-muted font-weight-bold">Qui est une formation qui se déroule du Lundi au Vendredi</h6>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-lg-6 mb-5">
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-outline-warning FC" style={{"width": "90%","height": "350px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center" style={{"columnGap": "30px !important"}}>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 text-muted font-weight-bold">Formation Continus (FC)</h5>
                        <h6 className="card-subtitle mb-2 text-muted font-weight-bold">Qui est une formation qui auras lieu seulement tous les samedi</h6>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        </>
    )
}
export default Formation;