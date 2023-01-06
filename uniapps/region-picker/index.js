const zones_tree = [
  {
    id: '1',
    name: '北京市',
    code: '110000',
    children: [
      {
        id: '1',
        name: '市辖区',
        code: '110100',
        children: [
          { id: '1', name: '东城区', code: '110101' },
          { id: '2', name: '西城区', code: '110102' },
          { id: '3', name: '朝阳区', code: '110105' },
          { id: '4', name: '丰台区', code: '110106' },
          { id: '5', name: '石景山区', code: '110107' },
          { id: '6', name: '海淀区', code: '110108' },
          { id: '7', name: '门头沟区', code: '110109' },
          { id: '8', name: '房山区', code: '110111' },
          { id: '9', name: '通州区', code: '110112' },
          { id: '10', name: '顺义区', code: '110113' },
          { id: '11', name: '昌平区', code: '110114' },
          { id: '12', name: '大兴区', code: '110115' },
          { id: '13', name: '怀柔区', code: '110116' },
          { id: '14', name: '平谷区', code: '110117' },
          { id: '15', name: '密云区', code: '110118' },
          { id: '16', name: '延庆区', code: '110119' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '天津市',
    code: '120000',
    children: [
      {
        id: '2',
        name: '市辖区',
        code: '120100',
        children: [
          { id: '17', name: '和平区', code: '120101' },
          { id: '18', name: '河东区', code: '120102' },
          { id: '19', name: '河西区', code: '120103' },
          { id: '20', name: '南开区', code: '120104' },
          { id: '21', name: '河北区', code: '120105' },
          { id: '22', name: '红桥区', code: '120106' },
          { id: '23', name: '东丽区', code: '120110' },
          { id: '24', name: '西青区', code: '120111' },
          { id: '25', name: '津南区', code: '120112' },
          { id: '26', name: '北辰区', code: '120113' },
          { id: '27', name: '武清区', code: '120114' },
          { id: '28', name: '宝坻区', code: '120115' },
          { id: '29', name: '滨海新区', code: '120116' },
          { id: '30', name: '宁河区', code: '120117' },
          { id: '31', name: '静海区', code: '120118' },
          { id: '32', name: '蓟州区', code: '120119' },
        ],
      },
    ],
  },
];

module.exports = {
  zones_tree,
};