
let rooms = []; 


export const createRoom = (req, res) => {
  const { name, seats, amenities, pricePerHour } = req.body;

  if (!name || !seats || !amenities || !pricePerHour) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newRoom = {
    id: rooms.length + 1,
    name,
    seats,
    amenities,
    pricePerHour
  };

  rooms.push(newRoom);
  res.status(201).json({ message: "Room created successfully", room: newRoom });
};

export const getAllRooms = (req, res) => {
    res.status(200).json({ rooms });
  };
