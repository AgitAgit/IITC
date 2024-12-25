const Business = require('./../models/businessModel');

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
        const business = new Business({ name, description, category, owner: _id });
        const result = await business.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
async function updateBusiness(req, res, next) {
    try {
        const { _id } = req.user._id;
        const { id } = req.params;
        const { name, description, category } = req.body;
        if (_id !== id) {
            res.status(400).json({ message: "you are not the owner of this business!" });
            return;
        }
        if (name === "" || description === "" || category === "") {
            res.status(400).json({ message: "fields cannot be empty strings!" });
            return;
        }
        const result = await Business.findByIdAndUpdate(id, { name, description, category });//what will happen if one of these are missing from the request body?
        res.json(result);
    } catch (error) {
        next(error);
    }
}
async function deleteBusiness(req, res, next) {
    try {
        const { _id } = req.user._id;
        const { id } = req.params;
        if (_id !== id) {
            res.status(400).json({ message: "you are not the owner of this business!" });
            return;
        }
        const result = await Business.findByIdAndDelete(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
}
//subscriptions
async function subscribeToBusiness(req, res, next) {
    try {
        const { _id } = req.user._id;
        const { id } = req.params;
        const business = Business.findById(id);
        if (business.subscribers.includes(_id)) {
            res.json({ message: "the user is already subscribed to this business" });
            return;
        }
        business.subscribers.push(_id);
        const result = await business.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
async function unsubscribeFromBusiness(req, res, next) {
    try {
        const { _id } = req.user._id;
        const { id } = req.params;
        const business = Business.findById(id);
        business.subscribers = business.subscribers.filter(sub => sub !== _id)
        const result = await business.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
//reviews
async function addReview(req, res, next) {
    try {
        const { _id } = req.user._id;
        const { id } = req.params;
        const { comment } = req.body;
        const business = Business.findById(id);
        business.reviews.push({ userId: _id, comment });
        const result = await business.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
async function getReviewsByBusinessId(req, res, next) {
    try {
        const { id } = req.params;
        const reviews = await Business.findOne({_id:id},{reviews:1});
        res.json(reviews);
    } catch (error) {
        next(error);
    }
}