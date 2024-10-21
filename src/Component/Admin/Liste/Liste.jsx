const Liste = () => {
    return (
        <>
            <div className="header--wrapper">
            <div className="header--title">
                <span>primary</span>
                <h2>Dashboard</h2>
            </div>
            <div className="user--info">
                <div className="searh--box">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src="assets/image/SARY TAPAKA.JPG" alt=""/>
            </div>
        </div>

        <div className="card--container">
            <h3 className="main--title">Today s data</h3>
            <div className="card--wrapper">
                <div className="payment--card light-red">
                    <div className="card--header">
                        <div className="amount">
                            <span className="title">
                                Payement amount
                            </span>
                            <span className="amount--value">
                                100.000 AR
                            </span>
                        </div>
                        <i className="fas fa-dollar-sign icon"></i>
                    </div>
                    <span className="card-detail">
                        **** **** **** 3484
                    </span>
                </div>

                <div className="payment--card light-purple">
                    <div className="card--header">
                        <div className="amount">
                            <span className="title">
                                Payement order
                            </span>
                            <span className="amount--value">
                                200.000 AR
                            </span>
                        </div>
                        <i className="fas fa-list icon dark-purple"></i>
                    </div>
                    <span className="card-detail">
                        **** **** **** 5542
                    </span>
                </div>

                <div className="payment--card light-green">
                    <div className="card--header">
                        <div className="amount">
                            <span className="title">
                                Payement order
                            </span>
                            <span className="amount--value">
                                300.000 AR
                            </span>
                        </div>
                        <i className="fas fa-users icon dark-green"></i>
                    </div>
                    <span className="card-detail">
                        **** **** **** 8896
                    </span>
                </div>

                <div className="payment--card light-blue">
                    <div className="card--header">
                        <div className="amount">
                            <span className="title">
                                Payement order
                            </span>
                            <span className="amount--value">
                                400.000 AR
                            </span>
                        </div>
                        <i className="fas fa-check icon dark-blue"></i>
                    </div>
                    <span className="card-detail">
                        **** **** **** 3484
                    </span>
                </div>
            </div>
        </div>

        <div className="tabular--wrapper">
            <h3 className="main--title">
                Finance data
            </h3>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transaction Type</th>
                            <th>Description</th>
                            <th>amount</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023-05-01</td>
                            <td>Expenses</td>
                            <td>Office Supplies</td>
                            <td>$250</td>
                            <td>Office Expenses</td>
                            <td>Pending</td>
                            <td><button>Edit</button></td>
                        </tr>
                        <tr>
                            <td>2023-05-01</td>
                            <td>Expenses</td>
                            <td>Office Supplies</td>
                            <td>$250</td>
                            <td>Office Expenses</td>
                            <td>Pending</td>
                            <td><button>Edit</button></td>
                        </tr>
                        <tr>
                            <td>2023-05-01</td>
                            <td>Expenses</td>
                            <td>Office Supplies</td>
                            <td>$250</td>
                            <td>Office Expenses</td>
                            <td>Pending</td>
                            <td><button>Edit</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="7">Total: $750</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        </>
    )
}
export default Liste;