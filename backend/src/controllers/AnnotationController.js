const Annotation = require('../model/AnnotationData');

module.exports = {

    async read(req, res){
        const annotationList = await Annotation.find();
        res.json(annotationList);
    },

    async create(req, res){
        const {title, notes, priority} = req.body;

        if (!title || !notes){return res.status(400).json({ error: "Necessario um TITULO/ANOTAÇÃO" })};

        const annotationCreated = await Annotation.create({
            title,
            notes,
            priority
        })

        res.json(annotationCreated);
    },

    async delete(req, res){
        const { id } = req.params;

        const annotationDelete = await Annotation.findOneAndDelete({ _id : id});

        if(annotationDelete) {
            return res.json(annotationDelete);
        };

        res.status(401).json({ error: "Não foi possivel encontrar esse registro!" })

        
    }
}