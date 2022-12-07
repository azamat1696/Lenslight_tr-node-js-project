import OurTeam from "../models/ourTeamModel.js";

const createOurTeam = async (req,res) => {
    try {
        const ourTeam = await OurTeam.create(req.body);
        res.status(201).json({
            success: true,
            ourTeam
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            error
        })
    }
}

export { createOurTeam }