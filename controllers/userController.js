import user from '../model/userModel.js';
const contact = async (req, res) => {
    try {
        const response = await user.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        })
        res.status(200).json({
            status: 'success',
            payload: response
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }

}
export default contact;