import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
const EventDesciption = () => {
  return (
    <>
      {
        <div style={{ backgroundColor:"cyan", textAlign: "center", color: "black", width: "100%", height:"100%" }}>
          <div style={{ fontSize: "6vh" }}>limeLight</div>
          <button type="button" class="btn-close" style={{
              "position":"absolute",
              "top":"16px",
              "right":"16px",
               "color":"red"
          }} aria-label="Close"></button>

          <div style={{ padding: "20px" }}>
            <Row>
              <Col xs sm={12} lg={4} md={4} style={{ paddingBottom: "20px" }}>
                <Image
                  src="https://storage.googleapis.com/limelight-pictures/2018/07/Limelight-Open-Air-Booth-1440x960.jpg"
                  height="250vw"
                  width="320vw"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0px 4px 10px #4890ff2f",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://i.ibb.co/hcR8BXn/placeholder.jpg";
                  }}
                ></Image>
                <div style={{ paddingTop: "20px" }}>
                  {Event.endTime > new Date("2022-01-01") ? (
                    <>
                      <h6>
                        Start Time :{" "}
                        {new Date(Event.startTime).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </h6>
                      <h6>
                        End Time :{" "}
                        {new Date(Event.endTime).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </h6>
                    </>
                  ) : (
                    <h6>Events dates coming soon</h6>
                  )}
                </div>
                {Event.eventName == "Hackshetra" ? (
                  <>
                    <div
                      className="apply-button"
                      data-hackathon-slug="hackshetra22"
                      data-button-theme="light"
                      // style={{"height: 44px; width: 312px"}}
                      style={{ height: "44px", width: "312px" }}
                    ></div>
                  </>
                ) : (
                  <>
                    <Button
                      
                      style={{
                        color: "black",
                        border: "1px  solid white",
                        background: "transparent",
                      }}
                    >
                      Login to Register
                    </Button>

                    {/* <Button
                      style={{
                        color: "whitesmoke",
                        backgroundColor: "#e84338",
                        fontSize: "20px",
                        borderColor: "transparent",
                      }}
                    ></Button> */}
                  </>
                )}
              </Col>
              <Col>
                <div
                  style={{
                    textAlign: "left",
                    color: "black",
                    fontSize: "30px",
                  }}
                >
                  <h4>Description: </h4>
                  <p style={{ fontSize: "15px" }}>
                    {" "}
                    Finally, the time has come for you all to show your skills
                    and abilities. Here we present AXIOM brought to you by
                    Technobyte, so gear up to participate in the mind-wobbling
                    era to win exciting prizes worth 6,000🤩 This event will
                    help you in determining your potential, strengths, and
                    weaknesses, as an individual. Technobyte brings you the
                    opportunity to showcase your ingenious traits, competing and
                    challenging some of the most brilliant minds through this
                    exciting event.
                  </p>
                  <h4>Rules: </h4>
                    <div style={{ fontSize: '15px' }}>
                      <ul>
                  <li>Interview will be in a way to help participants in their campus interview.</li>    
             <li> Second round will be a face to face interview for all shortlisted candidates,</li>    
        <li>Questions will be mainly focused on mathematics, puzzles, reasoning and aptitude, predicting program outputs.</li> 
         <li>First round is a written round and is of 1 hour duration.</li> 
                <li> This is a single member event and it has 2 rounds.</li>  
                      </ul>
                    </div>
                  <h4>Venue: </h4>
                  <p style={{ fontSize: "15px" }}>senate Hall</p>
                  <h4>Coordinators: </h4>
                      abc
                </div>
              </Col>
            </Row>
          </div>
        </div>
      }
    </>
  );
};

export default EventDesciption;
