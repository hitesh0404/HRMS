import React from "react";
import './../css/dashboard.css'
export default function Dashboard() {
  return (
    <>
     
      <main>
        <div className="row justify-content-center g-2">
          <div
            className="col-2"
            style={{ "background-color": " hsl(36, 88%, 50%)" }}
          >
            <ul
              className="side-links"
              style={{
                "list-style": "none",
                padding: "2%",
                margin: "0 0 0 4%",
              }}
            >
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
              <li>Lorem, ipsum dolor</li>
            </ul>
          </div>

          <div className="col main-links">
            <div className="row">
              <div className="col">
                <div className="card border-primary">
                  <div
                    className="position-relative"
                    style={{ height: "100px" }}
                  >
                    <img
                      className="card-img-top position-absolute top-50 start-50 translate-middle"
                      style={{ width: "100px" }}
                      src="C:\Users\admin\OneDrive\Pictures\random cat.jpg"
                      alt="Title"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Random Cat</h4>
                    <p className="card-text">
                      This is the random cat which is here just for demo
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-primary">
                  <div
                    className="position-relative"
                    style={{ height: "100px" }}
                  >
                    <img
                      className="card-img-top position-absolute top-50 start-50 translate-middle"
                      style={{ width: "100px" }}
                      src="C:\Users\admin\OneDrive\Pictures\random cat.jpg"
                      alt="Title"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-primary">
                  <div
                    className="position-relative"
                    style={{ height: "100px" }}
                  >
                    <img
                      className="card-img-top position-absolute top-50 start-50 translate-middle"
                      style={{ width: "100px" }}
                      src="C:\Users\admin\OneDrive\Pictures\random cat.jpg"
                      alt="Title"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Title</h3>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
