import React, { Component } from 'react';
import { Col, Divider, Row, Card } from 'antd';
import { Component } from 'react';
import graphe  from '../assets/graphe.png';
import bandeo from '../assets/bandeo.png';
import Anneaux from '../assets/Anneaux.png';

export default class graph extends Component {
    render() {
        return (

        <div className="site-card-border-less-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Graphique de  reduction de billet " bordered={false}>
                  {<img alt="graphe" style={{
                    width: 305,

                  }} src={graphe} />}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Cout des billets partant de janvier à mars " bordered={false}>

                  {<img alt="bandeo" style={{
                    width: 305,

                  }} src={bandeo} />}
                </Card>
              </Col>

              <Col span={8}>
                <Card title="75% beneficaires de la réduction" bordered={false}>
                  {<img alt="Anneaux" style={{
                    width: 200,marginRight:"50%"

                  }} src={Anneaux} />}
                </Card>
              </Col>
            </Row>
            <Row />
          
            <Divider orientation="left"></Divider>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div style={{ backgroundColor: "green" ,height: "280%",marginLeft:" 19%" }}>Visitors Today
                 
                  1,521</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={{backgroundColor: "yellow", height: "280%",marginLeft:" 19%"}}>
                  32,211 +10%</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={{backgroundColor: "orange", height: "280%",marginLeft:" 19%" }}>Pages Views</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={{backgroundColor: " #4169E1", height: "280%",marginLeft:" 19%"}}>Shares +05%</div>
              </Col>
            </Row>
            <Divider orientation="left"></Divider>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              
            </Row>
        </div >

     )
    }
}
