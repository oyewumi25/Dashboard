import { notification} from 'antd';

const openNotification = (type) => {
  notification[type]({
    message: 'Notification Title',
    description:'',
  });
};

export default {openNotification};
