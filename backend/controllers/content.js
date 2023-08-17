const Content = require('../models/artical');


exports.createContent = async (req, res) => {
  try {
    const { title, content, status, image } = req.body;
    console.log(req.body)
    const contentCount = await Content.countDocuments();
    const article = new Content({
      id: contentCount + 1,
      title,
      content,
      status,
      image,
    });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating content' });
  }
};

exports.getContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id).populate('author');
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching content' });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { title, body } = req.body;
    const content = await Content.findByIdAndUpdate(
      req.params.id,
      { title, body, updatedAt: Date.now() },
      { new: true }
    );
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating content' });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndRemove(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting content' });
  }
};

exports.listContent = async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching content list' });
  }
};
