const fs = require("fs");
const path = require("path");
const User = require("../models/User");

//@desc Update user profile (name, avatar, company, details)

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req,user._id);
    if (!user) return res.status(404).json({ message: "User not found"});

    user.name = name || user.name;
    user.avatar = avatar || user.avatar;
    user.name = resume || user.resume;

    // If employer, allow updating company info
    if (user.role === "employer"){
        user.companyName = companyName || user.companyName;
        user.companyDescription = companyDescription || user.companyDescription;
        user.companyLogo = companyLogo || user.companyLogo;
    }

    await user.save();

    res.json({
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
        role: user.role,
        companyName: user.companyName,
        companyDescription: user.companyDescription,
        companyLogo: user.companyLogo,
        resume: user.resume || '',
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Delete resume file (Jobseeker only)
exports.deleteResume = async (req, res) => {
  try {
    const { resumeUrl } = req.body; //expect resumeUrl to be the URL of the resume
//Extract file name form the URL 


  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Get user Public profile

exports.getPublicProfile = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
