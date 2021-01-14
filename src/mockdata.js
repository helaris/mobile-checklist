const jobs = [
  {
    id: '1',
    locationName: "IKEA Berlin - Tempeof",
    address: "147 Nuzum Court, 14202 Berlin",
    orders: 1,
    distance: "15km",
    dueDate: "15 December",
    checkList: [
      { id: "1234", title: 'Machine Room/Space Requirements', isChecked: false },
      { id: "1231", title: 'Hoistway and Pits', isChecked: false },
      { id: "2312", title: 'Secondary and Overhead Shave Space', isChecked: false },
      { id: "1236", title: 'Miscellaneous' },
      { id: "3452", title: 'Sprinkler, Shunt Trip and Detector', isChecked: false }
    ],

  },
  {
    id: "2",
    locationName: "ALDI Berlin - Styeglits",
    address: "147 Nuzum Court, 14202 Berlin",
    orders: 2,
    distance: "15km",
    dueDate: "18 December",
    checkList: [
      { id: "1237", title: 'Machine Room/Space Requirements', isChecked: false },
      { id: "1111", title: 'Hoistway and Pits' },
      { id: "2321", title: 'Secondary and Overhead Shave Space', isChecked: false },
      { id: "1275", title: 'Miscellaneous', isChecked: false },
      { id: "3400", title: 'Sprinkler, Shunt Trip and Detector', isChecked: false }
    ],

  },
  {
    id: "3",
    locationName: "Martin-Gropius-Bau",
    address: "147 Nuzum Court, 14202 Berlin",
    orders: 1,
    distance: "15km",
    dueDate: "20 December",
    checkList: [
      { id: "1321", title: 'Machine Room/Space Requirements', isChecked: false },
      { id: "4321", title: 'Hoistway and Pits', isChecked: false },
      { id: "3433", title: 'Secondary and Overhead Shave Space', isChecked: false },
      { id: "5555", title: 'Miscellaneous', isChecked: false },
      { id: "7777", title: 'Sprinkler, Shunt Trip and Detector', isChecked: false }
    ],
  },
];

export default jobs;