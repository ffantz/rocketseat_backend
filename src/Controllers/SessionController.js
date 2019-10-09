// Can have index, show, store, update and destroy
const User = require('../Models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;                 // Searchs for 'email' attribute inside body
        let user = await User.findOne({ email });  // 'await' command wait for this instruction ends
        // let user = await User.findOne({ email : email });  // Another possible way to send email
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};