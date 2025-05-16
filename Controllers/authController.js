import User from "../models/User.js";


// POST: Register a new property
export const registerController = async (req, res) => {
  try {
    const {
      propertyImage,
      propertyName,
      propertyPrice,
      propertyDescription,
    } = req.body;

    // validation
    if (!propertyImage || !propertyName || !propertyPrice || !propertyDescription) {
      return res.status(400).json({
        success: false,
        message: "Please provide all property fields",
      });
    }

    // create new property entry
    const user = await User.create({
      propertyImage,
      propertyName,
      propertyPrice,
      propertyDescription,
    });

    res.status(201).json({
      success: true,
      message: "Property registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// GET: Fetch all properties
export const getAllPropertiesController = async (req, res) => {
  try {
    const properties = await User.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({
      success: true,
      message: "All properties fetched successfully",
      properties,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching properties",
      error,
    });
  }
};
