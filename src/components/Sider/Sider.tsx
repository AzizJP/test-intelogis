import {Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {FC, memo} from 'react';

import './Sider.scss';

interface DataType {
  key: string;
  number: string;
  coordinatesFromLat: number;
  coordinatesFromLng: number;
  coordinatesToLat: number;
  coordinatesToLng: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Номер заявки',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Координаты ОТ lat',
    dataIndex: 'coordinatesFromLat',
    key: 'coordinatesFromLat',
  },
  {
    title: 'Координаты ОТ Ing',
    dataIndex: 'coordinatesFromLng',
    key: 'coordinatesFromLng',
  },
  {
    title: 'Координаты ДО lat',
    dataIndex: 'coordinatesToLat',
    key: 'coordinatesToLat',
  },
  {
    title: 'Координаты ДО Ing',
    dataIndex: 'coordinatesToLng',
    key: 'coordinatesToLng',
  },
];

const data: Array<DataType> = [
  {
    key: '1',
    number: '№1',
    coordinatesFromLat: 59.84660399,
    coordinatesFromLng: 30.29496392,
    coordinatesToLat: 59.82934196,
    coordinatesToLng: 30.42423701,
  },
  {
    key: '2',
    number: '№2',
    coordinatesFromLat: 59.82934196,
    coordinatesFromLng: 30.42423701,
    coordinatesToLat: 59.82761295,
    coordinatesToLng: 30.41705607,
  },
  {
    key: '3',
    number: '№3',
    coordinatesFromLat: 59.83567701,
    coordinatesFromLng: 30.38064206,
    coordinatesToLat: 59.84660399,
    coordinatesToLng: 30.29496392,
  },
  {
    key: '4',
    number: '№4',
    coordinatesFromLat: 59.84660399,
    coordinatesFromLng: 30.29496392,
    coordinatesToLat: 59.82761295,
    coordinatesToLng: 30.41705607,
  },
  {
    key: '5',
    number: '№5',
    coordinatesFromLat: 59.83567701,
    coordinatesFromLng: 30.38064206,
    coordinatesToLat: 59.84660399,
    coordinatesToLng: 30.29496392,
  },
];

const Sider: FC = memo(() => {
  return (
    <section className="sider">
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              // eslint-disable-next-line no-console
              console.log(rowIndex);
            },
          };
        }}
        pagination={false}
        bordered
        tableLayout="fixed"
        size="small"
        columns={columns}
        dataSource={data}
      />
    </section>
  );
});

export default Sider;
