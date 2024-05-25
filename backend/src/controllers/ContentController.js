const Annotation = require('../model/AnnotationData');

module.exports = {
    async update(req, res) {
        const { id } = req.params;
        const { notes } = req.body;

        const annotation = await Annotation.findOne({ _id: id });

        annotation.notes = notes || annotation.notes;
        await annotation.save();


        res.json(annotation);
    }
}