import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    // Nos traemos solo las tareas del usuario actual logueado
    const tasks = await Task.find({
      user: req.user.id
    }).populate('user') // Ahora user nos devuelve toda la data del user y no solo el id;
    res.json(tasks)
  } catch (error) {
    res.send(error)
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('user'); // Ahora user nos devuelve toda la data del user y no solo el id;
    if(!task) return res.status(404).json({ message: 'Task not found'})
    return res.json(task)
  } catch (error) {
    return res.send(error)
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({ message: 'Task not found'})
    return res.sendStatus(204); // Todo OK, no devuelvo nada
  } catch (error) {
    return res.send(error)
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id // Recordar que guardamos el user en el middleware
    });

    const savedTask = await newTask.save();
    return res.send(savedTask);

  } catch (error) {
    return res.send(error)
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true // Le pedimos que devuelva la nueva tarea hecha
    })
    if(!task) return res.status(404).json({ message: 'Task not found'})
    return res.json(task)

  } catch (error) {
    return res.send(error)
  }
};
