import React from 'react';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Typography, Card, Col, Row, Button, Tag } from 'antd';
const { Title } = Typography;

const Avantages = () => {
  return (
    <div className="site-card-wrapper">
      <Title style={{ color: " #ADD8E6 ", marginLeft: "43%", marginTop: "6%" }}><i><u>Nos avantages</u></i></Title>
      <br></br>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="La sérénité de voyager " bordered={false} style={{ backgroundColor: "  ", color: "", width: "", }}>
            Quoi de mieux que de confier ses projets voyages à un professionnel. Avec une maitrise parfaite du monde du voyage,
            une fine appréhension de toutes les destinations, ainsi qu’ une écoute attentive.
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Votre séjour a des tarifs compétitifs" bordered={false} style={{ backgroundColor: "", width: "", color: "", }}>
            Voici la plus ancienne idée reçue: passer par une agence de voyages, coute plus cher que  de réserver sur internet.
            Grace à notre affiliation  au réseau Selectour opérant comme une centrale d’ achat .
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Votre séjour a des tarifs compétitifs" bordered={false} style={{ backgroundColor: "", width: "", color: "", }}>
            Voici la plus ancienne idée reçue: passer par une agence de voyages, coute plus cher que  de réserver sur internet. Grace à notre affiliation  au réseau Selectour opérant
            comme une centrale d’ achat et l’accès à des outils professionnels.
          </Card>
        </Col>
      </Row>
      <Button type='primary' style={{ marginTop: "6%", marginLeft: "4%", width: "20%", height: "90%", borderRadius: "15%" }}>Nous contacter</Button>
      <h2 style={{ color: "#ADD8E6", marginTop: "2%", marginLeft: "40%" }}><b>Partager cet article</b></h2>

      <Tag icon={<TwitterOutlined />} color="#55acee" style={{ marginLeft: "35%" }} >
        Twitter
      </Tag>
      <Tag icon={<YoutubeOutlined />} color="#cd201f">
        Youtube
      </Tag>
      <Tag icon={<FacebookOutlined />} color="#3b5999">
        Facebook
      </Tag>
      <Tag icon={<LinkedinOutlined />} color="#55acee">
        LinkedIn
      </Tag>
    </div>
  );
}
export default Avantages;