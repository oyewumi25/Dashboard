
import { Typography,Card,Col,Row,Button } from 'antd';
import React from 'react';
const { Title } = Typography;
{/* <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link> */}

const Services = () => (
  < >
    <Title style={{color:"green",marginLeft:"43%",marginTop:"7%",backgroundColor:"dark"}}><i><u>Nos services</u></i></Title>
    {/* <p style={{marginLeft:"30%"}}><i>Notre plus grande expertise se situe dans les regions que nous visitons avec nos circuits.<br></br>
        Nous fournissons souvent des services de voyage à nos clients pour la planification personnelle <br></br>de voyage avant ou après les visites.</i></p> */}
        <br></br>
        <Row gutter={16}>
      <Col span={8} >
        <Card title="VOYAGE D'été "bordered={false} style={{backgroundColor:"green",width:"50%",color:"white",marginLeft:"35%"}}>
        Lorem ipsum dolor sit amet. Et cupiditate quibusdam et quaerat 
        <Button type='primary'style={{marginTop:"10%"}}>En savoir plus</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="TOURS ACTIFS" bordered={false} style={{backgroundColor:"green",width:"50%",color:"white",marginLeft:"28%"}}>
        Lorem ipsum dolor sit amet. Et cupiditate quibusdam et quaerat 
        <Button type='primary'style={{marginTop:"10%"}}>En savoir plus</Button>

        </Card>
      </Col>
      <Col span={8}>
        <Card title="RECHERCHE EN VOL" bordered={false} style={{backgroundColor:"green",width:"50%",color:"white",marginLeft:"25%"}}>
        Lorem ipsum dolor sit amet. Et cupiditate quibusdam et quaerat 
        <Button type='primary'style={{marginTop:"10%"}}>En savoir plus</Button>

        </Card>
      </Col>
    </Row>
  </>
);

export default Services;

