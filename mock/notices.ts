import { Request, Response } from 'express';

const getNotices = (req: Request, res: Response) => {
  res.json([
      {
        name: '安保',
        optionList: [
          {
            name: '安保类型',
            optionList: [
              {
                name: '封闭式',
                valuse: '封闭式'
              },
              {
                name: '开放式',
                valuse: '开放式'
              }
            ]
          },
          {
            name: '值守类型',
            optionList: [
              {
                name: '24小时值守',
                valuse: '24小时值守'
              },
              {
                name: '非24小时值守',
                valuse: '非24小时值守'
              }
            ]
          },
          {
            name: '摄像头种类',
            optionList: [
              {
                name: '拟摄像头',
                valuse: '拟摄像头'
              },
              {
                name: '数字摄像头',
                valuse: '数字摄像头'
              }
            ]
          },
          {
            name: '存储设备类型',
            optionList: [
              {
                name: '电脑',
                valuse: '电脑'
              },
              {
                name: '硬盘录像机',
                valuse: '硬盘录像机'
              },
              {
                name: '云存储',
                valuse: '云存储'
              }
            ]
          },
          {
            name: '门禁类型',
            optionList: [
              {
                name: '可视',
                valuse: '可视'
              },
              {
                name: '非可视',
                valuse: '非可视'
              }
            ]
          },
          {
            name: '服务等级',
            optionList: [
              {
                name: '1',
                valuse: '1'
              },
              {
                name: '2',
                valuse: '2'
              },
              {
                name: '3',
                valuse: '3'
              },
              {
                name: '4',
                valuse: '4'
              },
              {
                name: '5',
                valuse: '5'
              }
            ]
          }
        ]
      }
  ]);
};

export default {
  'GET /api/notices': getNotices,
};
