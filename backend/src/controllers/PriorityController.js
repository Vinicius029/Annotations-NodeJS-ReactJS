const Annotation = require('../model/AnnotationData');

module.exports = {
    async read(req, res) {
        const priorityHeader = req.headers.priority;
        const priority = JSON.parse(priorityHeader);
    
        if (priority !== true) {
            return res.status(400).json({ error: "Priority Não é verdadeiro" });
        }
    
        const priorityNotes = await Annotation.find({ priority: true });
    
        return res.json(priorityNotes);
    },

    async update(req, res){
        const { id } = req.params;

        const annotation = await Annotation.findOne({ _id : id });

        annotation.priority = annotation.priority ? false : true;

        await annotation.save();

        res.json(annotation);
    }
    
}