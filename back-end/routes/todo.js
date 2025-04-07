const express = require('express');
const Todo = require('../models/Todo');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

//todo create
router.post('/', authenticate, async(req, res) => {
    try{
        const { title, description } = req.body;

        const newTodo = new Todo({
            title,
            description,
            userId: req.user.userId // 로그인한 사용자 ID 가져오기
        });

        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(err) {
        res.status(500).json({ message: '항목 생성 실패', error: err.message });
    }
})

//todo read
router.get('/', authenticate, async (req, res) => {
    try{
        const todos = await Todo.find({ userId: req.user.userId });
        res.status(200).json(todos);
    } catch(err) {
        res.status(500).json({ message: '항목 조회 실패', error: err.message });
    }
})

//todo update
router.put('/:id', authenticate, async(req, res) => {
    try{
        const { title, description, completed } = req.body;
        const updateTodo = await Todo.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            { title, description, completed },
            { new: true }
        );

        if(!updateTodo){
            return res.status(404).json({ message : '항목을 찾을 수 없습니다.' });
        }

        res.status(200).json(updateTodo);

    }catch(err) {
        res.status(500).json({ messagae: '항목 수정 실패' });
    }
})

router.delete('/:id', authenticate, async(req, res) => {
    try{
        const deletedTodo = await Todo.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.userId
        });

        if(!deletedTodo) {
            return res.status(404).json({ message : '항목을 찾을 수 없습니다.' });
        }

        res.status(200).json({ message: '항목 삭제 완료'})
    }catch(err) {
        res.status(500).json({ message: '항목 삭제 실패', error: err.message  });
    }
})

module.exports = router;