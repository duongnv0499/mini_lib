const Ddc = require('../../models/Ddc')
const {Types} = require("mongoose");

const getDdc = async req => {
    const { title, key, page, limit, available } = req.query
    const query = {}

    return Ddc.aggregate([
        { $match: query },
        {
            $group: {
                _id: '$_id',
                // count: { $sum: 1 },
                num: { $first: '$num' },
                name: { $first: '$name' },
                data: {$first: '$data'},
                _ids: { $push: '$_id' },
            },
        },
        // { $skip: skip },
        // { $limit: vLimit },
    ])
}

module.exports = getDdc
