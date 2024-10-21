const Diplome = () => {
    return (
        <>
            <div className="row mx-0 justify-content-center pt-5" id="diplome">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h1 className="display-5 mb-1">DIPLÔME DELIVRE</h1>
                    <h4>Notre Institut délivre les diplômes ci-dessous</h4>
                </div>
            </div>
        </div>
        <div className="row mx-0 justify-content-center pt-4">
            <div className="col-lg-6 mb-5">
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-info text-white licence" style={{"width": "90%","height": "350px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center gap-3" style={{"columnGap": "30px !important"}}>
                      <i className="fas fa-graduation-cap" style={{"fontSize": "80px"}}></i>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 font-weight-bold text-white">Licence Bac + 3</h5>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-white">CATEGORIE V</h6>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-lg-6 mb-5">
                <div className="card m-auto shadow d-flex align-items-center justify-content-center text-center bg-info text-white master" style={{"width": "90%","height": "350px"}}>
                    <div className="card-body d-flex align-items-center justify-content-center text-center gap-3" style={{"columnGap": "30px !important"}}>
                      <i className="fas fa-graduation-cap" style={{"fontSize": "80px"}}></i>
                      <div style={{"display": "flex","flexDirection": "column","rowGap": "5px"}}>
                        <h5 className="card-subtitle mb-2 font-weight-bold text-white">Master Bac + 5</h5>
                        <h6 className="card-subtitle mb-2 font-weight-bold text-white">CATEGORIE VIII</h6>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        </>
    )
}

export default Diplome;