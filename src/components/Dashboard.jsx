import { Helmet } from "react-helmet";

const Error = () => {
    return (<>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card tale-bg">
                    <div className="card-people mt-auto">
                        <img src="https://www.bootstrapdash.com/demo/skydash/template/images/dashboard/people.svg" alt="people" />
                        <div className="weather-info">
                            <div className="d-flex">
                                <div>
                                    <h2 className="mb-0 font-weight-normal"><i className="icon-sun me-2" />31<sup>C</sup></h2>
                                </div>
                                <div className="ms-2">
                                    <h4 className="location font-weight-normal">Chicago</h4>
                                    <h6 className="font-weight-normal">Illinois</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
                <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                        <div className="card card-tale">
                            <div className="card-body">
                                <p className="mb-4">Today’s Bookings</p>
                                <p className="fs-30 mb-2">4006</p>
                                <p>10.00% (30 days)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 stretch-card transparent">
                        <div className="card card-dark-blue">
                            <div className="card-body">
                                <p className="mb-4">Total Bookings</p>
                                <p className="fs-30 mb-2">61344</p>
                                <p>22.00% (30 days)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                        <div className="card card-light-blue">
                            <div className="card-body">
                                <p className="mb-4">Number of Meetings</p>
                                <p className="fs-30 mb-2">34040</p>
                                <p>2.00% (30 days)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 stretch-card transparent">
                        <div className="card card-light-danger">
                            <div className="card-body">
                                <p className="mb-4">Number of Clients</p>
                                <p className="fs-30 mb-2">47033</p>
                                <p>0.22% (30 days)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>);
}

export default Error;  