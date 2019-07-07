const {Router} = require('express');
const router = Router();

// получение списка задач
router.get('/', (req, res) => {
  console.log('aaaa');
  res.json({
    todos: [1,2,3]
  })
});

// создание новой задачи
router.post('/', (req, res) => {});

// изменение задачи по id
router.put('/:id', (req, res) => {});

// удаление задачи по id
router.delete('/:id', (req, res) => {});


module.exports = router;
