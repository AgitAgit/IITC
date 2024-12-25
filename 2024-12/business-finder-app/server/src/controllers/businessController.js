const Business = require('../models/businessModel.js');

module.exports = {
    getAllBusinesses,
    addBusiness,
    updateBusiness,
    deleteBusiness,
    subscribeToBusiness,
    unsubscribeFromBusiness,
    addReview,
    getReviewsByBusinessId
}

// async function (req, res, next) {
//     try {

//     } catch (error) {
//         next(error);
//     }
// }

//business
async function getAllBusinesses(req, res, next) {
    try {
        const businesses = await Business.find();
        res.json(businesses);
    } catch (error) {
        next(error);
    }
}

async function addBusiness(req, res, next) {
    try {
        const { _id } = req.user;
        const { name, description, category } = req.body;
        const business = new Business({name, description, category, owner:_id});
        const result = await business.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
async function updateBusiness(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function deleteBusiness(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
//subscriptions
async function subscribeToBusiness(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function unsubscribeFromBusiness(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
//reviews
async function addReview(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}
async function getReviewsByBusinessId(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}