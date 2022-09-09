import {
    AppstoreOutlined,
    UserOutlined,
    TableOutlined,
    HomeOutlined,
    SwitcherOutlined,
} from '@ant-design/icons';
import Services from './Services';
import Avantages from './Avantages';
import User from './User';
import Reservation from './Reservation';
import First from './First';

const listMenu = [
    {
        icon: <AppstoreOutlined />,
        label: "Dashboard",
        path: "/main/First",
        component: First
    },
    {
        icon: <UserOutlined />,
        label: "User",
        path: "/main/user",
        component:User 
    },

    {
        icon: <TableOutlined />,
        label: "Services",
        path: "/main/services",
        component:Services 
    },

    {
        icon: <HomeOutlined />,
        label: "Avantages",
        path: "/main/avantages",
        component:Avantages
    },

    {
        icon: < SwitcherOutlined />,
        label: "Reservation",
        path: "/main/reservation",
        component:Reservation 
    },

]

export { listMenu };








