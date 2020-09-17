import React, { Component } from 'react';

class progress extends Component {

  state = {
    onnav: false
  }

  render() {
    return (


      <div className=" container border-bottom " >
        <div className="row ">

          <div className="col-6 mb-3 border-right">
            <h2 className="m-4">weekly Goal</h2>
            <div className={'c100' + this.props.circle.properities + this.props.circle.color} >
              <span>{this.props.circle.value}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div>
              <div className=" dropdown text-decoration-none">
                <a className=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ position: 'relative', left: '250px' }}>
                  Edit Goal
                                            </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item " href="#">٧ اصحاحات</a>
                  <a className="dropdown-item" href="#">١٤ اصحاحات </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">٢١ اصحاحات</a>
                </div>
              </div>
              <p style={{ position: 'relative', top: '30px' }}> {this.props.description}</p>
            </div>

          </div>


          <div className="col-6 mb-3">
            <nav className="navbar  navbar-white bg-light  mb-3 ">
              <a className="navbar-brand m-0" onClick={this.props.toggleongrades}>Gades</a>

              <a className="m-1" onClick={this.props.toggleonAnn}>annoncements <span className="sr-only">(current)</span></a>
              <a className="m-1" href="#">calender</a>
              <a className="m-1" href="#">todo </a>

            </nav>

            {
              this.props.ongrade &&
              <div >
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading"> Quiz 1 <span className=" grades  badge-pill badge-success">100%</span> </h4>
                </div>
                <div >
                  <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading"> Quiz 2<span className=" grades  badge-pill badge-danger ">60%</span> </h4>
                  </div>
                </div>
              </div>
            }
            {this.props.onAnnoncement &&
              <div>
                <ul>
                  <li>annon1</li>
                  <li>annon2</li>
                </ul>
              </div>


            }

          </div>
        </div>

        {/* circle */}




        {/* Change the size of the progress bar.

<div class="c100 p25 big">
  ...
</div>

<div class="c100 p25 small">
  ...
</div> */}
        {/* Change the color of the progress bar.

<div class="c100 p25 green">
  ...
</div>

<div class="c100 p25 orange">
  ...
</div>

<div class="c100 p25 dark">
  ...
</div> */}

      </div>
    );

  }

}
export default progress