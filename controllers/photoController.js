import Photo from "../models/photoModel.js"

const createPhoto = async (req,res) => {
try{
    const  photo = await Photo.create(req.body);
    res.status(201).json({
        success: true,
        photo,
    });
} catch (error){
    res.status(201).json({
        success: false,
        error,
    });
}
};

export { createPhoto }