const Shipment = require('../models/shipment')

module.exports = {
    trackOrder: function(req, res) {
        const shipping_id = req.params.shipping_id;

        // find related order and populate it's data
        Shipment.findById(shipping_id, function(err, foundShipment) {
            if (err) {
                res.status(500).json({ status: 'error', message: err});
            } else {
                if (!foundShipment) {
                    res.status(200).json({ status: 'error', message: `Shipment ${shipping_id} is not found`});
                } else {
                    res.status(200).json({ status: 'success', message: foundShipment});
                }
            }
        });
    }
};