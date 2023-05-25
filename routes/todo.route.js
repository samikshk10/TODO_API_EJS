const express = require('express')
const router = express.Router();
router.get("/", (req, res) => {
    req.conn.query("SELECT * FROM todo", (error, result) => {
        if (error) {
            res.status(500).send("Error in displaying data")
        }
        result.rows.length > 0 ? res.json(result.rows) : res.json('empty table');
    })
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    req.conn.query("SELECT * from todo where id=$1", [id], (error, result) => {
        if (error) {
            res.status(500).json("Error updating todo");
        }
        result.rows.length > 0 ? res.json(result.rows) : res.json('No data found');

    })
});

router.post("/", (req, res) => {
    const todo = req.body.title;
    req.conn.query("INSERT into todo (title) values ($1)", [todo], (error, result) => {
        if (error) {

            res.status(500).send("Error inserting todo data");
        }
        res.json("Todo inserted successfully");
    })
});

router.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const title = req.body.title;
    req.conn.query("UPDATE todo set title=$1 where id=$2", [title, id], (error, result) => {
        if (error) {
            res.status(500).send("Error update todo")
        }
        result.rowCount > 0 ? res.json("todo update success") : res.json("no data found");
    })
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    req.conn.query("DELETE from todo where id=$1", [id], (error, result) => {
        if (error) {
            res.status(500).send("Error deleting todo");

        }
        result.rowCount > 0 ? res.json("deleted successfully") : res.json("No data found");
    })
});

module.exports = router;