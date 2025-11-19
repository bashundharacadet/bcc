import Notice from "./notice.module.js";

// Create a new notice
const createNotice = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newNotice = new Notice({
            title,
            description,
            date
        });
        const savedNotice = await newNotice.save();
        if (savedNotice) {
            res.status(201).json({ message: 'Notice created successfully', notice: savedNotice });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all notices
const getNotices = async (req, res) => {
    try {
        // Fetches all notices and sorts them by date in descending order (newest first)
        // If your schema uses 'createdAt', change 'date' to 'createdAt'
        const notices = await Notice.find().sort({ date: -1 });
        
        res.status(200).json(notices);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get a single notice by ID
const getNoticeById = async (req, res) => {
    try {
        const { id } = req.params;
        const notice = await Notice.findById(id);

        if (!notice) {
            return res.status(404).json({ message: 'Notice not found' });
        }

        res.status(200).json(notice);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update a notice by ID
const updateNotice = async (req, res) => {
    try {
        const { id } = req.params;
        // { new: true } ensures the response contains the updated document, not the old one
        // { runValidators: true } ensures the update obeys schema rules
        const updatedNotice = await Notice.findByIdAndUpdate(id, req.body, { 
            new: true, 
            runValidators: true 
        });

        if (!updatedNotice) {
            return res.status(404).json({ message: 'Notice not found' });
        }

        res.status(200).json({ message: 'Notice updated successfully', notice: updatedNotice });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a notice by ID
const deleteNotice = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNotice = await Notice.findByIdAndDelete(id);

        if (!deletedNotice) {
            return res.status(404).json({ message: 'Notice not found' });
        }

        res.status(200).json({ message: 'Notice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Exporting the functions to be used in routes
export {
    createNotice,
    getNotices,
    getNoticeById,
    updateNotice,
    deleteNotice
};