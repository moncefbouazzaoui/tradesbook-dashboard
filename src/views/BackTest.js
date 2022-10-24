
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  CardText,
  CardFooter,
  Form
} from "reactstrap";

// core components
import {
  chartExample1
} from "variables/charts.js";
import { Button, Text } from '@chakra-ui/react';
import { ChevronUpIcon} from '@chakra-ui/icons';



function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const setInitialAmout = () => {
    console.log('setInitialAmout');
  }

  return (
    <>
      <div className="content">
      <Row>
          <Col>
            <Card>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="9">
                    <Row >
                      <Col md="4">
                        <Input
                          className="text-center h4"
                          placeholder="0"
                          type="number"
                        />
                      </Col>
                      <Col md="4">
                        <Input
                          className="text-center h4"
                          placeholder="0"
                          type="number"
                        />
                      </Col>
                      <Col md="4">
                        <Input
                          className="text-center h4"
                          placeholder="0"
                          type="number"
                        />
                      </Col>
                      </Row>
                      <Row  className="pt-md-1" >
                        <Col md="4">
                          <Button
                            onClick={() => setInitialAmout()}
                            colorScheme='messenger'
                            height='35px'
                            width='100%'
                          >
                            Set Initial
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            colorScheme='red'
                            height='35px'
                            width='100%'
                          >
                            - Add Loss
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            colorScheme='whatsapp'
                            height='35px'
                            width='100%'
                          >
                            + Add Profit
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="3">
                      <Button
                        colorScheme='cyan'
                        height='90px'
                        width='100%'
                      >
                        Undo
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                  <Row>
                    <Col className="text-center" md="3">
                      <h1 className="card-category">Win Rate</h1>
                      <CardTitle className="title"><Text as='b'>50%</Text></CardTitle>
                    </Col>
                    <Col className="text-center" md="3">
                      <h1 className="card-category">PnL</h1>
                      <CardTitle className="title"><Text as='b' color='#22c35e'><ChevronUpIcon/> 30.56%</Text></CardTitle>
                    </Col>
                    <Col className="text-center" md="3">
                      <h1 className="card-category">Nomber of trades</h1>
                      <CardTitle className="title"><Text as='b'>25</Text></CardTitle>
                    </Col>
                    <Col className="text-center" md="3">
                      <h1 className="card-category">Wins/Losses</h1>
                      <CardTitle className="title"><Text as='b'>20W/5L</Text></CardTitle>
                    </Col>
                  </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  {/* <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1"
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Accounts
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2"
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Purchases
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3"
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    </>
  );
}

export default Dashboard;
