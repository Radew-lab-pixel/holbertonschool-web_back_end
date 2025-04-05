import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    // ClassRoom.create(19)
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

/* output if array of object, Node.js/JS will return will contain object
structure not just the return value of methods. if just value not structure,
const sizes = rooms.map(room => room.getMaxStudentsSize());

return [
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
  */
